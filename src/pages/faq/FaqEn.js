import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightBold,
    },
}));

function FaqEN() {

    const classes = useStyles();

    return (
    <Fragment>
        <Typography variant="h1">Frequently Asked Questions</Typography>
        <br/>
        <Paper>
            <p>Dear Friends,</p>
            <p>
                On Tuesday, November 1st, 2024, the ""Arvut System"" will be available for subscribers only.<br/>
                Any member who wishes to access the system will need to have a subscription, costing $20 per month.<br/>
                This change is due to high costs and maintenance demands.<br/> 
                Thank you for your understanding and support.
            </p>
            <p>
                Together,<br/>
                "The Kabbalah Community" Team
            </p>
        </Paper>
        <Accordion defaultExpanded>
            <AccordionSummary id="price-header" aria-controls="price-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    What is the subscription cost?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    The subscription costs 80 NIS / $20 / €20.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="helphaver-header" aria-controls="helphaver-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Who should I contact if I cannot afford the payment?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    There is an option to contact the "Help-a-Friend" fund on the <a href="https://kli.one/dash/membership">payment page</a>. 
                    Menu &gt; Subscription &gt; Status &gt; Change Subscription Type &gt; Help-a-Friend.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="whatfor-header" aria-controls="whatfor-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    What does the payment for "The Kabbalah Community" cover?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    The payment covers access to the "Arvut System," "Good Environment" website, "Kabbalah Media" archive, 
                    our building in Petah Tikva which serves as the infrastructure for all systems, data security, protection from cyberattacks, 
                    and use of various applications.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="update-payment-header" aria-controls="update-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    How do I update my payment method?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Use the "Update Payment Method" button on the <a href="https://kli.one/dash/membership">payment page</a>.
                    Menu &gt; Subscription &gt; Status &gt; Update Payment Method.    
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="recurring-vs-regular-payment-header" aria-controls="recurring-vs-regular-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    What is the difference between manual and automatic payment?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Manual payment is a one-time payment that does not automatically renew, though it is possible to pay in advance for several months. 
                    Automatic payment is a recurring payment that renews monthly.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cancel-membership-header" aria-controls="cancel-membership-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    How can I cancel the subscription, and can I do it at any time?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    You can cancel the subscription at any time via the <a href="https://kli.one/dash/membership">payment page</a> using the "Cancel Subscription" button.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="less-then-month-header" aria-controls="less-then-month-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Is it possible to subscribe for less than a month?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    No. The payment is for a full month only.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-header" aria-controls="discount-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Can I pay less than $20?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    There is an option to contact the "Help-a-Friend" fund on the <a href="https://kli.one/dash/membership">payment page</a>. 
                    Menu &gt; Subscription &gt; Status &gt; Change Subscription Type &gt; Help-a-Friend.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="price-change-header" aria-controls="price-change-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Is the subscription fee expected to change in the future?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    The subscription cost is based on the maintenance expenses of "The Kabbalah Community" products and infrastructure. 
                    Changes may occur depending on the maintenance costs of existing and future systems.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="pay-in-advance-header" aria-controls="pay-in-advance-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Can I pay in advance for several months?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Yes. You can pay for several months in advance if the payment is made manually.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="currency-header" aria-controls="currency-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    In what currency can I pay?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Payments can be made in Israeli Shekels (NIS), Euros (€), or U.S. Dollars ($).
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Fragment>
    )
}

export default FaqEN;

