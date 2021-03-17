import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { createOperation } from "services/Operation";
import Alert from "@material-ui/lab/Alert";
import { Link as RouterLink } from "react-router-dom";
import DialogAlert from "components/DialogAlert";

export default function OperationForm({ categories }) {
  const [statusSubmit, setStatusSubmit] = useState({
    error: false,
    loading: false,
    ok: false,
  });

  // valuesForm
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [dateOperation, setDateOperation] = useState("");
  const [typeId, setTypeId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatusSubmit({ loading: true });

    createOperation({
      amount,
      categoryId,
      dateOperation,
      note,
      typeId,
    }).then((operation) => {
      if (operation.error) {
        setStatusSubmit({
          error: true,
          message: operation.error.message,
          loading: false,
        });
      } else {
        setStatusSubmit({
          loading: false,
          ok: true,
          message: "Operación agregada con éxito",
        });
      }
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {statusSubmit.error && (
          <Alert severity="error">{statusSubmit.message}</Alert>
        )}
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              id="note"
              label="Note"
              name="note"
              fullWidth
              required
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              id="amount"
              label="Amount"
              name="amount"
              type="number"
              required
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              id="dateOperation"
              label="Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              required
              value={dateOperation}
              onChange={(event) => setDateOperation(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" variant="outlined">
                Type
              </InputLabel>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                label="Type"
                id="demo-simple-select"
                type="number"
                required
                value={typeId}
                onChange={(event) => setTypeId(+event.target.value)}
              >
                <MenuItem value={1}>Income</MenuItem>
                <MenuItem value={2}>Expense</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" variant="outlined">
                Category
              </InputLabel>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                label="Category"
                id="demo-simple-select"
                required
                disabled={typeId === "" ? true : false}
                value={categoryId}
                onChange={(event) => setCategoryId(+event.target.value)}
              >
                {typeId !== "" &&
                  categories.flatMap((category) =>
                    category.Type.id === typeId ? (
                      <MenuItem value={category.id} key={category.id}>
                        {category.name}
                      </MenuItem>
                    ) : (
                      []
                    )
                  )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={statusSubmit.loading || statusSubmit.ok}
            >
              Add operation
            </Button>
          </Grid>
        </Grid>
      </form>
      {statusSubmit.ok && (
        <DialogAlert
          disableClose
          title="Saved operation"
          message="The operation has been saved successfully."
          actions={
            <>
              <Button color="primary" component={RouterLink} to="/operations">
                View operations
              </Button>
              <Button color="primary" component={RouterLink} to="/">
                Go to home
              </Button>
            </>
          }
        />
      )}
    </Box>
  );
}
