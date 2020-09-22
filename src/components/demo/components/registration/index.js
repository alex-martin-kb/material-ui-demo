import React, { Component } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import KBStepIcon from "./components/KBStepIcon";
import KBStepConnector from "./components/KBStepConnector";

import {
  ServiceView,
  LocationView,
  SignUpView,
  ConfirmationView
} from "./components/views";
import { Typography } from "@material-ui/core";

const REGISTRATION_STEPS = ["Services", "Location", "Sign Up", "Confirm"];

class Registration extends Component {
  state = {
    currentStep: {
      index: 0,
      name: REGISTRATION_STEPS[0]
    }
  };

  nextStep = (e) => {
    const nextIndex = this.state.currentStep.index + 1;
    this.setState({
      currentStep: { index: nextIndex, name: REGISTRATION_STEPS[nextIndex] }
    });
  };

  priorStep = (e) => {
    const backStep = this.state.currentStep.index - 1;
    this.setState({
      currentStep: { index: backStep, name: REGISTRATION_STEPS[backStep] }
    });
  };

  renderRegistration = (registrationName) => {
    switch (registrationName) {
      case "Services":
        return <ServiceView onButtonClick={this.nextStep} />;
      case "Location":
        return <LocationView onButtonClick={this.nextStep} />;
      case "Sign Up":
        return <SignUpView onButtonClick={this.nextStep} />;
      case "Confirm":
        return <ConfirmationView onButtonClick={this.nextStep} />;
      default:
        return <div>Unkonwn View</div>;
    }
  };

  render() {
    const { currentStep } = this.state;

    return (
      <div className="root">
        <Grid container justify="center">
          <Grid item xs={6}>
            <Box pb={2}>
              <Stepper
                activeStep={currentStep.index}
                alternativeLabel
                connector={<KBStepConnector />}
              >
                {REGISTRATION_STEPS.map((stepName, index) => (
                  <Step
                    active={currentStep.index === index}
                    key={stepName}
                    completed={currentStep.index > index}
                  >
                    <StepLabel StepIconComponent={KBStepIcon}>
                      {stepName}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box p={2}>{this.renderRegistration(currentStep.name)}</Box>
          </Grid>

          <Grid item xs={12}>
            <Box pt={2}>
              <Typography variant="subtitle2" align="center">
                Not sure which option? <u>Contact Us</u>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {currentStep.index < 3 && (
          <Grid container justify="center" style={{ paddingTop: 20 }}>
            <Grid item xs={2}>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                onClick={this.nextStep}
              >
                Next Screen
              </Button>
            </Grid>
          </Grid>
        )}
        {currentStep.index > 0 && (
          <Grid container justify="center" style={{ paddingTop: 20 }}>
            <Grid item xs={2}>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                onClick={this.priorStep}
              >
                Prior Screen
              </Button>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

export default Registration;
