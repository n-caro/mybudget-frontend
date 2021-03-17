import React from "react";
import useAuth from "hooks/useUser";
import { Redirect } from "react-router-dom";
import Add from "components/Add";
import { Helmet } from "react-helmet";

export default function HomePage() {
  const { isLogged } = useAuth();
  return isLogged ? (
    <>
      <Add />
      <Helmet>
        <title>Add operation | myBudget</title>
      </Helmet>
    </>
  ) : (
    <Redirect to="/signin" />
  );
}
