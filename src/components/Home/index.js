import { Container, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Balance from "components/Balance";
import ListOfOperations from "components/ListOfOperations";

import UserContext from "context/UserContext";
import { useEffect, useState, useContext } from "react";
import { getBalanceService } from "services/Balance";
import { getOperations } from "services/Operation";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  lastOperations: {
    marginTop: theme.spacing(2),
  },
  titleLast: {
    padding: theme.spacing(2),
  },
  btnViewAll: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function Home() {
  const { session } = useContext(UserContext);
  const [operations, setOperations] = useState([]);
  const [balance, setBalance] = useState({});

  useEffect(() => {
    let token = session.token;
    getBalanceService({ token }).then((res) => {
      if (res.balance) setBalance(res.balance);
    });
    getOperations({ token, limit: 10 }).then((res) => {
      setOperations(res.operations);
    });
  }, [session]);

  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Balance amount={balance.currentBalance} />
      <Box className={classes.lastOperations}>
        <Typography variant="h6" className={classes.titleLast}>
          Last operations
        </Typography>
        <ListOfOperations operations={operations} />
        {operations && operations.length > 0 && (
          <Button
            variant="contained"
            size="large"
            fullWidth
            disableElevation
            className={classes.btnViewAll}
            component={RouterLink}
            to="/operations"
          >
            View all
          </Button>
        )}
      </Box>
    </Container>
  );
}
