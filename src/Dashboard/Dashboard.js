import Grid from "@mui/material/Grid";
import Menu from "../Menu/Menu";
import Workarea from "../WorkArea/Workarea";

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Menu />
      </Grid>
      <Grid item xs={9}>
        <Workarea />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
