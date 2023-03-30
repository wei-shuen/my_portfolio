import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import NavBar from '../components/NavBar';
import Card from '../components/ProjectCard';

import Portrait from '../../image/image.png';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: '#252525',
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ display: 'flex' }} 
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const Works = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Container maxWidth="md">
        <CssBaseline />
        {/* Nav */}
        <NavBar />
        {/* Portrait */}
        <Box
          style={{ marginTop: 80 }}
          sx={{ flexGrow: 1 }}
        >
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={6} sx={{ alignSelf: 'center' }}>
              <Item>
                <Typography variant="h5" component="p" gutterBottom>Hello</Typography>
                <Typography variant="h4" component="p" gutterBottom sx={{ fontWeight: 'bold', color: '#1480FF' }}>I am Wei-Shuen</Typography>
                <Typography variant="h5" component="p" gutterBottom>I am  UI/UX designer with experience in web front-end development. I am passionate about product development and encourage myself keep sensibility and rationality.</Typography>
              </Item>
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <Item>
                <img src={Portrait} style={{ width: '100%' }} />
              </Item>
            </Grid>
          </Grid>
        </Box>
        {/* Projects */}
        <Box
          style={{ marginTop: 80 }}
          sx={{ flexGrow: 1 }}
        >
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Web/App" />
                <Tab label="Graphic" />
                <Tab label="Workshop" />
              </Tabs>
            </Grid>
            <Grid xs={12}>
              <TabPanel value={value} index={0}>
                <Card />
                <Card />
                <Card />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Card />
                <Card />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Card />
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Works;