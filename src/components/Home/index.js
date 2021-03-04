import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Balance from "components/Balance";
import ListOfOperations from "components/ListOfOperations";
import useUser from "hooks/useUser";
import { useEffect } from "react";

const operations = [{id:1,amount:"50.11",dateOperation:"2021-02-23T03:00:00.000Z",note:"some note for expense",updatedAt:"2021-02-26T23:50:15.000Z",Type:{id:2,type:"expense"},Category:{id:6,name:"Gifts"}},{id:7,amount:"12.35",dateOperation:"2021-02-23T03:00:00.000Z",note:"some note for income",updatedAt:"2021-02-26T23:53:18.000Z",Type:{id:1,type:"income"},Category:{id:1,name:"Salary"}},{id:8,amount:"12.35",dateOperation:"2021-02-23T03:00:00.000Z",note:"some note for income",updatedAt:"2021-02-26T23:53:26.000Z",Type:{id:1,type:"income"},Category:{id:1,name:"Salary"}}]

const useStyles = makeStyles((theme) => ({
  lastOperations: {
    marginTop: theme.spacing(5),
  },
  titleLast: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const { getBalance, balance } = useUser();

  useEffect(() => {
    getBalance()
  }, [getBalance]);

  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Balance amount={balance.currentBalance} />

      <Box className={classes.lastOperations}>
        <Typography variant="h6" className={classes.titleLast}>
          Ultimas operaciones
        </Typography>
        <ListOfOperations operations={operations} />
      </Box>
    </Container>
  );
}
