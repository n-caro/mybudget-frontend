import React from 'react'
import useAuth from "hooks/useUser";
import { Redirect } from 'react-router-dom';
import Edit from 'components/Edit'

export default function HomePage () {
  const { isLogged } = useAuth();
  return isLogged ? <Edit /> : <Redirect to="/signin" />
}