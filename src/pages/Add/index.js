import React from 'react'
import useAuth from "hooks/useUser";
import { Redirect } from 'react-router-dom';
import Add from 'components/Add'

export default function HomePage () {
  const { isLogged } = useAuth();
  return isLogged ? <Add /> : <Redirect to="/signin" />
}