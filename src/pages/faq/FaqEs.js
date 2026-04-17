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

function FaqES() {

    const classes = useStyles();

    return (
    <Fragment>
        <Typography variant="h1" className={classes.pageTitle}>Preguntas y respuestas sobre el modelo de "Matrícula"</Typography>
        <br/>
        <Paper>
            <p className={classes.orgName}>Asociación "Bnei Baruj-Kabalá para todos"</p>
            <p className={classes.updatedDate}>Actualizado: abril 2026</p>
        </Paper>

        <Typography className={classes.sectionTitle}>General</Typography>

        <Accordion defaultExpanded>
            <AccordionSummary id="why-header" aria-controls="why-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Por qué pasan al modelo de "Matrícula"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Durante la última década, el número de estudiantes en la asociación ha crecido a decenas de miles, y las donaciones y subvenciones no llegan a cubrir todos los costes del aprendizaje global del sistema. Por lo que se decidió pasar a un modelo de "matrícula", para que cada miembro pueda participar en el mantenimiento del sistema.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="diff-header" aria-controls="diff-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cuál es la diferencia entre la antigua tarifa de suscripción y el nuevo modelo de "Matrícula"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    La suscripción anterior era una tarifa plana para todos y estaba destinada principalmente a cubrir los costes tecnológicos. El modelo de "Matrícula" es un pago diferencial (escalonado), determinado por el costo de vida del país en el que cada estudiante vive, y cubre todos los costes de nuestro marco educativo. Es un reemplazo del sistema anterior, no un cargo adicional.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="who-header" aria-controls="who-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Quién debe pagar en virtud del nuevo modelo de "Matrícula"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    El modelo de "Matrícula" se aplica a los suscriptores y a los estudiantes de la asociación "Bnei Baruj-Kabalá para todos" que han completado un curso para principiantes en Israel y en el extranjero, a los estudiantes universitarios que han completado seis meses o más de antigüedad, y a los estudiantes que regularmente estudian en los marcos educativos de la asociación.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>Precios y Accesibilidad</Typography>

        <Accordion>
            <AccordionSummary id="price-header" aria-controls="price-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cuánto cuesta el nuevo modelo de "Matrícula"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div">
                    <ul>
                        <li>Países con un alto costo de vida — 180 NIS por mes.</li>
                        <li>Países con un costo medio de vida — 90 NIS por mes.</li>
                        <li>Países con un bajo costo de vida — 60 NIS por mes.</li>
                    </ul>
                    NIS = Nuevo Séquel Israelí
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="whatfor-header" aria-controls="whatfor-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Qué incluye el nuevo modelo de "Matrícula"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lecciones y maestros, traducciones y subtítulos, archivo, emisiones en directo y tecnologías, seguridad de la información y defensa cibernética, infraestructura digital, el centro físico, la comunidad y el acompañamiento, equipos de servicio y gestión, y los gastos legales.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="extra-payment-header" aria-controls="extra-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Hay un cargo adicional más allá de eso?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Sí. Los estudiantes que físicamente vienen al centro en Petaj Tikva deben pagar un extra de mantenimiento para cubrir los gastos, tales como el café, electricidad, agua y limpieza.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>Descuentos</Typography>

        <Accordion>
            <AccordionSummary id="maaser-header" aria-controls="maaser-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿El nuevo modelo de "Matrícula" sustituye el pago del diezmo?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    No. El diezmo es una cuestión espiritual, una donación del 10% de los ingresos. La "Matrícula" es una participación en el mantenimiento del sistema de estudio y no sustituye a la contribución del diezmo.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-who-header" aria-controls="discount-who-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Quién tiene derecho a un descuento en la "Matrícula"?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Aquellos cuyo total de diezmos y contribuciones en los últimos 12 meses han llegado al umbral anual de matrícula de acuerdo a su país son automáticamente elegibles para recibir un descuento del 55% en ese mes.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-calc-header" aria-controls="discount-calc-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cómo se calcula el descuento?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    En Israel, por ejemplo, el umbral anual es de 2.160 NIS (12 × 180 NIS). Si el total de diezmos y donaciones en los últimos 12 meses alcanzó 2.160 NIS o más, el descuento será del 55%. Si no, el pago será en su totalidad.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="discount-see-header" aria-controls="discount-see-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cómo veo si me dieron un descuento?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    El descuento aparece en la página de estado del suscriptor en el sistema.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="couple-discount-header" aria-controls="couple-discount-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Hay un descuento especial para las parejas?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Sí. Las parejas estarán vinculadas y recibirán un descuento del 55% si el total de las contribuciones anuales de los dos juntos supera el doble del umbral anual. Por ejemplo, en Israel: 2 × 2.160 NIS = 4.320 NIS por año.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="helphaver-header" aria-controls="helphaver-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿A quién va dirigida la ayuda del Fondo Help-Haver?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    El Fondo de Ayuda está destinado a estudiantes que necesitan asistencia financiera en el nuevo modelo de matrícula. Puedes solicitarlo a través de la página de pagos.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Typography className={classes.sectionTitle}>Pago y Cancelación</Typography>

        <Accordion>
            <AccordionSummary id="how-to-pay-header" aria-controls="how-to-pay-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cómo se paga?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div">
                    A través de la página de pagos, puede elegir entre tres opciones:
                    <ul>
                        <li>Automático — una orden permanente mensual que se renueva automáticamente.</li>
                        <li>Manual — un pago único por un mes.</li>
                        <li>Fondo de Ayuda para Estudiantes — para estudiantes que necesitan asistencia financiera.</li>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="currency-header" aria-controls="currency-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿En qué moneda se realiza el pago?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Los residentes israelíes pagan en shekels, los residentes europeos en euros y el resto del mundo en dólares. El pago está vinculado al shekel, pero cada seis meses se realiza una revisión de conversión respecto al dólar y al euro.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="update-payment-header" aria-controls="update-payment-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cómo se actualizan los métodos de pago?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Puede actualizarlo a través de la página de pagos. Si no encuentra la opción o hay un fallo, póngase en contacto con el equipo de soporte en: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="problem-header" aria-controls="problem-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Qué hacer si hay un problema con un descuento o pago?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Póngase en contacto con el equipo de soporte en: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cant-pay-header" aria-controls="cant-pay-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Qué debo hacer si no puedo pagar?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Seleccione la opción "Fondo de Ayuda para Estudiantes" en la página de pagos o póngase en contacto con el equipo de soporte en: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary id="cancel-membership-header" aria-controls="cancel-membership-content" expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    ¿Cómo puedo cancelar mi suscripción?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Contacte con el equipo de soporte en: <a href="mailto:help@kli.one">help@kli.one</a>.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Paper style={{ marginTop: 24 }}>
            <p>Para cualquier pregunta adicional, puede contactar con el equipo de soporte en: <a href="mailto:help@kli.one">help@kli.one</a>.</p>
        </Paper>
    </Fragment>
    )
}

export default FaqES;
