import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { useContext } from "react";
import UserContext from "context/UserContext";

import NavMenu from "components/NavMenu";
import NavUserActions from "components/NavUserActions";
import UserMenu from "components/UserMenu";
import Brand from "components/Brand";

export default function Header() {
  const { session } = useContext(UserContext);

  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm>
            <Brand />
          </Grid>
          {session ? (
            <>
              <Grid item xs>
                <NavMenu />
              </Grid>
              <Grid item>
                <NavUserActions />
                <UserMenu user={session.user} />
              </Grid>
            </>
          ) : (
            ""
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
