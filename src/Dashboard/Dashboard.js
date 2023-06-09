import Grid from "@mui/material/Grid";
import Menu from "../Menu/Menu";
import Workarea from "../WorkArea/Workarea";

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        <Workarea />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
