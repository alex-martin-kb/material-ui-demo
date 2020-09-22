import { withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";

const KBStepConector = withStyles(
  (theme) => ({
    alternativeLabel: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)"
    },
    active: {
      "& $line": {
        borderColor: theme.palette.primary.main
      }
    },
    completed: {
      "& $line": {
        borderColor: theme.palette.primary.main
      }
    },
    line: {
      borderColor: theme.palette.primary.light,
      borderTopWidth: 3,
      borderRadius: 1
    }
  }),
  { withTheme: true }
)(StepConnector);

export default KBStepConector;
