import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightBold,
    },
    pageTitle: {
        color: '#1a4378',
    },
    orgName: {
        fontSize: theme.typography.pxToRem(18),
        color: '#2e75b6',
        fontWeight: theme.typography.fontWeightMedium,
        margin: 0,
    },
    updatedDate: {
        fontSize: theme.typography.pxToRem(13),
        color: '#888888',
        margin: '4px 0 0 0',
    },
    sectionTitle: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightBold,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1, 2),
        backgroundColor: '#2e75b6',
        color: '#ffffff',
        borderRadius: 4,
    },
}));

function FaqEN() {

    const classes = useStyles();

    return (
    <Fragment>
        <Typography variant="h1" className={classes.pageTitle}>Questions and Answers on the "Tuition Fee" Model</Typography>
        <br/>
        <Paper>
            <p className={classes.orgName}>Bnei Baruch–Kabbalah La'am Association</p>
            <p className={classes.updatedDate}>Updated: April 2026</p>
        </Paper>

        <Typography className={classes.sectionTitle}>General</Typography>

        <Accordion defaultExpanded>
            <AccordionSummary id="why-header" aria-controls="why-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Why are we shifting to a tuition fee model?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    In the past decade, the number of students in the association has grown to tens of thousands, and donations and tithes no longer cover all the costs of the global learning system. Therefore, it was decided to transition to a "tuition fee" model, so that each member can participate in sustaining the system.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="diff-header" aria-controls="diff-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    What is the difference between the old membership fee and the new "tuition fee" model?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    The old membership fee was a uniform payment for everyone and was intended primarily to cover technological costs. The new "tuition fee" model is a differential (tiered) payment, determined according to the cost of living in the country where each student resides, and it covers all the expenses of our learning framework. It replaces the previous system and is not an additional fee.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="who-header" aria-controls="who-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Who is required to pay under the new "tuition fee" model?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    The "tuition fee" model applies to subscribers and students of the Bnei Baruch–Kabbalah La'am Association who have completed a beginner's course in Israel and worldwide, to college students who have completed at least six months of study, and to students who study regularly within the association's learning frameworks.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>Pricing and Access</Typography>

        <Accordion>
            <AccordionSummary id="price-header" aria-controls="price-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    How much does the new "tuition fee" model cost?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div">
                    <ul>
                        <li>High cost-of-living countries: ₪180 per month.</li>
                        <li>Medium cost-of-living countries: ₪90 per month.</li>
                        <li>Low cost-of-living countries: ₪60 per month.</li>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="whatfor-header" aria-controls="whatfor-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    What does the new "tuition fee" model include?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lessons and teachers, translations and subtitles, archive access, live broadcasts and technologies, information security and cyber protection, digital infrastructure, the physical center, community and guidance, service and management teams, and legal expenses.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="extra-payment-header" aria-controls="extra-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Is there any additional payment beyond this?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Yes. Students who physically attend the center in Petah Tikva pay an additional maintenance fee to cover expenses such as coffee, electricity, water, and cleaning.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>Discounts</Typography>

        <Accordion>
            <AccordionSummary id="maaser-header" aria-controls="maaser-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Does the new "tuition fee" model replace Maaser payments?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    No. Maaser is a spiritual matter — a contribution of 10% of one's income. The "tuition fee" is participation in maintaining the learning system and does not replace Maaser.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-who-header" aria-controls="discount-who-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Who is eligible for a discount on the "tuition fee"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Anyone whose total Maaser payments and donations over the past 12 months have reached the annual tuition fee threshold for their country is automatically eligible for a 55% discount for that month.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-calc-header" aria-controls="discount-calc-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    How is the discount calculated?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    In Israel, for example, the annual threshold is ₪2,160 (12 × ₪180). If the total tithes and donations over the past 12 months reach ₪2,160 or more, the discount will be 55%. If not, the full payment applies.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-see-header" aria-controls="discount-see-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    How can I see if I received a discount?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    The discount appears on the subscription status page in the system.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="couple-discount-header" aria-controls="couple-discount-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Is there a special discount for couples?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Yes. Couples will be linked together and will receive a 55% discount if their combined annual donations exceed the doubled annual threshold. For example, in Israel: 2 × ₪2,160 = ₪4,320 per year.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="helphaver-header" aria-controls="helphaver-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Who is the Help a Friend ("Help Haver") Fund intended for?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    The Help a Friend ("Help Haver") Fund is intended for students who need financial assistance under the new "tuition fee" model. An application can be submitted through the payments page.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>Payment and Cancellation</Typography>

        <Accordion>
            <AccordionSummary id="how-to-pay-header" aria-controls="how-to-pay-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    How are payments done in practice?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div">
                    Through the payments page, via one of three options:
                    <ul>
                        <li>Automatic – a monthly recurring payment that renews automatically.</li>
                        <li>Manual – a one-time payment for one month only.</li>
                        <li>Help a Friend ("Help Haver") Fund – for students who require financial assistance.</li>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="currency-header" aria-controls="currency-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    What currency are payments made in?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Residents of Israel will pay in shekels, residents of Europe in euros, and the rest of the world in US dollars. The payment is pegged to the shekel, but a conversion review is conducted every six months against the dollar and the euro.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="update-payment-header" aria-controls="update-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    How is the payment method updated?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    It can be updated through the payments page. If you cannot find the option or encounter an issue, please contact the support team at: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="problem-header" aria-controls="problem-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    What should I do if there is an issue with the discount or payment?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Please contact the support team at: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cant-pay-header" aria-controls="cant-pay-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Who should I contact if I am unable to pay?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    You should select the Help a Friend Fund ("Help Haver" Fund) option on the payments page, or contact the support team at: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cancel-membership-header" aria-controls="cancel-membership-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    How is membership canceled?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Please contact the support team at: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Paper style={{ marginTop: 24 }}>
            <p>For any additional questions, you can contact the support team at: <a href="mailto:help@kli.one">help@kli.one</a>.</p>
        </Paper>
    </Fragment>
    )
}

export default FaqEN;
