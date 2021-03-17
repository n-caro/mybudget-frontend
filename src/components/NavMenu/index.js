import { NavLink } from "react-router-dom";
// icons
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ViewListRoundedIcon from "@material-ui/icons/ViewListRounded";
import { Button, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navIcons: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    color: theme.palette.grey[600],
    "&:hover": {
      background: theme.palette.action.selected,
    },
  },
  navIconActive: {
    color: theme.palette.grey[900],
  },
}));

function ItemMenu({ to, pageName, icon }) {
  const classes = useStyles();
  return (
    <Tooltip title={pageName}>
      <Button
        className={classes.navIcons}
        size="large"
        component={NavLink}
        to={to}
        exact
        activeClassName={classes.navIconActive}
      >
        {icon}
      </Button>
    </Tooltip>
  );
}

export default function NavigationMenu() {
  return (
    <>
      <ItemMenu
        pageName="Home"
        to="/"
        icon={<HomeRoundedIcon fontSize="large" />}
      />
      <ItemMenu
        pageName="Operations"
        to="/operations"
        icon={<ViewListRoundedIcon fontSize="large" />}
      />
    </>
  );
}
