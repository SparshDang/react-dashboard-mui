import React from 'react'
import { Box, useTheme, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import Header from '../../components/Header'

import { tokens } from '../../themes'

export default function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
        <Header title={"FAQ"} subtitle={"Get answers to your queries"}></Header>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question                
                </Typography>
            </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex facilis enim fugit aliquid recusandae explicabo excepturi, harum voluptates nostrum blanditiis dolor debitis repellat consequuntur, vel, alias tempora odit dolorem magnam a adipisci sint. 
                </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question                
                </Typography>
            </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex facilis enim fugit aliquid recusandae explicabo excepturi, harum voluptates nostrum blanditiis dolor debitis repellat consequuntur, vel, alias tempora odit dolorem magnam a adipisci sint. 
                </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question                
                </Typography>
            </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex facilis enim fugit aliquid recusandae explicabo excepturi, harum voluptates nostrum blanditiis dolor debitis repellat consequuntur, vel, alias tempora odit dolorem magnam a adipisci sint. 
                </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question                
                </Typography>
            </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex facilis enim fugit aliquid recusandae explicabo excepturi, harum voluptates nostrum blanditiis dolor debitis repellat consequuntur, vel, alias tempora odit dolorem magnam a adipisci sint. 
                </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question                
                </Typography>
            </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex facilis enim fugit aliquid recusandae explicabo excepturi, harum voluptates nostrum blanditiis dolor debitis repellat consequuntur, vel, alias tempora odit dolorem magnam a adipisci sint. 
                </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question                
                </Typography>
            </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex facilis enim fugit aliquid recusandae explicabo excepturi, harum voluptates nostrum blanditiis dolor debitis repellat consequuntur, vel, alias tempora odit dolorem magnam a adipisci sint. 
                </AccordionDetails>
        </Accordion>
    </Box>
  )
}
