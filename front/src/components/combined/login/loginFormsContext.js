import { createContext } from 'react';

export const LoginFormsContext = createContext({
    authMode: true,
    changeAuthMode: () => {},
});