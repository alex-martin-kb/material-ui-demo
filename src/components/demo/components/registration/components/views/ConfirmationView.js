import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

class ConfirmationView extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Please review your appointment details
          </Typography>
        </Grid>
        <div style={{ margin: "40px 0px", width: "100%" }}>
          <Grid container justify="center" style={{ marginBottom: 20 }}>
            <Grid item xs={6}>
              <Card
                style={{ borderSize: 2, borderColor: "rgba(0, 0, 0, 0.23)" }}
              >
                <CardContent>
                  <Typography variant="subtitle2">
                    <b>Appointment type:</b>
                  </Typography>
                  <Typography variant="body2">Fertility Assessment</Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="subtitle2">
                    <b>Location:</b>
                  </Typography>
                  <Typography variant="body2">
                    Santa Monica Plaza, Suit 1402, 1260
                    <br />
                    15th Street Santa Monica, CA 90404
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="subtitle2">
                    <b>Time:</b>
                  </Typography>
                  <Typography variant="body2">
                    Monday, Sept 21 at 4:30 PM EST
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginBottom: 20 }}>
            <Grid item xs={7}>
              <Typography variant="subtitle1">
                <b>Payment Details</b>
              </Typography>
              <Typography variant="body1">
                Payment may be due at the appointment which is subject to
                insurance coverage. If not covered, you will be responsible for
                the total + lab work. Appointments canceled more than 24 hours
                prior to the scheduled time are fully refunded. For appointments
                canceled with less than 24 hours notice, we'll refund 50% of
                your payment.
              </Typography>
            </Grid>
          </Grid>
          <Grid container />
          <Grid container justify="center">
            <Grid
              container
              item
              xs={1}
              style={{
                backgroundColor: "#fafafa",
                paddingTop: 10,
                paddingBottom: 10
              }}
              justify="center"
              alignContent="flex-start"
            >
              <Checkbox />
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                backgroundColor: "#fafafa",
                paddingTop: 10,
                paddingBottom: 10
              }}
            >
              <Typography variant="body2">
                I authorize Kindbody to send me secure communications, which may
                include my medical information. Kindbody only sends unencrypted
                text messages for appointment reminders and portal
                notifications.
                <br />
                <br />
                By clicking the button below, I agree that I have read and
                accept Kindbody’s{" "}
                <b>
                  <u>Terms of Use</u>
                </b>
                ,{" "}
                <b>
                  <u>Privacy Policy</u>
                </b>
                ,{" "}
                <b>
                  <u>Notice of Privacy Practices and Payment Terms</u>
                </b>
                .
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: 10 }}>
            <Button variant="outlined" color="secondary">
              Confirm Appointment
            </Button>
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default ConfirmationView;
