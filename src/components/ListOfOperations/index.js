import React from "react";
import Operation from "components/Operation";
import { Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

export default function ListOfOperations({ operations }) {
  return (
    <Grid container direction="column" spacing={2}>
      {operations
        ? operations.map(
            (operation) => (
              <Grid item key={operation.id}>
                <Operation
                  operation={operation}
                />
              </Grid>
            )
          )
        : <Alert severity="warning">No hay operaciones.</Alert>}
    </Grid>
  );
}
