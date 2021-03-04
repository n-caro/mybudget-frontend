import { Card, CardContent, Typography } from "@material-ui/core";

export default function Balance({ amount }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Current balance
        </Typography>
        <Typography variant="h3">$ {!isNaN(amount) ? amount.toFixed(2) : "..."}</Typography>
      </CardContent>
    </Card>
  );
}
