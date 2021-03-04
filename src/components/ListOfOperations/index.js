import React from "react";
import Operation from "components/Operation";
import { Grid } from "@material-ui/core";

export default function ListOfOperations({ operations }) {
  return (
    <Grid container direction="column" spacing={2}>
      {operations.map(({ id, amount, Category, Type, dateOperation, note }) => (
        <Grid item key={id}>
          <Operation
            category={Category.name}
            amount={amount}
            type={Type.type}
            date={new Date(dateOperation)}
            note={note}
          />
        </Grid>
      ))}
    </Grid>
  );
}
