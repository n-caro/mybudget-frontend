import { Container, Box, Typography } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from "@material-ui/core/styles";
import ListOfOperations from "components/ListOfOperations";

import UserContext from "context/UserContext";
import { useEffect, useState, useContext } from "react";
import { getOperations } from "services/Operation";

const useStyles = makeStyles((theme) => ({
  lastOperations: {
    marginTop: theme.spacing(5),
  },
  titleLast: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  pagination: {
    align: "center",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1.5),
    display: "flex",
  }
}));

export default function Home() {
  const { session } = useContext(UserContext);
  const [ operations, setOperations ] = useState([]);
  const limit = 10;
  const [ totalPages, settotalPages ] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let token = session.token;
    getOperations({ token, page, limit }).then((res) =>{
      setOperations(res.operations)
      let totals = res.totals
      let totalPages = Math.ceil(totals / limit)
      settotalPages(totalPages)
    }
    );
  }, [session, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };


  const classes = useStyles();
  return (
    <>
      <Box className={classes.lastOperations}>
        <Typography variant="h6" className={classes.titleLast}>
          Operations
        </Typography>
        <ListOfOperations operations={operations}/>
      </Box>
      <Box  className={classes.pagination}>
        <Pagination count={totalPages} page={page} onChange={handleChange} size="large" className={classes.pagination}/>
      </Box>
    </>
  );
}
