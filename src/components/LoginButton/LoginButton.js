import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn button-MAD-theme" onClick={() => loginWithRedirect()}>Charity log In</button>;
};

export default LoginButton;