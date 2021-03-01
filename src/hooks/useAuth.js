import Context from "context/UserContext";
import { useContext, useCallback, useState } from "react";
import { signInService } from "services/Auth";

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

  return {
    isLogged: Boolean(session),
    signIn,
    isLoading: state.loading,
    isError: state.error,
    errorMessage: state.errorMessage,
  };
}
