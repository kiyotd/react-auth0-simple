import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import {useAuth0} from "@auth0/auth0-react";

const App: React.FC = () => {

  const {isLoading} = useAuth0();

  if(isLoading) return <div>loading...</div>;

  return (
    <>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </>
  );
};

export default App;
