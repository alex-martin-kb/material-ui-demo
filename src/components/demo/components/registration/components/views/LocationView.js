import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import ComputerIcon from "@material-ui/icons/Computer";

class LocationView extends Component {
  state = {
    currentValue: "None"
  };

  handleSelect = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  render() {
    const { currentValue } = this.state;

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Great! Where would you like to meet us?
          </Typography>
        </Grid>
        <div style={{ margin: "40px 0px", width: "100%" }}>
          <Grid container justify="center">
            <Grid item xs={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  Location
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Location"
                  value={currentValue}
                  onChange={this.handleSelect}
                >
                  <MenuItem value="None">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"NY"}>Kindbody NY</MenuItem>
                  <MenuItem value={"SF"}>Kindbody SF</MenuItem>
                  <MenuItem value={"Virtual"}>Virtual</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <div
                style={{
                  width: 1,
                  borderLeft: "1px solid black",
                  height: "100%",
                  margin: "auto"
                }}
              ></div>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                style={{ height: "100%" }}
                fullWidth
                variant="outlined"
              >
                <Button
                  style={{ height: "100%" }}
                  startIcon={<ComputerIcon />}
                  variant="outlined"
                >
                  Virtually
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default LocationView;
