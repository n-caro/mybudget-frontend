import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OperationAddForm from "components/OperationAddForm";
import { useEffect } from "react";
import { useState, useContext } from "react";
import { getCategories } from 'services/Categories'
import UserContext from "context/UserContext";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2),
  },
}));

export default function Add() {
  const classes = useStyles();
  const { session } = useContext(UserContext); 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("cargar categorias")
    let token = session.token;
    getCategories({token})
    .then(res => {
      if(res.categories){
        setCategories(res.categories)
      }
    })
  }, [session])

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" className={classes.title}>Add operation</Typography>
      <Box>
        <OperationAddForm categories={categories}/>
      </Box>
    </Container>
  );
}
