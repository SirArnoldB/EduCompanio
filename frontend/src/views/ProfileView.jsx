import React from 'react'
import { Button, Grid, Paper, Typography } from '@mui/material';

const ProfileView = () => {

    return (
        <div style={{padding: '2rem'}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{padding: '2rem', textAlign: 'center'}}>
                        <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="profile" style={{height: '200px', width: '200px', borderRadius: '50%'}} />
                        <Typography variant="h4" gutterBottom>
                            John Doe
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            johndoe@mail.com
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Paper style={{padding: '2rem', textAlign: 'center'}}>
                                <Typography variant="h6" gutterBottom>
                                    Total Notes
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                    0
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper style={{padding: '2rem', textAlign: 'center'}}>
                                <Typography variant="h6" gutterBottom>
                                    Total Internships
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                    0
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper style={{padding: '2rem', textAlign: 'center'}}>
                                <Typography variant="h6" gutterBottom>
                                    Total Projects
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                    0
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div container spacing={3} style={{marginLeft: '40%', alignContent: 'center'}}>
                        <Button variant="contained" style={{marginTop: '2rem', justifyContent: 'center'}}>Delete Account</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileView
