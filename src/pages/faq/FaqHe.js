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

function FaqHE() {

    const classes = useStyles();

    return (
    <Fragment>
        <Typography variant="h1">שאלות ותשובות נפוצות</Typography>
        <br/>
        <Paper>
            <p>חברים יקרים,</p>
            <p>
                ביום שלישי, 1.11.2024, "מערכת הערבות" תהיה זמינה לשימוש עבור מנויים בלבד.<br/>
                כל חבר הרוצה להיכנס למערכת, יצטרך להיות בעל מנוי בעלות של 80 ש"ח לחודש.<br/>
                הסיבה לכך היא שהעלויות גבוהות מאוד, והאחזקה דורשת משאבים רבים.<br/>
                תודה על ההבנה והתמיכה.
            </p>
            <p>
                יחד,<br/>
                צוות "הבית הווירטואלי"
            </p>
        </Paper>
        <Accordion defaultExpanded>
            <AccordionSummary id="price-header" aria-controls="price-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    מה עלות המנוי?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    עלות המנוי הינה 80 ש"ח / 20$ / 20 יורו.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="helphaver-header" aria-controls="helphaver-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    למי לפנות אם אין לי יכולת כלכלית לשלם?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <a href="https://kli.one/dash/membership">בדף התשלומים</a> ישנה אפשרות לפנות לקרן "הלפ חבר".
                    תפריט &gt; מנוי &gt; סטטוס &gt; החלפת סוג מנוי &gt; הלפ חבר
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="whatfor-header" aria-controls="whatfor-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    מה כולל התשלום עבור "הבית הוירטואלי"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    התשלום עבור "הבית הווירטואלי" הוא עבור השימוש ב"מערכת הערבות", אתר "סביבה טובה", ארכיון "קבלה מדיה",
                    הבניין שלנו בפתח תקווה המשמש תשתית לכל המערכות, אבטחת מידע, הגנה מפני התקפות סייבר ושימוש באפליקציות השונות.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="update-payment-header" aria-controls="update-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    כיצד מעדכנים את אמצעי התשלום?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <a href="https://kli.one/dash/membership">בדף התשלומים</a> בכפתור: עדכון אופן התשלום.
                    תפריט &gt; מנוי &gt; סטטוס &gt; עדכון אופן תשלום
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="recurring-vs-regular-payment-header" aria-controls="recurring-vs-regular-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    מה ההבדל בין תשלום ידני לתשלום אוטומטי?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    תשלום ידני הוא תשלום חד-פעמי שאינו מתחדש אוטומטית, אך ישנה אפשרות לשלם בו מראש עבור מספר חודשים.<br/>
                     תשלום אוטומטי הוא תשלום קבוע המתבצע כהוראת קבע, ומתחדש בכל חודש באופן אוטומטי.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cancel-membership-header" aria-controls="cancel-membership-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    איך מבטלים את המנוי, והאם ניתן לבטל את המנוי בכל רגע?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    ניתן לבטל את המנוי בכל רגע. <a href="https://kli.one/dash/membership">בדף התשלומים</a>  בכפתור ביטול מנוי.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="less-then-month-header" aria-controls="less-then-month-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    האם יש אפשרות לעשות מנוי לתקופה של פחות מחודש?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    לא, התשלום הוא עבור חודש שלם בלבד.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-header" aria-controls="discount-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    האם ניתן לשלם פחות מ-20$?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <a href="https://kli.one/dash/membership">בדף התשלומים</a> ישנה אפשרות לפנות לקרן "הלפ חבר".
                    תפריט &gt; מנוי &gt; סטטוס &gt; החלפת סוג מנוי &gt; הלפ חבר
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="price-change-header" aria-controls="price-change-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    האם סכום החיוב צפוי להשתנות בעתיד?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    עלות המנוי מבוססת על הוצאות התחזוקה של מוצרי "הבית הווירטואלי" והתשתיות שלו. בהתאם להוצאות התחזוקה של המערכות הקיימות והעתידות, ייתכנו שינויים.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="pay-in-advance-header" aria-controls="pay-in-advance-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    האם ניתן לשלם מראש לכמה חודשים?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    ניתן לשלם מספר חודשים קדימה במידה ומבצעים את התשלום באופן ידני.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="currency-header" aria-controls="currency-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                באיזה מטבע אפשר לשלם?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    ניתן לשלם בשקלים (ש"ח), ביורו (€) או בדולר אמריקאי ($).
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Fragment>
    )
}

export default FaqHE;

