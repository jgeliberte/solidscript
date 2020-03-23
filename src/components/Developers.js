import React, { Fragment } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

function Developers() {

    return (
        <Fragment>
            <Container maxWidth="xl" spacing={24}>
                <Grid container alignItems="center" justify="center">
                    <Grid item="xs">
                        <Typography>
                            Hello world! Developers!
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Developers