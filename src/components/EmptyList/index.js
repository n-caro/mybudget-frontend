import { Button, Box, Typography } from '@material-ui/core';
import Illustration_NoData from "static/illustrations/No_data_re.svg";
import {Link as RouterLink} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  img: {
    maxWidth: "200px",
    paddingBottom: theme.spacing(3)
  },
  title: {
    paddingBottom: theme.spacing(2),
    fontWeight: 700
  },
  btnAdd: {
    marginTop: theme.spacing(2)
  },
}));

export default function EmptyList() {
  const classes = useStyles();
  return(<>
    <Box align="center" className={classes.root}>
    <img src={Illustration_NoData} alt="No data" className={classes.img}/>
    <Typography variant="h5" align="center" color="textSecondary" className={classes.title}>No operations yet</Typography>
    <Typography color="textSecondary" variant="body1">Once you create a operation, you can see them here</Typography>
    <Button color="primary" component={RouterLink} to="/add" className={classes.btnAdd}>+ Add Operation</Button>
    </Box>
  </>)
}