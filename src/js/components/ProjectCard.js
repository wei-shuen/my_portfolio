import * as React from 'react';
// import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

// import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';

const Item = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));


function ProjectCard(props) {
  return (
    <Grid xs={12} sm={6} md={4} >
      <CssBaseline />
      <Item>
        <div>
          123
        </div>
      </Item>
    </Grid>
  );
}

export default ProjectCard;