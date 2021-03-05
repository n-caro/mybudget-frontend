import { Link as RouterLink } from "react-router-dom";
// icons
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ViewListRoundedIcon from "@material-ui/icons/ViewListRounded";
import { Button, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navIcons: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

export default function NavigationMenu() {
  const classes = useStyles();
  return (
    <>
      <Tooltip title="Home">
        <Button
          className={classes.navIcons}
          size="large"
          component={RouterLink}
          to="/"
        >
          <HomeRoundedIcon fontSize="large" color="action" />
        </Button>
      </Tooltip>
      <Tooltip title="Operations">
        <Button
          className={classes.navIcons}
          size="large"
          component={RouterLink}
          to="/operations"
        >
          <ViewListRoundedIcon fontSize="large" color="action" />
        </Button>
      </Tooltip>
    </>
  );
}
