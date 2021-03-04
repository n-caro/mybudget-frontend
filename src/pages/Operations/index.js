import React from 'react'
import useAuth from "hooks/useUser";
import { Redirect } from 'react-router-dom';
import Operations from 'components/Operations'

export default function HomePage () {
  const { isLogged } = useAuth();
  return isLogged ? <Operations /> : <Redirect to="/signin" />
}