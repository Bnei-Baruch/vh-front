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

function CancellationEs() {
  const classes = useStyles()

  const columns = [
    'Producto',
    'Opciones de pago',
    'Cancelación de débito automático',
    'Cancelación de pago único',
  ]

  const standingOrderCancel = (
    <span>
      {'Para cancelar debe enviarse un correo electrónico a '}
      <a href="mailto:help@kli.one">help@kli.one</a>
      {'. La cancelación entrará en vigencia dentro de los 3 días hábiles, y no se realizarán cobros adicionales después de esa fecha.'}
    </span>
  )

  const proRata = 'Se otorgará un crédito por la parte proporcional del período no utilizado.'

  const payKliOneRows = [
    [
      'Pagos de mantenimiento',
      '1. Débito automático con tarjeta - el primer cobro en la fecha de la transacción, y luego el día 15 de cada mes. 2. Pago único.',
      standingOrderCancel,
      proRata,
    ],
    [
      '"Comunidad de Estudiantes" y estudiantes de "El Punto en el Corazón"',
      '1. Débito automático con tarjeta - el primer cobro en la fecha de la transacción, y luego el día 15 de cada mes. 2. Pago único.',
      standingOrderCancel,
      proRata,
    ],
    [
      'Gimnasio',
      'Débito automático con tarjeta - el primer cobro en la fecha de la transacción, y luego el día 15 de cada mes.',
      standingOrderCancel,
      proRata,
    ],
    [
      "Instituto \"Kabalá La'am\" - Cursos",
      '1. Pago único con tarjeta o hasta 6 cuotas iguales. 2. Transferencia bancaria.',
      '–',
      'Se puede cancelar y recibir reembolso completo hasta la segunda clase inclusive. Después de la tercera clase, reembolso del 75% del costo total del curso. Después de la cuarta clase, reembolso del 60%. A partir de la quinta clase, no se otorgará reembolso. Se aclara que, conforme a la ley, una vez iniciado el curso el participante no tiene derecho de cancelación. Los reembolsos detallados anteriormente se otorgan por voluntad de la Asociación, más allá de lo exigido por la ley.',
    ],
    [
      'Comidas',
      'Pago único.',
      '–',
      'La inscripción a una comida constituye un compromiso de participación. Se recibirá reembolso completo hasta que finalice el plazo de inscripción anticipada, según se indique en la página de compra de la comida. Después de esa fecha no se otorgará reembolso.',
    ],
    [
      'Eventos y congresos',
      'Pago único.',
      '–',
      'La inscripción a un evento constituye un compromiso de participación. Se recibirá reembolso completo hasta que finalice el plazo de inscripción anticipada, según se indique en la página de compra del evento. Después de esa fecha no se otorgará reembolso.',
    ],
    [
      'Donaciones',
      '1. Débito automático con tarjeta - el primer cobro en la fecha de la transacción, y luego el día 15 de cada mes. 2. Pago único. 3. Transferencia bancaria.',
      standingOrderCancel,
      'Se puede cancelar una donación única dentro de los 14 días desde la fecha de su realización.',
    ],
  ]

  const kliOneStandingCancel = (
    <span>
      {'La cancelación puede realizarse a través de la gestión de la cuenta en el sitio o por correo electrónico a '}
      <a href="mailto:help@kli.one">help@kli.one</a>
      {'. La cancelación entrará en vigencia dentro de los 3 días hábiles, y no se realizarán cobros adicionales después de esa fecha.'}
    </span>
  )

  const kliOneRows = [
    [
      'Matrícula/aranceles',
      '1. Pago único mensual. 2. Débito automático con tarjeta - el primer cobro en la fecha de la transacción, y luego el día 20 de cada mes.',
      kliOneStandingCancel,
      proRata,
    ],
  ]

  return (
    <div className={classes.contentRoot}>
      <Typography variant="h1" className={classes.pageTitle}>
        Reglamento del Sitio y Política de Cancelaciones
      </Typography>
      <p className={classes.orgName}>
        Asociación "Bnei Baruch - Kabalá La'am" - R.A. 580292753
      </p>
      <p className={classes.genderNote}>
        Este documento fue redactado en género masculino únicamente por razones de comodidad, y se
        refiere tanto a mujeres como a hombres.
      </p>
      <p className={classes.updatedDate}>Última actualización: junio de 2026</p>

      <Typography className={classes.sectionTitle}>1. Datos de la Asociación</Typography>
      <p>
        {'Asociación "Bnei Baruch - Kabalá La\'am" R.A., número de asociación: 580292753, dirección: calle HaRabash 12, Petah Tikva, código postal 4934829, correo electrónico: '}
        <a href="mailto:info@kab.co.il">info@kab.co.il</a>
        {', correo electrónico para consultas de cancelación y atención al cliente: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
      </p>

      <Typography className={classes.sectionTitle}>2. General</Typography>
      <p>
        Este reglamento regula el uso del sitio y de los servicios brindados por la Asociación. El
        ingreso al sitio y el uso de los servicios constituyen la aceptación plena de los términos
        de este reglamento, de la política de privacidad y de los términos de uso de la Asociación.
      </p>

      <Typography className={classes.sectionTitle}>3. Servicios y Productos</Typography>

      <Typography className={classes.subSectionTitle}>3.1 Contenidos gratuitos</Typography>
      <p>
        Los contenidos de Cabalá ofrecidos en el sitio, incluyendo lecciones, conferencias y
        materiales de estudio, están disponibles para su visualización y uso sin costo, para uso
        personal únicamente.
      </p>

      <Typography className={classes.subSectionTitle}>3.2 Productos y servicios pagos</Typography>
      <p>La Asociación ofrece para su compra los siguientes artículos:</p>
      <ul>
        <li>Pagos de mantenimiento</li>
        <li>Comunidad de estudiantes</li>
        <li>Gimnasio</li>
        <li>Instituto de enseñanza</li>
        <li>Comidas</li>
        <li>Eventos y congresos</li>
        <li>Donaciones</li>
        <li>Matrícula/aranceles</li>
      </ul>
      <p>
        Los detalles de cada producto o servicio, incluyendo el precio, la fecha del evento y las
        condiciones de participación, se especificarán en la página de compra correspondiente en el
        sitio.
      </p>

      <Typography className={classes.sectionTitle}>4. Pago</Typography>

      <Typography className={classes.subSectionTitle}>4.1 Medios de pago aceptados</Typography>
      <p>La Asociación acepta pago mediante los siguientes medios:</p>
      <ul>
        <li>Tarjetas de crédito (Visa, Mastercard, Isracard, American Express)</li>
        <li>Apple Pay</li>
        <li>Google Pay</li>
        <li>PayPal</li>
        <li>Transferencia bancaria</li>
        <li>Cualquier otro medio de pago adicional que se publique en el sitio</li>
      </ul>

      <Typography className={classes.subSectionTitle}>4.2 Cobro y seguridad de la información</Typography>
      <ul>
        <li>El cobro se realiza en el momento de la compra.</li>
        <li>
          Los datos de la tarjeta de crédito no se almacenan en los servidores de la Asociación, y
          se transmiten de forma segura conforme al estándar PCI DSS.
        </li>
        <li>
          {'La factura se enviará a la dirección de correo electrónico registrada en el sistema. Para cambiar la dirección de correo electrónico de recepción de facturas, debe escribirse a: '}
          <a href="mailto:help@kli.one">help@kli.one</a>.
        </li>
      </ul>

      <Typography className={classes.subSectionTitle}>
        4.3 Débitos automáticos y suscripción de renovación automática
      </Typography>
      <p>
        Los débitos automáticos y las suscripciones de renovación automática recibirán mensualmente
        un comprobante del pago dentro de los dos días hábiles siguientes, enviado a la dirección
        de correo electrónico registrada en el sistema. El usuario podrá cancelar la suscripción
        antes de la fecha de renovación, conforme a la política de cancelaciones detallada en la
        sección 5.
      </p>

      <Typography className={classes.subSectionTitle}>4.4 Cambio de precios</Typography>
      <p>
        La Asociación podrá modificar los precios de los servicios en cualquier momento, sin previo
        aviso, así como modificar la modalidad de los medios de pago a su exclusivo criterio.
      </p>

      <Typography className={classes.sectionTitle}>5. Política de Cancelaciones y Reembolsos</Typography>

      <Typography className={classes.subSectionTitle}>
        5.1 Derecho de cancelación - transacción de venta a distancia
      </Typography>
      <p>
        Conforme a la Ley de Protección al Consumidor, 5741-1981, y al Reglamento de Protección al
        Consumidor (Cancelación de Transacción), 5771-2010, el usuario podrá cancelar una
        transacción dentro de los 14 días desde la fecha de realización de la transacción o desde
        la fecha de recepción de la confirmación de la transacción, lo que ocurra más tarde, siempre
        que el servicio aún no se haya prestado en su totalidad. Un ciudadano de la tercera edad, un
        nuevo inmigrante ("olé jadash") o una persona con discapacidad podrá cancelar una
        transacción realizada a distancia dentro de los 4 meses desde la fecha de realización de la
        transacción o desde la fecha de recepción de la confirmación de la transacción, lo que ocurra
        más tarde, presentando el documento correspondiente.
      </p>
      <p>Si la transacción se cancela dentro del plazo establecido, la Asociación realizará lo siguiente:</p>
      <ul>
        <li>
          Anulará el cobro, o reembolsará al usuario el monto pagado, dentro de los 14 días hábiles
          desde la fecha de recepción del aviso de cancelación.
        </li>
        <li>No se realizarán cobros adicionales una vez que la cancelación entre en vigencia.</li>
        <li>
          La Asociación podrá deducir una comisión de cancelación de 5% del precio de la transacción
          o 100 ₪, el monto que sea menor, conforme a la ley.
        </li>
      </ul>
      <p>
        Se aclara que el derecho de cancelación no aplica a contenido digital que haya sido puesto a
        disposición del usuario y cuyo consumo ya haya comenzado, así como tampoco a un servicio que
        haya sido prestado en su totalidad con el consentimiento del usuario antes de que finalice el
        plazo de cancelación.
      </p>
      <p>
        Lo anterior constituye el marco general para la cancelación de transacciones. Las condiciones
        específicas de cancelación para cada producto y servicio se detallan en las secciones
        5.4-5.5 a continuación.
      </p>

      <Typography className={classes.subSectionTitle}>
        5.2 Cancelación de suscripción - débito automático
      </Typography>
      <p>
        Una solicitud de cancelación de suscripción de renovación automática o de débito automático
        entrará en vigencia dentro de los 3 días hábiles desde la fecha de recepción de la solicitud
        por parte de la Asociación, y a más tardar en la fecha del próximo cobro. Una vez que la
        cancelación entre en vigencia, no se realizarán cobros adicionales.
      </p>

      <Typography className={classes.subSectionTitle}>
        5.3 Forma de presentar la solicitud de cancelación
      </Typography>
      <p>Es posible cancelar una transacción de una de las siguientes formas:</p>
      <ul>
        <li>
          {'Correo electrónico: '}
          <a href="mailto:help@kli.one">help@kli.one</a>
        </li>
        <li>Por escrito: a la dirección de la Asociación: calle HaRabash 12, Petah Tikva</li>
      </ul>
      <p>En la solicitud de cancelación debe indicarse:</p>
      <ul>
        <li>Nombre completo</li>
        <li>Dirección de correo electrónico asociada a la cuenta</li>
        <li>Número de transacción / comprobante / copia de la factura</li>
        <li>Motivo de la cancelación (no obligatorio)</li>
      </ul>

      <Typography className={classes.subSectionTitle}>
        5.4 Condiciones de cancelación por producto - Sitio Pay.Kli.One
      </Typography>
      <CancellationTable columns={columns} rows={payKliOneRows} />

      <Typography className={classes.subSectionTitle}>
        5.5 Condiciones de cancelación por producto - Casa Virtual (Sitio Kli.One)
      </Typography>
      <CancellationTable columns={columns} rows={kliOneRows} />

      <Typography className={classes.sectionTitle}>6. Política de Accesibilidad</Typography>
      <p>
        {'La Asociación trabaja para mejorar la accesibilidad del sitio para personas con discapacidad, conforme a la Ley de Igualdad de Derechos para Personas con Discapacidad. Para consultas sobre accesibilidad: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
      </p>

      <Typography className={classes.sectionTitle}>7. Varios</Typography>
      <ul>
        <li>
          Este reglamento constituye parte integral de los términos de uso y de la política de
          privacidad de la Asociación.
        </li>
        <li>
          La Asociación se reserva el derecho de actualizar este reglamento. Los cambios sustanciales
          se publicarán en el sitio y se enviarán al correo electrónico de los usuarios registrados.
        </li>
        <li>
          Este reglamento está sujeto a la Ley de Protección al Consumidor, 5741-1981, al Reglamento
          de Protección al Consumidor (Cancelación de Transacción), 5771-2010, y a toda otra ley
          israelí relevante.
        </li>
      </ul>
    </div>
  )
}

export default CancellationEs
