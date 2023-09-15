import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Switch,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionComponent() {
  const [expanded, setExpanded] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [enlarge, setEnlarge] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const handleSwitchChange = () => {
    setSwitchState(!switchState);
    setEnlarge(!enlarge);
  };

  return (
    <div>
      <Accordion expanded={expanded} onChange={handleAccordionChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vero numquam? Alias sit enim quasi nostrum incidunt impedit animi libero porro inventore. </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Switch
            checked={switchState}
            onChange={handleSwitchChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </AccordionDetails>
      </Accordion>

      <div
        style={{
          backgroundColor: 'orange',
          width: '100%',
          height: enlarge ? '400px' : '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'height 0.3s ease-in-out',
        }}
      >
        <Typography variant="h5">Hello World</Typography>
      </div>
    </div>
  );
}

export default AccordionComponent;
