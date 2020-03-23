import React, { Fragment } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

function ContactUs() {

    return (
        <Fragment>
            <Container maxWidth="xl" spacing={24}>
                <Grid container alignItems="center" justify="center">
                    <Grid item="xs">
                        <Typography>
                            Hello world! Contact Us!
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default ContactUs