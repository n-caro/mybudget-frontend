import Context from "context/UserContext";
import { useContext, useCallback, useState } from "react";
import { signInService, signUpService } from "services/Auth";

export default function useAuth() {
  const { session, setSession } = useContext(Context);
  const [state, setState] = useState({
    loading: false,
    error: false,
    errorMessage: "",
  });
  const signIn = useCallback(
    ({ email, password }) => {
      signInService({ email, password })
        .then((res) => {
          if (res.error) {
            throw new Error(res.error.message);
          }
          window.localStorage.setItem("session", JSON.stringify(res));
          setState({ loading: false, error: false });
          setSession(res);
        })
        .catch((err) => {
          window.sessionStorage.removeItem("session");
          setState({ loading: false, error: true, errorMessage: err.message });
          console.error(err);
        });
    },
    [setSession]
  );

  const signUp = useCallback(
    ({ name, email, password }) => {
      signUpService({ name, email, password })
        .then((res) => {
          if (res.error) {
            throw new Error(res.error.message);
          }
          window.localStorage.setItem("session", JSON.stringify(res));
          setState({ loading: false, error: false });
          setSession(res);
        })
        .catch((err) => {
          window.localStorage.removeItem("session");
          setState({ loading: false, error: true, errorMessage: err.message });
          console.error(err);
        });
    },
    [setSession]
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem("session");
    setSession(null);
  }, [setSession]);

  return {
    isLogged: Boolean(session),
    signIn,
    signUp,
    logout,
    isLoading: state.loading,
    isError: state.error,
    errorMessage: state.errorMessage,
  };
}
