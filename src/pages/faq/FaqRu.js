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

function FaqRU() {

    const classes = useStyles();

    return (
    <Fragment>
        <Typography variant="h1" className={classes.pageTitle}>Вопросы и ответы о модели „Оплата за обучение"</Typography>
        <br/>
        <Paper>
            <p className={classes.orgName}>Организация „Бней Барух – Каббала ла-Ам"</p>
            <p className={classes.updatedDate}>Обновлено: апрель 2026 года</p>
        </Paper>

        <Typography className={classes.sectionTitle}>Общее</Typography>

        <Accordion defaultExpanded>
            <AccordionSummary id="why-header" aria-controls="why-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Почему мы переходим на модель „Оплата за обучение"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    В последнее десятилетие число учеников в организации выросло до десятков тысяч, и пожертвования и "маасер" больше не покрывают все расходы на мировую систему обучения. Поэтому было решено перейти на модель „оплаты за обучение", чтобы каждый товарищ мог участвовать в содержании системы.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="diff-header" aria-controls="diff-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    В чём разница между старой абонентской платой и новой моделью „Оплата за обучение"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Старый абонемент представлял собой единый платеж для всех и предназначался главным образом для покрытия технологических расходов. Модель „Оплата за обучение" — это дифференцированный (ступенчатый) платеж, который определяется в соответствии с уровнем стоимости жизни в стране, где живёт каждый ученик, и покрывает все расходы нашей образовательной системы. Речь идёт о замене прежней системы, а не о дополнительной оплате.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="who-header" aria-controls="who-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Кто обязан платить по новой модели „Оплата за обучение"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Модель „Оплата за обучение" распространяется на абонентов и учеников организации „Бней Барух – Каббала ла-Ам", которые завершили курс для начинающих в Израиле и за рубежом, на студентов колледжа, прошедших обучение не менее полугода и более, а также на учеников, постоянно обучающихся в образовательных системах организации.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>Оплата и доступ</Typography>

        <Accordion>
            <AccordionSummary id="price-header" aria-controls="price-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Сколько стоит новая модель „Оплата за обучение"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div">
                    <ul>
                        <li>Страны с высоким уровнем стоимости жизни — 180 шекелей в месяц.</li>
                        <li>Страны со средним уровнем стоимости жизни — 90 шекелей в месяц.</li>
                        <li>Страны с низким уровнем стоимости жизни — 60 шекелей в месяц.</li>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="whatfor-header" aria-controls="whatfor-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Что включает новая модель „Оплата за обучение"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Уроки и преподаватели, переводы и субтитры, архив, прямые трансляции и технологии, информационная безопасность и киберзащита, цифровая инфраструктура, физический центр, сообщество и сопровождение, службы поддержки и управления, а также юридические расходы.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="extra-payment-header" aria-controls="extra-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Есть ли дополнительная оплата сверх этого?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Да. Ученики, которые приходят физически в центр в Петах-Тикве, оплачивают дополнительный взнос на содержание для покрытия расходов, таких как кофе, электричество, вода и уборка.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>Скидки</Typography>

        <Accordion>
            <AccordionSummary id="maaser-header" aria-controls="maaser-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Заменяет ли новая модель „Оплата за обучение" выплаты "маасера" (десятины)?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Нет. Маасер (десятина) — это духовное понятие, пожертвование в размере 10 % от дохода. „Оплата за обучение" — это участие в поддержании образовательной системы и не заменяет пожертвование десятины.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-who-header" aria-controls="discount-who-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Кто имеет право на скидку по „Оплате за обучение"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Тот, чья сумма маасера (десятины) и пожертвований за последние 12 месяцев достигла годового порога платы за обучение, установленного для его страны, автоматически получает скидку 55 % в этом месяце.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-calc-header" aria-controls="discount-calc-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Как рассчитывается скидка?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    В Израиле, например, годовой порог составляет 2 160 ₪ (12 × 180 ₪). Если сумма десятины и пожертвований за последние 12 месяцев достигла 2 160 ₪ или больше, скидка составит 55 %. Если нет — оплата производится полностью.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-see-header" aria-controls="discount-see-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Как увидеть, получил ли я скидку?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Скидка отображается на странице статуса подписки в системе.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="couple-discount-header" aria-controls="couple-discount-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Есть ли особая скидка для пар?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Пары будут связаны вместе и получат скидку 55 %, если их общая сумма пожертвований за год вместе превышает двойной годовой порог. Например, в Израиле: 2 × 2 160 ₪ = 4 320 ₪ в год.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="helphaver-header" aria-controls="helphaver-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Для кого предназначена помощь фонда Help-Haver?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Фонд Help-Haver предназначен для учеников, которым требуется финансовая помощь в рамках новой модели „Оплата за обучение". Заявку можно подать через страницу оплаты.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>Оплата и отмена</Typography>

        <Accordion>
            <AccordionSummary id="how-to-pay-header" aria-controls="how-to-pay-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Как производится оплата на практике?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div">
                    Через страницу оплаты, одним из трёх способов:
                    <ul>
                        <li>Автоматический — ежемесячное постоянное поручение, обновляющееся автоматически.</li>
                        <li>Ручной — разовый платёж только за один месяц.</li>
                        <li>Фонд Help-Haver — для учеников, нуждающихся в финансовой помощи.</li>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="currency-header" aria-controls="currency-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    В какой валюте производится оплата?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Жители Израиля оплачивают в шекелях, жители Европы — в евро, а остальные страны — в долларах. Платёж привязан к шекелю, но каждые полгода проводится проверка курса обмена относительно доллара и евро.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="update-payment-header" aria-controls="update-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Как обновить способ оплаты?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Можно обновить через страницу оплаты. Если вы не нашли нужную опцию или возникла ошибка, обратитесь в службу поддержки по адресу: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="problem-header" aria-controls="problem-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Что делать, если возникла проблема со скидкой или оплатой?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Следует обратиться в службу поддержки по адресу: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cant-pay-header" aria-controls="cant-pay-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    К кому обращаться, если у меня нет возможности оплатить?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Следует выбрать вариант „Фонд Help-Haver" на странице оплаты или обратиться в службу поддержки по адресу: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cancel-membership-header" aria-controls="cancel-membership-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Как отменить подписку?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Следует обратиться в службу поддержки по адресу: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Paper style={{ marginTop: 24 }}>
            <p>По любым дополнительным вопросам также можно связаться с командой поддержки по адресу: <a href="mailto:help@kli.one">help@kli.one</a>.</p>
        </Paper>
    </Fragment>
    )
}

export default FaqRU;
