import { createContext } from 'react';
import { getSessionCookie } from '../../helpers/sessionUtils';

export * from './mobileProfileMenu';
export * from './profileMenu';

export const SessionContext = createContext(getSessionCookie());
