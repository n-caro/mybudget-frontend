import React from 'react'
import useAuth from "hooks/useUser";
import { Redirect } from 'react-router-dom';
import Home from 'components/Home'

export default function HomePage () {
  const { isLogged } = useAuth();
  return isLogged ? <Home /> : <Redirect to="/signin" />
}