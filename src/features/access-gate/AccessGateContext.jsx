import { createContext, useContext, useState } from 'react';

const AccessGateContext = createContext(null);
const STORAGE_KEY = 'cirkle:access';

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AccessGateProvider({ children }) {
  const [user, setUser] = useState(readStored);

  function grant({ name, email }) {
    const next = { name, email };
    setUser(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  }

  function revoke() {
    setUser(null);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }

  return (
    <AccessGateContext.Provider value={{ user, hasAccess: !!user, grant, revoke }}>
      {children}
    </AccessGateContext.Provider>
  );
}

export function useAccessGate() {
  return useContext(AccessGateContext);
}

export default AccessGateContext;
