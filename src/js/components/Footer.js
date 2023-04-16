import * as React from 'react';
// import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// import _ from 'lodash';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterText = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: '20px',
}));

const ContactText = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
}));

const CopyRight = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontSize: '12px',
}));


// const Name = styled(Typography)(({ theme }) => ({
//   color: '#1480FF',
//   fontWeight: '600',
//   marginBottom: theme.spacing(2),
// }));

// const Tag = styled(Chip)(({ theme }) => ({
//   color: '#FFA114',
//   borderColor: '#FFA114',
// }));


function Footer(props) {
  return (
    <Box
      style={{ marginTop: 120, backgroundColor: '#1480FF' }}
      sx={{ padding: 3 }}
    >
      <Grid container>
        <Grid xs={12} sx={{ textAlign: 'center' }}>
          <FooterText variant="subtitle1" component="p" sx={{ marginBottom: 3 }}>Contact Me</FooterText>
          <ContactText variant="subtitle1" component="p">Hung, Wei Shuen</ContactText>
          <ContactText variant="subtitle1" component="p" sx={{ marginBottom: 3 }}>starship1103@gmail.com</ContactText>
          <Link sx={{ color: '#FFFFFF' }} href="https://www.linkedin.com/in/weishuen113/"><LinkedInIcon /></Link>
          <CopyRight variant="subtitle1" component="p" sx={{ marginTop: 3 }}>Copyright © 2023 Hung, Wei Shuen</CopyRight>
        </Grid>
      </Grid>
    </Box>
  );
}

// Footer.propTypes = {
//   data: PropTypes.object.isRequired,
// };


export default Footer;