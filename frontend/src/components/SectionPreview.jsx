import React from 'react';
import {Paper, Typography} from '@mui/material';



const Box = ({ title, content }) => {
  

    return (
        <Paper style={{padding: "14px", marginRight: '10px', height: '200px', width: '30%', border: '0px solid black', borderRadius: '15px', backgroundColor: "#456C86"}}>
            <Typography variant="h5" component="h2" style={{marginBottom: '6px', color:"#f1f1f1"}}>
                {title}
            </Typography>
            <Typography variant="body1" component="p" style={{color: "#fff"}}>
                {content}
            </Typography>
        </Paper>
    );
};

export default Box;
