import { Link as RouterLink } from "react-router-dom";
// material-ui
import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// icons
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const useStyles = makeStyles((theme) => ({
  iconActions: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    border: "1px solid",
  },
}));

export default function NavigationMenu() {
  const classes = useStyles();
  return (
    <>
      <Tooltip title="Add operation">
        <IconButton
          className={classes.iconActions}
          component={RouterLink}
          to="/add"
          size="small"
          color="primary"
        >
          <AddRoundedIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    </>
  );
}
