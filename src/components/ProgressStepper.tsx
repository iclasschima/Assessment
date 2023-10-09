import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./ProgressStepper.scss";

interface ProgressStepperProps {
  steps: { title: string; desc: string }[];
  activeStep: number;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({
  steps,
  activeStep,
}) => {
  return (
    <div className="progress-stepper">
      <ul className="steps">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step ${index < activeStep ? "completed" : ""}`}
          >
            {index < activeStep ? (
              <CheckIcon className="check-icon" fontSize="small" />
            ) : null}

            <div className="flex flex-col justify-start">
              <p> {step.title}</p>
              <p className="wrap-text"> {step.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressStepper;
