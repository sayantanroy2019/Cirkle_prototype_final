import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { signOut as authSignOut } from '../../lib/auth';

const AccessGateContext = createContext(null);

const VERIFIABLE_TYPES = new Set([
  'invite',
  'magiclink',
  'signup',
  'recovery',
  'email_change',
  'email',
]);

function cleanAuthParamsFromUrl() {
  try {
    const url = new URL(window.location.href);
    const stripQuery = ['token_hash', 'type', 'code', 'error', 'error_code', 'error_description'];
    let changed = false;
    stripQuery.forEach((k) => {
      if (url.searchParams.has(k)) {
        url.searchParams.delete(k);
        changed = true;
      }
    });
    if (window.location.hash && /access_token|refresh_token|error/.test(window.location.hash)) {
      window.history.replaceState({}, document.title, url.pathname + url.search);
      return;
    }
    if (changed) {
      window.history.replaceState({}, document.title, url.pathname + url.search + window.location.hash);
    }
  } catch {}
}

function readUrlAuthState() {
  try {
    const url = new URL(window.location.href);
    const tokenHash = url.searchParams.get('token_hash');
    const type = url.searchParams.get('type');
    const code = url.searchParams.get('code');

    let hashError = null;
    let queryError =
      url.searchParams.get('error_description') || url.searchParams.get('error');

    if (window.location.hash) {
      const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
      hashError =
        hashParams.get('error_description') || hashParams.get('error');
    }

    return {
      tokenHash,
      type,
      code,
      error: hashError || queryError || null,
    };
  } catch {
    return { tokenHash: null, type: null, code: null, error: null };
  }
}

export function AccessGateProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    let mounted = true;

    async function bootstrap() {
      const { tokenHash, type, code, error } = readUrlAuthState();

      if (error) {
        setAuthError(decodeURIComponent(error.replace(/\+/g, ' ')));
        cleanAuthParamsFromUrl();
      } else if (tokenHash && type && VERIFIABLE_TYPES.has(type)) {
        const { data, error: verifyError } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type,
        });
        if (verifyError) {
          setAuthError(verifyError.message || 'This link is invalid or has expired.');
        } else if (data?.session && mounted) {
          setSession(data.session);
        }
        cleanAuthParamsFromUrl();
      } else if (code) {
        const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
        if (exchangeError) {
          setAuthError(exchangeError.message || 'This link is invalid or has expired.');
        } else if (data?.session && mounted) {
          setSession(data.session);
        }
        cleanAuthParamsFromUrl();
      }

      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      if (data.session) setSession(data.session);
      setLoading(false);
    }

    bootstrap();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession) {
        setAuthError(null);
        try { localStorage.removeItem('cirkle:pending'); } catch {}
      }
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    await authSignOut();
  }

  function clearAuthError() {
    setAuthError(null);
  }

  return (
    <AccessGateContext.Provider
      value={{
        session,
        hasAccess: !!session,
        loading,
        authError,
        clearAuthError,
        signOut,
      }}
    >
      {children}
    </AccessGateContext.Provider>
  );
}

export function useAccessGate() {
  return useContext(AccessGateContext);
}

export default AccessGateContext;
