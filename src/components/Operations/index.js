import { Box, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import ListOfOperations from "components/ListOfOperations";
import { useEffect, useState } from "react";
import { getOperations } from "services/Operation";

const useStyles = makeStyles((theme) => ({
  titleLast: {
    marginBottom: theme.spacing(2),
  },
  pagination: {
    align: "center",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1.5),
    display: "flex",
  },
}));

export default function Home() {
  const [operations, setOperations] = useState([]);
  const limit = 10;
  const [totalPages, settotalPages] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getOperations({ page, limit }).then((res) => {
      setOperations(res.operations);
      let totals = res.totals;
      let totalPages = Math.ceil(totals / limit);
      settotalPages(totalPages);
    });
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography variant="h6" className={classes.titleLast}>
          Operations
        </Typography>
        <ListOfOperations operations={operations} />
      </Box>
      <Box className={classes.pagination}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          size="large"
          className={classes.pagination}
        />
      </Box>
    </>
  );
}
