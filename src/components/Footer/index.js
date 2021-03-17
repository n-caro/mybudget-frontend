import { Container, Link, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <>
      <Container maxWidth="md">
        <Typography color="textSecondary" align="center" variant='subtitle2'>
          Dev by{" "}
          <Link
            href="https://github.com/n-caro"
            color="textPrimary"
            target="_blank"
          >
            n-caro
          </Link>{" "}
          - <Link href="https://github.com/n-caro/mybudget-frontend" color="textPrimary" target="_blank">GitHub</Link> -
          <Link href="https://github.com/n-caro/mybudget-frontend/issues/new" color="textPrimary" target="_blank">
            Send suggestion
          </Link>
        </Typography>
      </Container>
    </>
  );
}
