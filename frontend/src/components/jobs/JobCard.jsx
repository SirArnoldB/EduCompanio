import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const JobCard = ({ logo, title, description, onApply, onDetails, jobTag }) => {
  return (
    <Card style={{backgroundColor: "#f1f1f1", height: "14rem", width: "18rem", position: "relative", marginTop: "20px"}}>
      <CardContent>
        <img src={logo} alt="Job Logo" />
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="right" 
            style={{position:"absolute", 
            backgroundColor: "lightblue",
            padding: "2px",
            borderRadius: "5px", 
            color: "blue", 
            top: "15px", 
            right: "15px"
            }}>
          {jobTag}
        </Typography>
      </CardContent>
      <CardActions style={{position: "absolute", bottom: "10px", left: "8px"}}>
        <Button onClick={onApply} variant="contained" color="primary" style={{width: "7rem"}}>
          Apply
        </Button>
        <Button onClick={onDetails} variant="outlined" color="primary" style={{width: "7rem"}}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
