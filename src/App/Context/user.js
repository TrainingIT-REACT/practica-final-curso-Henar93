import { createContext } from 'react';


const UserContext = createContext({
  signedIn: false,
  updateUser: ({name}) => {},
 
});

export default UserContext;
