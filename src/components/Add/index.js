import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OperationAddForm from "components/OperationAddForm";
import { useEffect } from "react";
import { useState } from "react";
import { getCategories } from "services/Categories";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2),
  },
}));

export default function Add() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      if (res.categories) {
        setCategories(res.categories);
      }
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" className={classes.title}>
        Add operation
      </Typography>
      <Box>
        <OperationAddForm categories={categories} />
      </Box>
    </Container>
  );
}
