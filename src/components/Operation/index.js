import {
  Card,
  Avatar,
  Typography,
  IconButton,
  CardContent,
  CardHeader,
  CardActions,
  Button,
} from "@material-ui/core";
import moment from "moment";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import DialogAlert from "components/DialogAlert";
import {deleteOperation as deleteOperationService} from "services/Operation"
import UserContext from "context/UserContext";

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
  const { session } = useContext(UserContext);
  const history = useHistory();
  const {Category, Type, amount, note, dateOperation} = operation
  const classes = useStyles();
  const [dialogDelete, setDialogDelete] = useState({open: false, success: false, message: ""})
  const handleEdit = () => {
    window.sessionStorage.setItem("operationSelected", JSON.stringify(operation));
    history.push("/edit");
  };
  const handleDelete = () => {
    setDialogDelete({open: true, sucess:false, message: "Are you sure to delete? This action cannot be reset"})
  };

  const deleteOperation = () => {
    const id = operation.id
    const token = session.token
    deleteOperationService(token, id)
    .then(res => setDialogDelete({open: true, sucess: true, message: res.message}))
  }
  return (
    <>
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
    {dialogDelete.open && 
    <DialogAlert title="Confirm delete" message={dialogDelete.message} actions={<Button color="secondary" variant="contained" disabled={dialogDelete.sucess ? "disabled" : ""}onClick={deleteOperation}>Delete</Button>}/>
    }
    </>
  );
}
