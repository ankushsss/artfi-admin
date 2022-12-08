import { useState } from "react";
// formik components
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

import UnvellingForm from "./forms/UnveilingForm/Form";
import WhitelistForm from "./forms/WhitelistForm/Form";
import AddDetailsForm from "./forms/AddDetailsForm/Form";
import WhatYouGetForm from "./forms/WhatYouGetForm/Form";

function getSteps() {
  return ["Unvilling", "Whitelist", "Add Details", "What You Will Get"];
}

function Unvelling({}) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [tabValue, setTabValue] = useState(0);
  const [CTA, setCTA] = useState("whitelist");

  const handleBack = () => setActiveStep(activeStep - 1);
  const handleNext = () => {
    if (CTA === "whitelist") {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div>
      <SoftBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
            {CTA === "whitelist" && (
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            )}
            <SoftBox p={2}>
              <SoftBox>
                {activeStep === 0 ? (
                  <UnvellingForm CTA={CTA} setCTA={setCTA} />
                ) : activeStep === 1 ? (
                  <WhitelistForm />
                ) : activeStep === 2 ? (
                  <AddDetailsForm />
                ) : activeStep === 3 ? (
                  <WhatYouGetForm />
                ) : null}
                {CTA === "whitelist" && (
                  <SoftBox width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <SoftBox />
                    ) : (
                      <SoftButton variant="gradient" color="light" onClick={handleBack}>
                        back
                      </SoftButton>
                    )}
                    {activeStep === 3 ? (
                      <SoftBox />
                    ) : (
                      <SoftButton variant="gradient" color="light" onClick={handleNext}>
                        next
                      </SoftButton>
                    )}
                  </SoftBox>
                )}
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </div>
  );
}

export default Unvelling;
