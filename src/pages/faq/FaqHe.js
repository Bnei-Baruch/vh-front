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

function FaqHE() {

    const classes = useStyles();

    return (
    <Fragment>
        <Typography variant="h1" className={classes.pageTitle}>שאלות ותשובות על מודל "שכר הלימוד"</Typography>
        <br/>
        <Paper>
            <p className={classes.orgName}>עמותת "בני ברוך-קבלה לעם"</p>
            <p className={classes.updatedDate}>עודכן: אפריל 2026</p>
        </Paper>

        <Typography className={classes.sectionTitle}>כללי</Typography>

        <Accordion defaultExpanded>
            <AccordionSummary id="why-header" aria-controls="why-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    מדוע עוברים למודל "שכר לימוד"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    בעשור האחרון גדל מספר התלמידים בעמותה לכדי עשרות אלפי תלמידים, והתרומות והמעשרות אינם מכסים עוד את כל עלויות מערכת הלימוד העולמית. לכן הוחלט לעבור למודל "שכר לימוד", כדי שכל חבר יוכל להשתתף באחזקת המערכת.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="diff-header" aria-controls="diff-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    מה ההבדל בין דמי המנוי הישן למודל "שכר הלימוד" החדש?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    המנוי הישן היה תשלום אחיד לכולם ונועד בעיקר לכיסוי עלויות טכנולוגיות. מודל "שכר הלימוד" הוא תשלום דיפרנציאלי (מדורג), שנקבע לפי יוקר המחייה של המדינה בה כל תלמיד חי, ומכסה את כל הוצאות מסגרת הלימוד שלנו. מדובר בהחלפה של השיטה הקודמת, ולא בתשלום נוסף.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="who-header" aria-controls="who-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    מי חייב לשלם לפי מודל "שכר הלימוד" החדש?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    מודל "שכר הלימוד" חל על מנויים ותלמידי עמותת "בני ברוך-קבלה לעם" שסיימו קורס מתחילים בארץ ובעולם, על תלמידי מכללה שהשלימו ותק של חצי שנה ומעלה, ועל תלמידים שלומדים קבוע במסגרות הלימוד של העמותה.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>תמחור וגישה</Typography>

        <Accordion>
            <AccordionSummary id="price-header" aria-controls="price-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    כמה עולה מודל "שכר הלימוד" החדש?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div">
                    <ul>
                        <li>מדינות בעלות יוקר מחייה גבוהה — 180 ₪ לחודש.</li>
                        <li>מדינות בעלות יוקר מחייה בינוני — 90 ₪ לחודש.</li>
                        <li>מדינות בעלות יוקר מחייה נמוך — 60 ₪ לחודש.</li>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="whatfor-header" aria-controls="whatfor-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    מה כולל מודל "שכר הלימוד" החדש?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    שיעורים ומורים, תרגומים וכתוביות, ארכיון, שידורים חיים וטכנולוגיות, אבטחת מידע והגנת סייבר, תשתיות דיגיטליות, המרכז הפיזי, קהילה וליווי, צוותי שירות וניהול, והוצאות משפטיות.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="extra-payment-header" aria-controls="extra-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    האם יש תשלום נוסף מעבר לכך?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    כן. תלמידים המגיעים פיזית למרכז בפתח תקווה משלמים תוספת אחזקה לכיסוי הוצאות, כגון קפה, חשמל, מים וניקיון.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>הנחות</Typography>

        <Accordion>
            <AccordionSummary id="maaser-header" aria-controls="maaser-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    האם מודל "שכר הלימוד" החדש מחליף את תשלומי המעשר?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    לא. מעשר הוא עניין רוחני, תרומה של 10% מההכנסות. "שכר הלימוד" הוא השתתפות בהחזקת מערכת הלימודים ואינו מחליף את תרומת המעשר.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-who-header" aria-controls="discount-who-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    מי זכאי להנחה ב"שכר הלימוד"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    מי שסך המעשרות והתרומות שלו ב-12 החודשים האחרונים הגיע לרף שכר הלימוד השנתי לפי מדינתו, זכאי אוטומטית להנחה של 55% באותו החודש.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-calc-header" aria-controls="discount-calc-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    איך מחשבים את ההנחה?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    בישראל לדוגמה, הרף השנתי הוא 2,160 ₪ (12 × 180 ₪). אם סך המעשרות והתרומות ב-12 חודשים האחרונים הגיע ל-2,160 ₪ ומעלה, ההנחה תעמוד על 55%. אם לא, התשלום יהיה מלא.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-see-header" aria-controls="discount-see-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    איך רואים אם קיבלתי הנחה?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    ההנחה מופיעה בעמוד הסטטוס של המנוי במערכת.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="couple-discount-header" aria-controls="couple-discount-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    האם יש הנחה מיוחדת לזוגות?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    כן. זוגות יקושרו יחד ויקבלו הנחה של 55%, אם סך התרומות השנתיות של שניהם יחד חוצה את הרף השנתי הכפול. לדוגמה בישראל, 2 × 2,160 ₪ = 4,320 ₪ לשנה.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="helphaver-header" aria-controls="helphaver-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    למי מיועד הסיוע של קרן Help-Haver?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    קרן Help-Haver מיועדת לתלמידים הזקוקים לסיוע כלכלי במודל "שכר הלימוד" החדש. ניתן להגיש בקשה דרך דף התשלומים.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>תשלום וביטול</Typography>

        <Accordion>
            <AccordionSummary id="how-to-pay-header" aria-controls="how-to-pay-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    איך משלמים בפועל?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div">
                    דרך דף התשלומים, באחד משלושה מסלולים:
                    <ul>
                        <li>אוטומטי — הוראת קבע חודשית המתחדשת אוטומטית.</li>
                        <li>ידני — תשלום חד-פעמי עבור חודש 1 בלבד.</li>
                        <li>קרן הלפ-חבר — עבור תלמידים הזקוקים לסיוע כלכלי.</li>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="currency-header" aria-controls="currency-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    באיזה מטבע מתבצע התשלום?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    תושבי ישראל ישלמו בשקלים, תושבי אירופה ביורו, ושאר העולם בדולר. התשלום צמוד לשקל, אך כל חצי שנה מתבצעת בדיקת המרה מול הדולר והיורו.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="update-payment-header" aria-controls="update-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    כיצד מעדכנים אמצעי תשלום?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    ניתן לעדכן דרך דף התשלומים. אם לא מצאת את האפשרות או ישנה תקלה, יש לפנות לצוות התמיכה בכתובת: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="problem-header" aria-controls="problem-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    מה לעשות אם יש בעיה בהנחה או בתשלום?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    יש לפנות לצוות התמיכה בכתובת: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cant-pay-header" aria-controls="cant-pay-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    למי לפנות אם אין לי יכולת לשלם?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    יש לבחור במסלול "קרן הלפ-חבר" בדף התשלומים, או לפנות לצוות התמיכה בכתובת: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cancel-membership-header" aria-controls="cancel-membership-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    איך מבטלים את המנוי?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    יש לפנות לצוות התמיכה בכתובת: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Paper style={{ marginTop: 24 }}>
            <p>לכל שאלה נוספת, ניתן לפנות לצוות התמיכה בכתובת: <a href="mailto:help@kli.one">help@kli.one</a>.</p>
        </Paper>
    </Fragment>
    )
}

export default FaqHE;
