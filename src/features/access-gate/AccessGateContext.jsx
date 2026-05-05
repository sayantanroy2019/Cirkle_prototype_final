import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { signOut as authSignOut } from '../../lib/auth';

const AccessGateContext = createContext(null);

export function AccessGateProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession) {
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

  return (
    <AccessGateContext.Provider
      value={{ session, hasAccess: !!session, loading, signOut }}
    >
      {children}
    </AccessGateContext.Provider>
  );
}

export function useAccessGate() {
  return useContext(AccessGateContext);
}

export default AccessGateContext;
