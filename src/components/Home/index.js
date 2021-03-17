import { Container, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Balance from "components/Balance";
import ListOfOperations from "components/ListOfOperations";
import { useEffect, useState } from "react";
import { getBalanceService } from "services/Balance";
import { getOperations } from "services/Operation";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  lastOperations: {
    marginTop: theme.spacing(2),
  },
  btnViewAll: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function Home() {
  const [operations, setOperations] = useState([]);
  const [balance, setBalance] = useState({});

  useEffect(() => {
    getBalanceService().then((res) => {
      if (res.balance) setBalance(res.balance);
      console.log(res.balance);
    });
    getOperations({ limit: 10 }).then((res) => {
      setOperations(res.operations);
    });
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Balance
        amountBalance={balance.currentBalance}
        amountIncomes={balance.totalIncomes}
        amountExpenses={balance.totalExpenses}
      />
      <Box className={classes.lastOperations}>
        <Typography variant="h6">Last operations</Typography>
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
