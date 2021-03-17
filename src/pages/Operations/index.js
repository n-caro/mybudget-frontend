import React from "react";
import useAuth from "hooks/useUser";
import { Redirect } from "react-router-dom";
import Operations from "components/Operations";
import { Helmet } from "react-helmet";

export default function HomePage() {
  const { isLogged } = useAuth();
  return isLogged ? (
    <>
      <Operations />
      <Helmet>
        <title>Operations | myBudget</title>
      </Helmet>
    </>
  ) : (
    <Redirect to="/signin" />
  );
}
