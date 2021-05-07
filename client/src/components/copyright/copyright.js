import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://siteboma.com/">
        Sitebo-Ma
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export { Copyright };
