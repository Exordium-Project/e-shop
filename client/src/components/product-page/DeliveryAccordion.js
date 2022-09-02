import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledEngineProvider } from '@mui/material/styles';
import './product-page.scss';

export default function DeliveryAccordion() {
  return (
    <div>
    <StyledEngineProvider injectFirst>
      <Accordion className='delivery-accordion'>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='delivery-accordion-summary'>Free Delivery And Returns</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </StyledEngineProvider>
      <Accordion className='reviews-accordion'>
        <AccordionSummary
          className='reviews-accordion-summary'
          expandIcon={<ExpandMoreIcon className='reviews-accordion-content-margin' />}
        >
          <Typography className='reviews-accordion-content-margin reviews-accordion-summary'>Reviews </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    
    </div>
  );
}
