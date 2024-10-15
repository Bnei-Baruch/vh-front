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

function FaqRU() {

    const classes = useStyles();

    return (
    <Fragment>
        <Typography variant="h1">Часто Задаваемые Вопросы</Typography>
        <br/>
        <Paper>
            <p>Дорогие друзья,</p>
            <p>
                Начиная с вторника, 01.11.2024 система "Арвут" будет доступна только для подписчиков.<br/>
                Каждый, кто хочет получить доступ к системе, должен будет оформить подписку стоимостью 80 шекелей в месяц.<br/>
                Это связано с тем, что затраты очень высокие и обслуживание требует значительных ресурсов.<br/> 
                Спасибо за понимание и поддержку.
            </p>
            <p>
                С уважением,<br/>
                Команда "Виртуального дома"
            </p>
        </Paper>
        <Accordion defaultExpanded>
            <AccordionSummary id="price-header" aria-controls="price-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Какова стоимость подписки?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Стоимость подписки - 80 шек./ 20 $ /20 € 
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="helphaver-header" aria-controls="helphaver-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    К кому обратиться, если у меня нет финансовой возможности оплатить?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    На <a href="https://kli.one/dash/membership">странице оплаты</a> есть возможность обратиться в фонд «Хелп-Хавер». 
                    Меню &gt; Подписка &gt; Статус &gt; Смена типа подписки &gt; Хелп-Хавер
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="whatfor-header" aria-controls="whatfor-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Что включает в себя оплата за «Виртуальный дом»?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Оплата за «Виртуальный дом» включает использование «Системы Арвут», сайта «Свива това», архива «Каббала Медиа», 
                нашего здания в Петах-Тикве, которое служит инфраструктурой для всех систем, а также обеспечение безопасности данных, 
                защиту от кибератак и использование различных приложений.
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
                    На <a href="https://kli.one/dash/membership">странице оплаты</a> нажмите на кнопку: Обновить способ оплаты. 
                    Меню &gt; Подписка &gt; Статус &gt; Обновить способ оплаты.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="recurring-vs-regular-payment-header" aria-controls="recurring-vs-regular-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                В чем разница между оплатой вручную и автоматической оплатой?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Оплата вручную — это одноразовый платеж, который не возобновляется автоматически, но есть возможность оплатить заранее за несколько месяцев. 
                    Автоматическая оплата — это регулярный платеж, который осуществляется как постоянное поручение и автоматически возобновляется каждый месяц.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cancel-membership-header" aria-controls="cancel-membership-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Как отменить подписку, и можно ли отменить подписку в любой момент?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Подписку можно отменить в любой момент через <a href="https://kli.one/dash/membership">странице оплаты</a>, нажав на кнопку "Отмена подписки".
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="less-then-month-header" aria-controls="less-then-month-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Есть ли возможность оформить подписку на срок менее месяца?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Нет, оплата производится только за целый месяц.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-header" aria-controls="discount-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Можно ли заплатить меньше 20 долларов?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    На <a href="https://kli.one/dash/membership">странице оплаты</a> есть возможность обратиться в фонд «Хелп-Хавер». 
                    Меню &gt; Подписка &gt; Статус &gt; Смена типа подписки &gt; Хелп-Хавер
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="price-change-header" aria-controls="price-change-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Ожидается ли, что сумма платежа изменится в будущем?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Стоимость подписки основана на расходах на обслуживание продуктов «Виртуального дома» и его инфраструктуры. 
                    В зависимости от расходов на обслуживание существующих и будущих систем возможны изменения.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="pay-in-advance-header" aria-controls="pay-in-advance-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Можно ли оплатить заранее за несколько месяцев?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Можно оплатить за несколько месяцев вперед, если платеж осуществляется вручную.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="currency-header" aria-controls="currency-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    В какой валюте можно платить?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Можно платить в шекелях (ש"ח), евро (€) или американских долларах ($).
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Fragment>
    )
}

export default FaqRU;

