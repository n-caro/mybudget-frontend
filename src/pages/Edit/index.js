import React from "react";
import useAuth from "hooks/useUser";
import { Redirect } from "react-router-dom";
import Edit from "components/Edit";
import { Helmet } from "react-helmet";

export default function HomePage() {
  const { isLogged } = useAuth();
  return isLogged ? (
    <>
      <Edit />
      <Helmet>
        <title>Edit operation | myBudget</title>
      </Helmet>
    </>
  ) : (
    <Redirect to="/signin" />
  );
}
