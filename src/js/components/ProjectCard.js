import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import _ from 'lodash';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';


const Item = styled('div')(({ theme }) => ({
  // ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const Year = styled(Typography)(({ theme }) => ({
  color: '#4F4F4D',
  fontWeight: '600',
}));

const Name = styled(Typography)(({ theme }) => ({
  color: '#1480FF',
  fontWeight: '600',
  marginBottom: theme.spacing(2),
}));

const Tag = styled(Chip)(({ theme }) => ({
  color: '#FFA114',
  borderColor: '#FFA114',
}));


function ProjectCard(props) {
  return (
    <Grid xs={12} sm={6} md={4}>
      <Link href={props.data.link} underline="none" className="ws_pr_card">
        <Item>
            <img src={props.data.path} style={{ width: '100%' }} />
            <Year variant="caption">{props.data.year}</Year>
            <Name variant="h6" className="ws_pr_name">{props.data.name}</Name>
            <Stack direction="row" spacing={1}>
              {_.map(props.data.tags, (tag, index)=> <Tag key={tag+'_'+index} label={tag} variant="outlined" size="small" />)}
            </Stack>
        </Item>
      </Link>
  </Grid>
  );
}

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};


export default ProjectCard;