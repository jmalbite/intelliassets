import React from 'react';

import { TotalAssets } from '../dashboard/totalassets';
import { Grid, Container } from '@mui/material';

const Dashboard = () => {
  return (
    <Container sx={{ marginTop: '20px' }} maxWidth="xl">
      <Grid container item xs={12} spacing={2} justifyContent="center" alignContent="center">
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <TotalAssets />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <TotalAssets />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <TotalAssets />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <TotalAssets />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
