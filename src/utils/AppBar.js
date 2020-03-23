import React from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function PaperHeader() {
    return (
        <Grid container>
            <Grid item xs="12">
                <Paper style={{backgroundColor: '#FCFAED', borderRadius: 0}}>
                    <Container style={{padding: 10}}>
                        <Typography variant="caption" style={{display: 'flex', alignItems:'center'}}>
                            <LocationOnIcon style={{paddingBottom: 2, paddingRight: 10}}/>12 July Street, Bahay Toro, Quezon City, Philippines
                        </Typography>
                    </Container>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default PaperHeader