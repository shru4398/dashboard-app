import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CardStat from "./CardStat";

export default function ProjectStat() {
  const options = {
    title: {
      text: "Visits",
    },
    series: [
      {
        data: [
          16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 9.8, 38.4, 35.5, 29.2, 22.0, 17.8,
        ],
      },
    ],
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            Total Visits 43,34M
            <Divider />
            <HighchartsReact highcharts={Highcharts} options={options} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <Stack direction="row" spacing={5}>
                  <Chip label="30 Days" onClick={() => {}} />
                  <Chip label="90 Days" onClick={() => {}} />
                  <Chip label="6 Months" onClick={() => {}} />
                  <Chip label="12 Months" onClick={() => {}} />
                </Stack>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                <CardStat />
              </Grid>
              <Grid item xs={6}>
                <CardStat />
              </Grid>
              <Grid item xs={6}>
                <CardStat />
              </Grid>
              <Grid item xs={6}>
                <CardStat />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
