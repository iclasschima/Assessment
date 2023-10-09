import React from "react";
import ProgressStepper from "./components/ProgressStepper";

const App: React.FC = () => {
  const steps = [
    { title: "STEP ONE", desc: "Your basket" },
    { title: "STEP TWO", desc: "Your details" },
    { title: "STEP THREE", desc: "Payment" },
    { title: "STEP FOUR", desc: "Order complete" },
  ];

  const activeStep = 2;

  return (
    <div className="w-full flex justify-center h-[100vh] items-center">
      <ProgressStepper steps={steps} activeStep={activeStep} />
    </div>
  );
};

export default App;
