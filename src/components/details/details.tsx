import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Paper} from "@material-ui/core";

class Details extends React.Component {
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper><h1>Details</h1></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Service 1</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Service 2</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Service 3</Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Details;