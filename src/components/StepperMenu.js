import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectedStep } from '../store/boxSlice'

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CategoryBox from './CategoryBox';
import Items from './Items';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Choose Your Box Color', 'Choose Your Items', 'Select Your Card', 'Place Your Order'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <CategoryBox />;
    case 1:
      return <Items />;
    case 2:
      return 'Select Your Card';
    case 3:
      return 'Place Your Order';
    default:
      return 'Unknown stepIndex';
  }
}

const StepperMenu = () => {

  const dispatch = useDispatch();
  const selectedStepData = useSelector((boxState) => boxState.boxName.selectedSteps)
  console.log('selectedStepData', selectedStepData)
  
  const [activeStep, setActiveStep] = useState('');

  useEffect(() => {
    if(activeStep){
      dispatch(selectedStep(selectedStepData.map(stepId => stepId.id)));
    }else{
    }
  }, [activeStep]);

  const classes = useStyles();
  // const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StepperMenu;
