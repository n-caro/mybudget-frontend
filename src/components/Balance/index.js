import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";
import TrendingDownRoundedIcon from "@material-ui/icons/TrendingDownRounded";
import { green, red } from "@material-ui/core/colors";

function CardTotal({ amount, title, isIncome, isExpense }) {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            {isIncome && (
              <Avatar style={{ color: green[500], background: green[50] }}>
                <TrendingUpRoundedIcon fontSize="small" />
              </Avatar>
            )}
            {isExpense && (
              <Avatar style={{ color: red[500], background: red[50] }}>
                <TrendingDownRoundedIcon fontSize="small" />
              </Avatar>
            )}
          </Grid>
          <Grid item>
            <Typography
              variant="caption"
              style={{ fontWeight: 700 }}
              color="textSecondary"
            >
              {title}
            </Typography>
            <Typography variant="h6">
              {!isNaN(amount) ? "$" + amount.toFixed(2) : "..."}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function Balance({
  amountBalance,
  amountIncomes,
  amountExpenses,
}) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent align="center">
              <Typography variant="h4" gutterBottom>
                {!isNaN(amountBalance) ? "$" + amountBalance.toFixed(2) : "..."}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                style={{ fontWeight: 700 }}
              >
                Current balance
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardTotal title="Total incomes" isIncome amount={amountIncomes} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardTotal title="Total expenses" isExpense amount={amountExpenses} />
        </Grid>
      </Grid>
    </>
  );
}
