// src/pages/Home.js
import { useContext } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import ProfileDropdown from 'components/ProfileDropdown';


const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

    return (
      <>
        <h1>Home Page</h1>
        {isAuthenticated() && (
          <ProfileDropdown />
        )}
      </> 
    );

  };
  
  export default Home;
  