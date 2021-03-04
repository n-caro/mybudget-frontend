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
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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

export default function Operation({operation}) {
  const history = useHistory();
  const {Category, Type, amount, note, dateOperation} = operation
  const classes = useStyles();
  const handleEdit = () => {
    window.sessionStorage.setItem("operationSelected", JSON.stringify(operation));
    history.push("/edit");
  };
  const handleDelete = () => {
    //TODO: handle Delete action
    alert("delete")
  };

  return (
    <Card>
      <CardHeader
        title={Category.name}
        subheader={moment(dateOperation).format("DD/MM/YYYY")}
        avatar={
          <Avatar className={Type.id === 1 ? classes.green : classes.red}>
            {Category.name[0]}
          </Avatar>
        }
        action={
          <>
            <Typography
              color={Type.id === 1 ? "primary" : "error"}
              display="inline"
              variant="h6"
            >
              {Type.id === 1 ? "+" : "-"}${amount}
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
        <IconButton size="small" aria-label="Edit" display="inline" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton  size="small" aria-label="Delete" display="inline" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
