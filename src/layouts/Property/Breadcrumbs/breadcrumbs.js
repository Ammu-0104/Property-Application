/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CollapsedBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={10} aria-label="breadcrumb" className='my-3'>
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
        Properties
        </Link>
        <Link underline="hover" color="inherit" href="#">
        Commercial in Tamil Nadu
        </Link>
        <Link underline="hover" color="inherit" href="#">
        Commercial in Chennai
        </Link>
        <Typography color="text.primary">Commercial in Chennai</Typography>
      </Breadcrumbs>
    </div>
  );
}
