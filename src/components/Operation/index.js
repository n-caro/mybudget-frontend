import {
  Card,
  Avatar,
  Typography,
  IconButton,
  CardContent,
  CardHeader,
  CardActions,
} from "@material-ui/core";
import moment from "moment";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: green[700],
    backgroundColor: green[50],
    fontSize: "1.2em"
  },
  red: {
    color: red[700],
    backgroundColor: red[50],
    fontSize: "1.2em"
  },
}));

export default function Operation({ category, type, amount, note, date, id }) {
  const classes = useStyles();
  const handleEdit = () => {
    alert("Edit");
  };

  return (
    <Card>
      <CardHeader
        title={category}
        subheader={moment(date).format("DD/MM/YYYY")}
        avatar={
          <Avatar className={type === "income" ? classes.green : classes.red}>
            {category[0]}
          </Avatar>
        }
        action={
          <>
            <Typography
              color={type === "income" ? "primary" : "error"}
              display="inline"
              variant="h6"
            >
              {type === "income" ? "+" : "-"}${amount}
            </Typography>
          </>
        }
      />
      <CardContent>
        <Typography color="textSecondary" variant="body2">
          {note}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small" aria-label="Editar operacion" display="inline" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton  size="small" aria-label="Eliminar operacion" display="inline" onClick={handleEdit}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
