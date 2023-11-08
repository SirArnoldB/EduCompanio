
import React from 'react';
import Grid from '@mui/material/Grid';
import {codepathLogo, railwayLogo, githubLogo } from '../../assets';
import { Typography } from '@mui/material';


const Sponsor = ({ imgSrc, altText }) => {
    
    return (
        <Grid item xs={12} sm={4}>
            <div className='sponsor'>
                <img style={{ height: '100%', width: 'auto' }} src={imgSrc} alt={altText} />
            </div>
        </Grid>
    );
};

const Sponsors = () => {
    return (
        <div style={{ flexGrow: 1 }} id='sponsors'>
            <Typography variant='h3' style={{textAlign: 'center', margin: '0 auto', padding: '25px'}}>Sponsors</Typography>
            <Grid container spacing={3}>
                <Sponsor imgSrc={codepathLogo} altText="Codepath" />
                <Sponsor imgSrc={railwayLogo} altText="Railway" />
                <Sponsor imgSrc={githubLogo} altText="GitHub" />
            </Grid>
        </div>
    );
};

export default Sponsors;
