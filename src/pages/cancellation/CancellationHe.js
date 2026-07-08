import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import CancellationTable from './CancellationTable'

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    color: '#1a4378',
  },
  orgName: {
    fontSize: theme.typography.pxToRem(16),
    color: '#1a4378',
    fontWeight: theme.typography.fontWeightBold,
    margin: '8px 0 0 0',
  },
  genderNote: {
    fontSize: theme.typography.pxToRem(13),
    color: '#888888',
    margin: '6px 0 0 0',
  },
  updatedDate: {
    fontSize: theme.typography.pxToRem(13),
    color: '#888888',
    margin: '4px 0 16px 0',
  },
  sectionTitle: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    color: '#1a4378',
  },
  subSectionTitle: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
    color: '#1a4378',
  },
  contentRoot: {
    '& a': {
      color: '#2F6FB0',
    },
  },
}))

function CancellationHe() {
  const classes = useStyles()

  const columns = ['מוצר', 'אפשרויות תשלום', 'ביטול הוראת קבע', 'ביטול תשלום חד-פעמי']

  const standingOrderCancel = (
    <span>
      {'לביטול יש לשלוח אי-מייל לדוא"ל '}
      <a href="mailto:help@kli.one">help@kli.one</a>
      {'. הביטול ייכנס לתוקף תוך 3 ימי עסקים, ולא יבוצעו חיובים נוספים לאחר מכן.'}
    </span>
  )

  const proRata = 'יינתן זיכוי על החלק היחסי של התקופה שלא נוצלה.'

  const payKliOneRows = [
    [
      'תשלומי אחזקה',
      '1. הוראת קבע באשראי - החיוב הראשון במועד העסקה, ולאחר מכן בכל 15 לחודש. 2. תשלום חד-פעמי.',
      standingOrderCancel,
      proRata,
    ],
    [
      '"קהילת הלומדים" ותלמידי "הנקודה שבלב"',
      '1. הוראת קבע באשראי - החיוב הראשון במועד העסקה, ולאחר מכן בכל 15 לחודש. 2. תשלום חד-פעמי.',
      standingOrderCancel,
      proRata,
    ],
    [
      'חדר כושר',
      'הוראת קבע באשראי - החיוב הראשון במועד העסקה, ולאחר מכן בכל 15 לחודש.',
      standingOrderCancel,
      proRata,
    ],
    [
      'מכללה "קבלה לעם" - קורסים',
      '1. תשלום חד-פעמי באשראי או עד 6 תשלומים שווים. 2. העברה בנקאית.',
      '–',
      'ניתן לבטל ולקבל החזר מלא עד מועד השיעור השני כולל. לאחר השיעור השלישי, החזר של 75% מעלות הקורס המלא. לאחר השיעור הרביעי, החזר של 60%. החל מהשיעור החמישי, לא יינתן החזר. יובהר כי על פי הדין, לאחר תחילת הקורס לא קמה למשתתף זכות ביטול. ההחזרים המפורטים לעיל ניתנים מרצון העמותה, מעבר לנדרש על פי חוק.',
    ],
    [
      'סעודות',
      'תשלום חד-פעמי.',
      '–',
      'רישום לסעודה מהווה התחייבות להשתתפות. החזר מלא יתקבל עד תום מועד ההרשמה המוקדמת, כפי שיצוין בדף הרכישה של הסעודה. לאחר מועד זה לא יינתן החזר.',
    ],
    [
      'אירועים וכנסים',
      'תשלום חד-פעמי.',
      '–',
      'רישום לאירוע מהווה התחייבות להשתתפות. החזר מלא יתקבל עד תום מועד ההרשמה המוקדמת, כפי שיצוין בדף הרכישה של האירוע. לאחר מועד זה לא יינתן החזר.',
    ],
    [
      'תרומות',
      '1. הוראת קבע באשראי - החיוב הראשון במועד העסקה, ולאחר מכן בכל 15 לחודש. 2. תשלום חד-פעמי. 3. העברה בנקאית.',
      standingOrderCancel,
      'ניתן לבטל תרומה חד-פעמית תוך 14 יום ממועד ביצועה.',
    ],
  ]

  const kliOneStandingCancel = (
    <span>
      {'ביטול ניתן לבצע דרך ניהול החשבון באתר או בדוא"ל '}
      <a href="mailto:help@kli.one">help@kli.one</a>
      {'. הביטול ייכנס לתוקף תוך 3 ימי עסקים, ולא יבוצעו חיובים נוספים לאחר מכן.'}
    </span>
  )

  const kliOneRows = [
    [
      'שכר לימוד',
      '1. תשלום חד-פעמי לחודש. 2. הוראת קבע באשראי - החיוב הראשון במועד העסקה, ולאחר מכן בכל 20 לחודש.',
      kliOneStandingCancel,
      proRata,
    ],
  ]

  return (
    <div className={classes.contentRoot}>
      <Typography variant="h1" className={classes.pageTitle}>
        תקנון האתר ומדיניות ביטולים
      </Typography>
      <p className={classes.orgName}>עמותת "בני ברוך-קבלה לעם" - ע"ר 580292753</p>
      <p className={classes.genderNote}>
        מסמך זה נכתב בלשון זכר לצרכי נוחות בלבד ומתייחס לנשים וגברים כאחד.
      </p>
      <p className={classes.updatedDate}>עדכון אחרון: יוני 2026</p>

      <Typography className={classes.sectionTitle}>1. פרטי העמותה</Typography>
      <p>
        {`עמותת "בני ברוך-קבלה לעם" ע"ר, מספר עמותה: 580292753, כתובת: רח' הרב"ש 12 פתח תקווה, מיקוד 4934829, דוא"ל: `}
        <a href="mailto:info@kab.co.il">info@kab.co.il</a>
        {`, דוא"ל לפניות ביטול ושירות לקוחות: `}
        <a href="mailto:help@kli.one">help@kli.one</a>
      </p>

      <Typography className={classes.sectionTitle}>2. כללי</Typography>
      <p>
        תקנון זה מסדיר את השימוש באתר ובשירותים המסופקים על ידי העמותה. הכניסה לאתר והשימוש
        בשירותים מהווים הסכמה מלאה לתנאי תקנון זה, למדיניות הפרטיות ולתנאי השימוש של העמותה.
      </p>

      <Typography className={classes.sectionTitle}>3. השירותים והמוצרים</Typography>

      <Typography className={classes.subSectionTitle}>3.1 תכנים חינמיים</Typography>
      <p>
        תכני הקבלה המוצעים באתר, לרבות שיעורים, הרצאות וחומרי לימוד, ניתנים לצפייה ולשימוש
        ללא תשלום, לשימוש אישי בלבד.
      </p>

      <Typography className={classes.subSectionTitle}>3.2 מוצרים ושירותים בתשלום</Typography>
      <p>העמותה מציעה לרכישה את הפריטים הבאים:</p>
      <ul>
        <li>תשלומי אחזקה</li>
        <li>קהילת הלומדים</li>
        <li>חדר כושר</li>
        <li>מכללה</li>
        <li>סעודות</li>
        <li>אירועים וכנסים</li>
        <li>תרומות</li>
        <li>שכר לימוד</li>
      </ul>
      <p>
        פרטי כל מוצר או שירות, לרבות המחיר, מועד האירוע ותנאי ההשתתפות, יפורטו בדף הרכישה
        הרלוונטי באתר.
      </p>

      <Typography className={classes.sectionTitle}>4. תשלום</Typography>

      <Typography className={classes.subSectionTitle}>4.1 אמצעי תשלום מקובלים</Typography>
      <p>העמותה מקבלת תשלום באמצעים הבאים:</p>
      <ul>
        <li>כרטיסי אשראי (Visa ,Mastercard, ישראכרט, אמריקן אקספרס)</li>
        <li>Apple Pay</li>
        <li>Google Pay</li>
        <li>PayPal</li>
        <li>העברה בנקאית</li>
        <li>כל אמצעי תשלום נוסף שיפורסם באתר</li>
      </ul>

      <Typography className={classes.subSectionTitle}>4.2 חיוב ואבטחת מידע</Typography>
      <ul>
        <li>החיוב מתבצע במועד הרכישה.</li>
        <li>
          פרטי כרטיס האשראי אינם נשמרים על שרתי העמותה, ומועברים באופן מאובטח בהתאם לתקן
          PCI DSS.
        </li>
        <li>
          {'החשבונית תישלח לכתובת הדוא"ל השמורה במערכת. לשינוי כתובת הדוא"ל לקבלת חשבוניות יש לפנות לדוא"ל: '}
          <a href="mailto:help@kli.one">help@kli.one</a>.
        </li>
      </ul>

      <Typography className={classes.subSectionTitle}>
        4.3 הוראות קבע ומנוי מתחדש אוטומטית
      </Typography>
      <p>
        הוראות קבע ומנויים המתחדשים אוטומטית יקבלו בכל חודש קבלה על התשלום בתוך שני ימי עסקים
        לכתובת הדוא"ל השמורה במערכת. המשתמש רשאי לבטל את המנוי לפני מועד החידוש בהתאם למדיניות
        הביטולים המפורטת בסעיף 5.
      </p>

      <Typography className={classes.subSectionTitle}>4.4 שינוי מחירים</Typography>
      <p>
        העמותה רשאית לשנות את מחירי השירותים בכל עת, ללא הודעה מוקדמת וכן לשנות את אופן אמצעי
        התשלום לפי שיקול דעתה הבלעדי.
      </p>

      <Typography className={classes.sectionTitle}>5. מדיניות ביטולים והחזרים</Typography>

      <Typography className={classes.subSectionTitle}>
        5.1 זכות ביטול - עסקת מכר מרחוק
      </Typography>
      <p>
        בהתאם לחוק הגנת הצרכן, התשמ"א-1981, ותקנות הגנת הצרכן (ביטול עסקה), התשע"א-2010,
        המשתמש רשאי לבטל עסקה תוך 14 ימים מיום ביצוע העסקה או מיום קבלת אישור העסקה, לפי
        המאוחר, ובלבד שהשירות טרם ניתן במלואו. אזרח ותיק, עולה חדש, או אדם עם מוגבלות, רשאי
        לבטל עסקה שנעשתה מרחוק תוך 4 חודשים מיום ביצוע העסקה או מיום קבלת אישור העסקה, לפי
        המאוחר, בהצגת תעודה מתאימה.
      </p>
      <p>בוטלה העסקה בתוך המועד הקבוע, תבצע העמותה את הפעולות הבאות:</p>
      <ul>
        <li>
          תבטל את החיוב, או תשיב למשתמש את הסכום ששולם, תוך 14 ימי עסקים ממועד קבלת הודעת
          הביטול.
        </li>
        <li>לא יבוצעו חיובים נוספים לאחר כניסת הביטול לתוקף.</li>
        <li>
          העמותה רשאית לנכות דמי ביטול בסך 5% ממחיר העסקה או 100 ₪, לפי הנמוך מביניהם,
          בהתאם לחוק.
        </li>
      </ul>
      <p>
        יובהר כי זכות הביטול אינה חלה על תוכן דיגיטלי שהועמד לרשות המשתמש והחל בצריכתו, וכן
        על שירות שניתן במלואו בהסכמת המשתמש לפני תום תקופת הביטול.
      </p>
      <p>
        האמור לעיל מהווה את המסגרת הכללית לביטול עסקאות. תנאי הביטול הספציפיים לכל מוצר
        ושירות מפורטים בסעיף 5.4-5.5 להלן.
      </p>

      <Typography className={classes.subSectionTitle}>
        5.2 ביטול מנוי - הוראת קבע
      </Typography>
      <p>
        בקשת ביטול מנוי מתחדש או הוראת קבע תיכנס לתוקף תוך 3 ימי עסקים ממועד קבלת הבקשה על
        ידי העמותה, ולא יאוחר ממועד החיוב הבא. לאחר כניסת הביטול לתוקף, לא יבוצעו חיובים
        נוספים.
      </p>

      <Typography className={classes.subSectionTitle}>
        5.3 אופן הגשת בקשת ביטול
      </Typography>
      <p>ניתן לבטל עסקה באחת מהדרכים הבאות:</p>
      <ul>
        <li>
          {'דוא"ל: '}
          <a href="mailto:help@kli.one">help@kli.one</a>
        </li>
        <li>{'בכתב: לכתובת העמותה: רח\' הרב"ש 12 פתח תקווה'}</li>
      </ul>
      <p>יש לציין בבקשת הביטול:</p>
      <ul>
        <li>שם מלא</li>
        <li>כתובת דוא"ל המשויכת לחשבון</li>
        <li>מספר עסקה / אסמכתא / העתק חשבונית</li>
        <li>סיבת הביטול (לא חובה)</li>
      </ul>

      <Typography className={classes.subSectionTitle}>
        5.4 תנאי ביטול לפי מוצר - אתר Pay.Kli.One
      </Typography>
      <CancellationTable columns={columns} rows={payKliOneRows} />

      <Typography className={classes.subSectionTitle}>
        5.5 תנאי ביטול לפי מוצר - הבית הווירטואלי (אתר Kli.One)
      </Typography>
      <CancellationTable columns={columns} rows={kliOneRows} />

      <Typography className={classes.sectionTitle}>6. מדיניות נגישות</Typography>
      <p>
        {'העמותה פועלת לשיפור נגישות האתר לאנשים עם מוגבלות בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות. לפניות בנושא נגישות: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
      </p>

      <Typography className={classes.sectionTitle}>7. שונות</Typography>
      <ul>
        <li>תקנון זה מהווה חלק בלתי נפרד מתנאי השימוש ומדיניות הפרטיות של העמותה.</li>
        <li>
          העמותה שומרת לעצמה את הזכות לעדכן תקנון זה. שינויים מהותיים יפורסמו באתר ויישלחו
          לדוא"ל המשתמשים הרשומים.
        </li>
        <li>
          תקנון זה כפוף לחוק הגנת הצרכן, התשמ"א-1981, לתקנות הגנת הצרכן (ביטול עסקה),
          התשע"א-2010, ולכל דין ישראלי רלוונטי אחר.
        </li>
      </ul>
    </div>
  )
}

export default CancellationHe
