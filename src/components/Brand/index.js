import { Button } from "@material-ui/core";
import AccountBalanceWalletTwoToneIcon from "@material-ui/icons/AccountBalanceWalletTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import {Link as RouterLink} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  brand: {
    fontWeight: 700,
    fontSize: "1.5em",
    background: "none",
  },
  brandIcon: {
    height: "2em",
    width: "2em",
  },
}));

export default function Brand() {
  const classes = useStyles();
  return (
    <Button
      className={classes.brand}
      size="large"
      startIcon={
        <AccountBalanceWalletTwoToneIcon
          color="primary"
          className={classes.brandIcon}
        />
      }
      to="/"
      component={RouterLink}
    >
      myBudget
    </Button>
  );
}
