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

function FaqES() {

    const classes = useStyles();

    return (
    <Fragment>
        <Typography variant="h1">Preguntas Frecuentes</Typography>
        <br/>
        <Paper>
            <p>Queridos amigos,</p>
            <p>
                El martes 1 de noviembre de 2024, el 'Sistema de Arvut' estará disponible solo para suscriptores.<br/>
                Cualquier amigo que desee acceder al sistema deberá tener una suscripción con un costo de $20 al mes.<br/>
                La razón de esto es que los costos son muy altos, y el mantenimiento requiere muchos recursos.<br/> 
                Gracias por su comprensión y apoyo.
            </p>
            <p>
                Juntos,<br/>
                El equipo de 'la Comunidad de Kabbalah'
            </p>
        </Paper>
        <Accordion defaultExpanded>
            <AccordionSummary id="price-header" aria-controls="price-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cuál es el costo de la suscripción?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    El costo de la suscripción es de 80 NIS / $20 / 20 euros.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="helphaver-header" aria-controls="helphaver-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿A quién debo contactar si tengo dificultades económicas para pagar?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    En la <a href="https://kli.one/dash/membership">página de pagos</a> hay una opción para contactar con el fondo 'Help-Haver'. 
                    Menú &gt; Suscripción &gt; Estado &gt; Cambiar tipo de suscripción &gt; Help Haver 
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="whatfor-header" aria-controls="whatfor-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Qué incluye el pago por el "hogar virtual"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    El pago por el "hogar virtual" es por el uso del "sistema de Arvut", el sitio "Svivá Tová", el archivo "Archivo de Medios", 
                    nuestro edificio en Pétaj Tikvá que sirve de infraestructura para todos los sistemas, seguridad de la información, 
                    protección contra ataques cibernéticos y uso de diversas aplicaciones.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="update-payment-header" aria-controls="update-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cómo actualizo mi método de pago?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    En la <a href="https://kli.one/dash/membership">página de pagos</a>, en el botón: Actualizar método de pago. 
                    Menú &gt; Suscripción &gt; Estado &gt; Actualizar método de pago
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="recurring-vs-regular-payment-header" aria-controls="recurring-vs-regular-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cuál es la diferencia entre el pago manual y el pago automático?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    El pago manual es un pago único que no se renueva automáticamente, pero hay opción de pagar por adelantado varios meses. 
                    El pago automático es un pago fijo que se realiza como una orden permanente y se renueva automáticamente cada mes.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cancel-membership-header" aria-controls="cancel-membership-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cómo cancelo la suscripción y puedo cancelarla en cualquier momento?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Se puede cancelar la suscripción en cualquier momento, a través de la <a href="https://kli.one/dash/membership">página de pagos</a> en el botón de cancelación de suscripción.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="less-then-month-header" aria-controls="less-then-month-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Es posible suscribirse por un período de menos de un mes?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    No, el pago es solo por un mes completo.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-header" aria-controls="discount-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Puedo pagar menos de $20?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    En la <a href="https://kli.one/dash/membership">página de pagos</a> hay una opción para contactar con el fondo 'Help-Haver'. 
                    Menú &gt; Suscripción &gt; Estado &gt; Cambiar tipo de suscripción &gt; Help Haver 
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="price-change-header" aria-controls="price-change-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Se espera que el monto del cargo cambie en el futuro?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                El costo de la suscripción se basa en los gastos de mantenimiento de los productos del "hogar virtual" y su infraestructura. 
                Según los gastos de mantenimiento de los sistemas existentes y futuros, pueden haber cambios.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="pay-in-advance-header" aria-controls="pay-in-advance-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Puedo pagar por adelantado varios meses?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Se puede pagar por varios meses por adelantado si se realiza el pago de forma manual.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="currency-header" aria-controls="currency-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿En qué moneda puedo pagar?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Se puede pagar en shekels (NIS), euros (€) o dólares estadounidenses ($).
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Fragment>
    )
}

export default FaqES;

