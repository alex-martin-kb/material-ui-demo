import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Pets from "@material-ui/icons/Pets";
import Spa from "@material-ui/icons/Spa";
import Apple from "@material-ui/icons/Apple";

const styles = (theme) => ({
  button: {
    borderWidth: 2,
    "&:hover": {
      backgroundColor: "#fff",
      borderColor: theme.palette.primary.main
    }
  }
});

class ServiceView extends Component {
  render() {
    const { classes, onButtonClick } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Let's get started, what services <br />
            can we help you with?
          </Typography>
        </Grid>
        <div style={{ margin: "40px 0px", width: "100%" }}>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Button
                onClick={onButtonClick}
                fullWidth
                className={classes.button}
                variant="outlined"
              >
                <Box p={5}>
                  <Pets />
                  <br />
                  <Typography>Fertility</Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={onButtonClick}
                fullWidth
                className={classes.button}
                variant="outlined"
              >
                <Box p={5}>
                  <Spa />
                  <br />
                  <Typography>Gynecology</Typography>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={onButtonClick}
                fullWidth
                className={classes.button}
                variant="outlined"
              >
                <Box p={5}>
                  <Apple />
                  <br />
                  <Typography>Wellness</Typography>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ServiceView);
