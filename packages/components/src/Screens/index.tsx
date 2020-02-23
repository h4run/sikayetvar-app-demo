import React, { useState } from "react";

import Login from "./Login";
import Profile from "./Profile";

export default () => {
  const [token, setToken] = useState();

  if (token) return <Profile token={token} />;

  return (
    <Login
      onSuccess={({ access_token }) => {
        setToken(access_token);
      }}
    />
  );
};
