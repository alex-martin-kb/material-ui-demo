import React from "react";

import { useTheme } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Check from "@material-ui/icons/Check";

import { ReactComponent as FilledCircle } from "./icons/FilledCircle.svg";
import { ReactComponent as KBStepIcon } from "./icons/StepperIcon.svg";

const StandardIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 32 32">
      <KBStepIcon />
    </SvgIcon>
  );
};

const CheckedIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 32 32">
      <FilledCircle />
      <Check htmlColor="black" />
    </SvgIcon>
  );
};

export default (props) => {
  const { active, completed } = props;
  const theme = useTheme();
  const color = active
    ? theme.palette.primary.main
    : theme.palette.primary.light;
  return completed ? (
    <CheckedIcon color={"primary"} />
  ) : (
    <StandardIcon htmlColor={color} />
  );
};
