import { createContext } from 'react';


const UserContext = createContext({
  signedIn: false,
  updateUser: () => {},
  updateApellido: () => {},
});

export default UserContext;
