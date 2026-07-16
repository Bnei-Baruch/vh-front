import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

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

function TermsEs() {
  const classes = useStyles()

  return (
    <div className={classes.contentRoot}>
      <Typography variant="h2" className={classes.pageTitle}>
      Términos de uso de la Asociación "Bnei Baruj – Kabbalah La’am"
      </Typography>
      <p className={classes.orgName}>En adelante “Asociación Bnei Baruch” o “la Asociación”, N° 580292753</p>
      <p className={classes.orgName}>Dirección de la Asociación:</p>
      <p className={classes.orgName}>Calle Rabash 12. Petaj Tikva, código postal 4934829</p>
      <p className={classes.orgName}>
        {'Correo electrónico: '}
        <a href="mailto:info@kab.co.il">info@kab.co.il</a>
      </p>

      <Typography className={classes.sectionTitle}>Condiciones de Uso</Typography>
      <p>
        {'Bnei Baruch - Kabbalah L\'Am Association (R.A.) (en adelante: la "Asociación", o "nosotros") proporciona una plataforma que facilita la visualización y participación en lecciones de Cabalá a través de un sitio web propiedad de la Asociación (en adelante "el Sitio”) o a través de otros servicios proporcionados por nosotros (en adelante, juntos: “los Servicios”). Estas Condiciones de Uso establecen su acceso y uso del Sitio y sus Servicios. El "Usuario" o "usted" significa el usuario del Sitio. El ingreso al Sitio representa su aceptación de las Condiciones de Uso, así como de la Política de Privacidad (en adelante: “Política de Privacidad”), según la carta, y constituye su aceptación de comportarse de acuerdo con las Condiciones de Uso. Se ruega al usuario que lea atentamente las Condiciones de Uso.'}
      </p>
      <p>
        {'Nos reservamos el derecho, a nuestra exclusiva discreción, de cambiar o modificar las Condiciones de Uso en cualquier momento. Usted acepta estar sujeto a los cambios antes mencionados. Usted es responsable de leer estas Condiciones de Uso de vez en cuando. Su uso continuado del Sitio después del cambio o enmienda antes mencionado constituye su aceptación de las Condiciones de Uso modificadas.'}
      </p>
      <p>
        {'Usted acepta que podemos cambiar cualquier parte del Sitio, en cualquier momento, o cancelar los Servicios o cualquier parte de ellos, por cualquier motivo, sin informarle y sin ninguna obligación.'}
      </p>
      <p>
        {'Las Condiciones de Uso están redactadas en masculino [en hebreo] únicamente por motivos de conveniencia, pero se refieren por igual a mujeres y hombres.'}
      </p>

      <Typography className={classes.subSectionTitle}>1. Uso del sitio</Typography>
      <p>
        {'Sujeto a su acuerdo y al cumplimiento de las Condiciones de Uso, le otorgamos un derecho limitado, que no es exclusivo, y es intransferible, que puede ser cancelado y que está restringido, para el acceso y uso del Sitio para sus requerimientos personales. No tiene derecho a utilizar el Sitio o nuestros Servicios para crear una base de datos propia o para cualquier otro fin comercial.'}
      </p>
      <p>
        {'Los padres de niños menores de 18 años deben registrarse en el Sitio para facilitar el acceso de sus hijos al Sitio y sus Servicios. Su entrada al Sitio y/o uso de sus Servicios constituye la confirmación de que tiene 18 años o que uno de sus padres o tutor ha aprobado explícitamente su uso del Sitio y/o sus Servicios. No se le permite ingresar al Sitio y utilizar sus Servicios, si dicho uso, como se mencionó, está prohibido por alguna ley.'}
      </p>

      <Typography className={classes.subSectionTitle}>2. Registro</Typography>
      <p>
        {'Para crear una cuenta con nosotros, le pediremos que proporcione cierta información. Nos reservamos el derecho de negar a abrir una cuenta para cualquier usuario, sea cual sea el motivo, o de restringir el número de cuentas que un usuario puede abrir, todo a nuestra absoluta discreción. Puede ser que le pidamos información adicional en el futuro. Está prohibido proporcionar información falsa al registrarse. Le proporcionaremos un nombre de usuario y le pediremos que elija una contraseña. No tiene derecho a seleccionar el nombre de otro usuario como [su] nombre de usuario. Además, está prohibido seleccionar un nombre de usuario que resulte ofensivo, insultante o que de cualquier forma contradiga las Condiciones de Uso y el orden público. Usted se compromete a actualizar su cuenta para que se mantenga actualizada y precisa. Cualquier pérdida derivada del hecho de no haber mantenido su cuenta al día es de su exclusiva responsabilidad.'}
      </p>
      <p>
        {'No puede revelar su contraseña a nadie más. No le pediremos que revele la contraseña. Si olvida su contraseña, puede solicitar que se le envíe una nueva contraseña a su dirección de correo electrónico o a su teléfono celular. Su cuenta corre peligro si permite que alguien la use de manera inapropiada. La cuenta puede cerrarse si usted o cualquier otra persona que la utilice infringe estas Condiciones de Uso. En caso de que se cierre su cuenta, no se le permitirá abrir una cuenta nuevamente sin nuestro acuerdo explícito.'}
      </p>
      <p>
        {'Usted acepta informarnos inmediatamente sobre cualquier uso no autorizado de su cuenta o su contraseña. Usted es el único y exclusivo responsable de la seguridad de su computadora y de toda la actividad en su cuenta, incluso en el caso de que dicha actividad no la realice usted. No seremos responsables de ninguna pérdida o daño derivado del uso no autorizado de su cuenta o contraseña. No supervisamos el asunto y tampoco podemos asegurarle que estaremos al tanto de cualquier uso indebido de la cuenta, del Sitio o de los Servicios o que podremos prevenir el abuso como se mencionó anteriormente.'}
      </p>
      <p>
        {'Usted acepta que podemos, por cualquier motivo y a nuestra absoluta discreción, sin notificarle, cerrar su cuenta y eliminar cualquier contenido relacionado con ella. Las razones de dicho cierre pueden ser: (a) Un largo período de inactividad; (b) Incumplimiento de las presentes Condiciones de Uso o de su espíritu; (c) Comportamiento que constituya fraude o que sea perjudicial o agravante; o (d) Comportamiento que sea perjudicial para otros usuarios, terceros, el espíritu de nuestra comunidad o nuestros asuntos comerciales.'}
      </p>
      <p>
        {'Si consideramos, a nuestro exclusivo criterio, que ha habido un incumplimiento de estas Condiciones de Uso o que ha habido un comportamiento ilegal o inadecuado, podremos tomar las medidas que consideremos oportunas. Nos reservamos el derecho de investigar cualquier sospecha de incumplimiento de estas Condiciones de Uso o de comportamiento ilegal o inapropiado en el Sitio o con nuestros Servicios. Cooperaremos con cualquier investigación realizada por los organismos encargados de hacer cumplir la ley o cualquier orden judicial que nos exija o nos ordene revelar la identidad, el comportamiento o el contenido de cualquier usuario sobre el cual exista sospecha de que ha realizado actos que parecen ser contrarios a la ley. Tiene derecho a exigir el cierre de su cuenta en cualquier momento y por cualquier motivo enviando un mensaje a la siguiente dirección: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
        {'.'}
      </p>
      <p>
        {'Cualquier cierre o suspensión de su cuenta no afectará sus obligaciones con nosotros según estas Condiciones de Uso (incluidas, entre otras, la propiedad, la indemnización y todas sus representaciones y compromisos con nosotros y las limitaciones de responsabilidad), cuya naturaleza y circunstancias pueden continuar. existir después del cierre o suspensión antes mencionados.'}
      </p>

      <Typography className={classes.subSectionTitle}>3. Pagos</Typography>
      <p>
        {'Los servicios se brindan mediante la compra de una suscripción y una membresía para el hogar virtual. El pago se realizará mediante tarjetas de crédito, débito directo o cualquier otro método de pago que esté publicado como válido. Se acuerda que nos reservamos el derecho de cambiar los precios del servicio en cualquier momento sin previo aviso y de modificar los métodos de pago a nuestro exclusivo criterio. Se deben respetar los términos de cada método de pago utilizado. Nos reservamos el derecho de cancelar cualquier servicio pagado o membresía si el pago completo no se recibe a tiempo. Usted es el único responsable de garantizar el pago de nuestros servicios.'}
      </p>

      <Typography className={classes.subSectionTitle}>4. Enlaces</Typography>
      <p>
        {'Pueden aparecer enlaces en el Sitio a sitios de Internet que no son operados por nosotros. Dichos enlaces se muestran únicamente para comodidad del Usuario y no tenemos ningún control sobre estos sitios ni tenemos ninguna responsabilidad por el contenido que aparece en ellos. La presencia de enlaces en nuestro sitio no significa que admitamos el contenido que se muestra en estos sitios o cualquier otro enlace a estos sitios o sus operadores. Le recomendamos que ejerza discreción y cuidado en el uso de sitios pertenecientes a terceros. Tenemos el derecho, a nuestra exclusiva discreción, de eliminar todos los enlaces del Sitio y/o agregar enlaces adicionales. Además, no somos responsables de los resultados de compartir el contenido que seleccione utilizando las redes sociales.'}
      </p>

      <Typography className={classes.subSectionTitle}>5. Restricciones</Typography>
      <p>
        {'Además de todo lo aquí expresamente determinado, usted se compromete a abstenerse de permitir que cualquier tercero realice las siguientes actividades: (a) Ingeniería inversa, desmontaje o cualquier intento de revelar el código fuente del programa que se encuentra en la base del Sitio o los Servicios; (b) Cualquier cambio del Sitio, su manipulación, copia o creación de creaciones derivadas del mismo, así como distribución, alquiler, radiodifusión, exhibición pública, publicidad, transmisión, intercambio, transferencia o cualquier otro uso que no esté de acuerdo con estos Condiciones de Uso; (c) Activación o posibilidad de activar cualquier aplicación informática, robot, programa de software espía o cualquier otro dispositivo, incluido software como robots, rastreadores, etc., para buscar, escanear, copiar o duplicar automáticamente funciones del Sitio. También está prohibido crear o utilizar los dispositivos antes mencionados para crear una colección, almacén o base de datos que contenga contenido del Sitio o su código; (d) Intentar detener o eludir cualquier mecanismo de seguridad del Sitio; (e) Intentar obtener una contraseña o datos personales de un usuario registrado o utilizar falsamente los mismos; (f) Fingir ser otro usuario o tergiversar, incluido el uso de múltiples cuentas de usuario; (g) Violación de los derechos de privacidad y derechos legales de terceros, incluida la calumnia, la injuria, la intimidación, el acoso o la vigilancia de otros usuarios, incluso mediante la distribución de mensajes o mensajes múltiples, o; (h) Violación de derechos de autor, derechos de privacidad o derechos morales de cualquier tercero; (i) Solicitud de otros usuarios; (j) Uso de servicios con fines comerciales, incluida la venta de productos o servicios; (k) Uso del Sitio con fines propagandísticos o en apoyo de conductas prohibidas.'}
      </p>
      <p>
        {'En caso de que cargue o proporcione información o imágenes (en adelante: “'}<b>Contenido del usuario</b>{'”) utilizando los Servicios, declara que el Contenido del usuario es preciso y no induce a error y: (a) No infringe los derechos de autor ni los derechos de privacidad, derechos publicitarios o derechos éticos de cualquier tercero; (b) No incluye ningún contenido de naturaleza calumniosa, ni injuriosa, ofensiva, sexual o insultante (incluido contenido que fomente o elogie el odio, la violencia o la envidia); (c) No contiene gusanos informáticos, virus u otros programas fraudulentos o; (d) No infringe ninguna ley o reglamento, incluida cualquier ley o reglamento relacionado con publicidad o marketing. Al cargar cualquier contenido de servicio usted otorga a la Asociación y sus entidades asociadas y a quienes reciben licencias de ella, una licencia mundial, que no es exclusiva, irrestricta, permanente y gratuita, para publicitar, operar, presentar y distribuir dicho contenido en cualquier forma alguna, como parte del servicio o con el fin de promover la Asociación y los Servicios siempre que se respete su privacidad. Nos reservamos el derecho de eliminar, suspender el acceso o eliminar permanentemente cualquier contenido, sin previo aviso, incluido, entre otros, el contenido que viole los compromisos explícitos anteriores (según nuestra opinión razonable) o nuestros intereses comerciales. Estas decisiones se tomarán de acuerdo con nuestro exclusivo criterio y usted no considerará hacer ningún reclamo con respecto a dichas decisiones nuestras. Cualquier confianza en el contenido de otros usuarios será su responsabilidad exclusiva y la Asociación no es responsable de la exactitud, integridad o aplicabilidad de la información o el Contenido del usuario transmitido a través de terceros en el marco de los Servicios. La Asociación no será responsable de ningún daño que se le cause debido a la confianza en información que no proviene directamente de la Asociación.'}
      </p>

      <Typography className={classes.subSectionTitle}>6. Propiedad Intelectual</Typography>
      <p>
        {'El sitio completo y la información que contiene, incluido su contenido (y sin perjuicio de la generalidad de lo anterior, incluido su diseño, aplicaciones de software, los nombres y marcas comerciales y cualquier otro detalle que aparezca en él o se incorpore a él), e incluso los contenidos recibidos de conferenciantes, terceros y/o usuarios como se mencionó anteriormente, son propiedad exclusiva de la Asociación o de terceros que permitieron a la Asociación usarlos y están protegidos por las leyes, incluidas las leyes del Estado de Israel, tratados internacionales y las leyes de países extranjeros. Aparte de lo que se permite explícitamente en este documento, no puede copiar, desarrollar, reproducir, distribuir, transmitir, republicar, cambiar, descargar, cargar, transmitir, ni hacer otro uso del contenido que aparece en el Sitio. No se le permite eliminar, cambiar u ocultar ningún símbolo de derechos de autor, marca comercial o símbolo de servicio ni ningún otro símbolo que indique los derechos de propiedad incluidos en el Sitio o los servicios. Todas las marcas comerciales son marcas comerciales o símbolos comerciales registrados de sus propietarios. No hay nada en estas Condiciones de Uso que le otorgue algún derecho a utilizar la marca comercial, la marca de servicio, nuestro símbolo comercial o nombre comercial o de cualquier tercero. Puede descargar el contenido disponible para su descarga en el marco de los Servicios, pero puede utilizar este contenido únicamente para uso personal. Está prohibido transferir, duplicar, distribuir, exhibir, vender y/o hacer cualquier uso comercial del contenido o del contenido de otros usuarios a terceros sin recibir el consentimiento previo por escrito de la Asociación.'}
      </p>

      <Typography className={classes.subSectionTitle}>7. Privacidad</Typography>
      <p>
        {'Recopilamos información que usted proporciona al momento de registrarse en el Sitio y/o al momento de utilizar el Sitio o los Servicios, incluida información que puede identificarlo personalmente o definir sus áreas de interés (en adelante: la "'}<b>Información</b>{'"). Entre otras cosas, podemos grabar clips de audio y vídeo, todo ello sujeto a su consentimiento. Tenemos derecho a utilizar la Información de la manera que se describe en nuestra Política de Privacidad, modificada periódicamente. La Política de Privacidad es parte integral de estas Condiciones de Uso. El uso del Sitio también constituye su aceptación de la Política de Privacidad.'}
      </p>

      <Typography className={classes.subSectionTitle}>8. Responsabilidad limitada</Typography>
      <p>
        {'Su uso del Sitio y/o los Servicios se realiza según su exclusivo criterio y es su responsabilidad. No aceptamos ninguna responsabilidad por ningún contenido que se reciba de terceros, a menos que se indique explícitamente en estas Condiciones de Uso. El Sitio completo, incluida toda la información que aparece en él y el programa que lo sustenta, incluidos todos los Servicios, se ofrecen al Usuario "tal cual" y sujeto a disponibilidad ("según esté disponible") sin garantía alguna. Rechazamos explícitamente cualquier responsabilidad, incluida, entre otras, la responsabilidad explícita o implícita por la usabilidad, la responsabilidad explícita o implícita por la comerciabilidad, la compatibilidad con un objetivo específico, la propiedad o la no infracción. Cualquier confiabilidad en el Sitio, sus Servicios o contenido, es su exclusiva responsabilidad y rechazamos cualquier responsabilidad, explícita o implícita, (a) Respecto a la exactitud, autenticidad, cumplimiento de plazos, seguridad o desempeño del Sitio, los Servicios o el contenido, o; (b) Que el Sitio, los Servicios y/o el contenido no tendrán  errores o que los errores, en caso de existir, serán corregidos, o; (c) Con respecto a la exactitud, calidad, actualidad, integridad o usabilidad de toda la información o contenido presentado en el Sitio o los Servicios.'}
      </p>
      <p>
        {'Muchas fuentes de contenido aparecen en el Sitio y/o en los Servicios. Intentamos asegurarnos de que el contenido sea lo más preciso posible. Al mismo tiempo, la Asociación no es responsable respecto del contenido que tenga su origen en terceros y la Asociación no garantiza el nivel de exactitud de dicho contenido. No prometemos que el contenido del Sitio y/o los Servicios sea preciso, completo, confiable, actual o sin errores. No somos responsables de ningún contenido que sea inexacto o erróneo. Aclaramos que la información que se presenta en el Sitio no constituye una recomendación, opinión, consejo y/o propuesta nuestra para comprar cualquier producto o brindar servicio, y cualquier confianza en la información mostrada en el Sitio es responsabilidad exclusiva del Usuario y la Asociación no será responsable como resultado de la confianza del Usuario en la información y/o por el grado de compatibilidad de la información con el uso del Usuario y/o sus requisitos. Cualquier consejo o información, dado verbalmente o por escrito, recibido de la Asociación, no establecerá ninguna responsabilidad para la Asociación, que no sea la expresamente establecida por escrito en estas Condiciones. Si confía en algún consejo y/o información mencionados, dicha confianza es su responsabilidad exclusiva. Hay países en los que está prohibido excluir distintos tipos de responsabilidad. En consecuencia, es posible que algunas de las exclusiones anteriores no se apliquen a usted.'}
      </p>
      <p>
        {'No aceptamos ninguna responsabilidad por cualquier error, omisión, intervalo, eliminación, falla, retraso en la actividad o transmisión, falla de cualquier línea de comunicación, robo o destrucción o acceso no autorizado o cambio de cualquier contenido. La Asociación no se hace responsable de ningún problema o fallo técnico de cualquier red o línea telefónica y/o de Internet, sistemas informáticos en línea, servidores o proveedores, equipos informáticos, software, fallo de cualquier correo electrónico derivado de problemas técnicos o sobrecarga de tráfico en Internet, o de nuestro sitio y servicios, incluyendo cualquier lesión o daño a los usuarios o cualquier computadora de cualquier individuo conectado o derivado de la participación o descarga de materiales del Sitio o en conexión con el mismo y/o en conexión con los Servicios. Bajo ninguna circunstancia la Asociación será responsable de ninguna pérdida o daño, incluidas lesiones personales o muerte, que resulten del uso del Sitio y/o los servicios, de cualquier contenido publicitado o del comportamiento de cualquier usuario del Sitio y/o del Servicios, ya sean en línea o de otro modo.'}
      </p>
      <p>
        {'La Asociación, sus directores, funcionarios, empleados, emisarios o accionistas bajo ninguna circunstancia serán responsables ante usted o ante cualquier tercero por cualquier daño o compensación, incluyendo, sin limitación, cualquier daño o compensación generales, incidentales, consecuentes, indirectos, directos o punitivos, derivados del uso del Sitio y sus Servicios o relacionados con ellos. La responsabilidad total de la Asociación en el marco de cada condición de estas Condiciones de Uso no excederá la suma que usted pagó a la Asociación por utilizar el Sitio. En consecuencia, si no ha pagado nada a la Asociación para utilizar el Sitio, la Asociación no tendrá ninguna responsabilidad ante usted con respecto al uso antes mencionado. La Asociación no es responsable de las conexiones hacia o desde Internet. La Asociación no es responsable de líneas o sistemas telefónicos ni de sistemas o servidores informáticos. Bajo ninguna circunstancia la Asociación será responsable de pérdidas o daños que resulten del uso del Sitio o de los Servicios, o de cualquier contenido cargado en el Sitio o los Servicios, o de cualquier comportamiento de cualquier tercero, ya sea en línea o no.'}
      </p>

      <Typography className={classes.subSectionTitle}>9. Indemnización</Typography>
      <p>
        {'Usted se compromete a indemnizar a la Asociación y a sus empleados, directores, funcionarios, contratistas y agentes, contra cualquier reclamo, acción, compensación, costo o gasto (incluidos honorarios y costas legales) que derive, directa o indirectamente: (a) De un incumplimiento de estas Condiciones suyas o de cualquier persona que utilice su computadora o su contraseña; (b) Contra cualquier acción, pérdida o daño que surja de su uso, su intento de uso del Sitio y/o de los Servicios (o la falta de capacidad para usar el Sitio y/o los Servicios), incluida cualquier transacción que usted maneje en el Sitio; y (c) Cualquier incumplimiento de la ley o de las regulaciones cometido por usted. Usted acepta que cada uso que haga del Sitio y/o de los Servicios se realizará de acuerdo con la ley.'}
      </p>

      <Typography className={classes.subSectionTitle}>10. Período</Typography>
      <p>
        {'El período del acuerdo comenzará en la fecha en que reciba estas Condiciones de Uso y continuará sin límite de tiempo, a menos que se rescinda de acuerdo con estas Condiciones de Uso. Cada parte puede rescindir estas Condiciones de Uso enviando un mensaje por escrito (incluso por correo electrónico). Incluso cuando las Condiciones de Uso hayan sido rescindidas, las Secciones 2-11 seguirán vigentes después de la rescisión por cualquier motivo.'}
      </p>

      <Typography className={classes.subSectionTitle}>11. Directivas varias</Typography>
      <p>
        {'Si necesitamos comunicarnos con usted, usted acepta que podemos hacerlo electrónicamente, incluido, entre otros, a través de correo electrónico. Podemos enviarle avisos a su dirección de correo electrónico, su número de fax o por correo postal de acuerdo con los detalles que proporcionó cuando se registró para comunicarnos con usted. Los mensajes enviados por correo electrónico se considerarán recibidos cuando sean enviados por nuestra parte. Los mensajes enviados por fax se considerarán recibidos cuando recibamos la confirmación de recepción mencionada. Los mensajes enviados por correo ordinario se considerarán recibidos 10 días después de la fecha de envío. Estas Condiciones de Uso representan el acuerdo total entre las partes con respecto a los asuntos que abordan y reemplazan cualquier acuerdo entre las partes con respecto a los asuntos antes mencionados. No hay nada en este acuerdo que implique la creación de ninguna agencia, transacción, empresa conjunta o sociedad entre usted y la Asociación o que lo califique para operar en nombre de la Asociación. La Asociación tiene el derecho de ceder, transferir o endosar sus derechos y responsabilidades de acuerdo con estas Condiciones de Uso, o cualquier parte de las mismas, a cualquier tercero que considere adecuado. Usted no tiene derecho a ceder, transferir o endosar sus derechos y responsabilidades, o cualquier parte de los mismos, de acuerdo con estas Condiciones de Uso, y cualquier intento de endosarlos será nulo y sin efecto. En caso de que se determine que alguna condición de estas Condiciones de Uso no es válida o no es ejecutable por un tribunal competente, las condiciones cuya validez haya sido invalidada o que no sean ejecutables, se considerarán reemplazadas por condiciones válidas que sean ejecutables y cuyo contenido coincida lo más posible con la sustancia y la intención de las condiciones originales, mientras que las condiciones restantes seguirán siendo válidas. Toda actividad en el Sitio y todo lo relacionado y sujeto al mismo, incluidas las Condiciones de Uso, estarán sujetas únicamente a la ley israelí y a la jurisdicción exclusiva para cualquier disputa relacionada con el Sitio y el uso del mismo y las Condiciones de Uso recaerán en los tribunales de justicia autorizados en el distrito de Tel-Aviv/Jaffa de Israel.'}
      </p>

      <Typography className={classes.sectionTitle}>Política de privacidad</Typography>
      <p>
        {'Bnei Baruch - Asociación Kabbalah L’Am (en adelante: la “'}<b>Asociación</b>{'”, o “'}<b>nosotros</b>{'") respeta su derecho a la privacidad. Queremos hacer posible que usted tome decisiones informadas con respecto al uso de su información.'}
      </p>
      <p>
        {'El objetivo de esta Política de Privacidad es explicar cómo actúa la Asociación con respecto a la información que se recopila utilizando los diferentes sitios web de su propiedad, incluido el que usted está viendo actualmente e incluyendo, entre otros, los siguientes sitios:'}
      </p>
      <ul>
        <li><a href="https://kli.one/" target="_blank" rel="noopener noreferrer">https://kli.one/</a></li>
        <li><a href="https://arvut.kli.one/" target="_blank" rel="noopener noreferrer">https://arvut.kli.one/</a></li>
        <li><a href="http://www.kab.co.il/" target="_blank" rel="noopener noreferrer">https://www.kab.co.il/</a></li>
        <li><a href="https://kabbalahmedia.info/" target="_blank" rel="noopener noreferrer">https://kabbalahmedia.info/</a></li>
        <li><a href="https://www.kab.co.il/books" target="_blank" rel="noopener noreferrer">https://www.kab.co.il/books</a></li>
        <li><a href="https://kabbalahgroup.info/internet/" target="_blank" rel="noopener noreferrer">https://kabbalahgroup.info/internet/</a></li>
        <li><a href="https://www.kab.info/" target="_blank" rel="noopener noreferrer">https://www.kab.info/</a></li>
        <li><a href="https://www.kabbalah.info/" target="_blank" rel="noopener noreferrer">https://www.kabbalah.info/</a></li>
        <li><a href="http://www.kab.co.il/" target="_blank" rel="noopener noreferrer">https://www.kab.co.il/</a></li>
        <li><a href="http://kab1.com/" target="_blank" rel="noopener noreferrer">https://kab1.com/</a></li>
        <li><a href="http://kab.tv/" target="_blank" rel="noopener noreferrer">https://kab.tv/</a></li>
        <li><a href="https://u.kab.co.il/" target="_blank" rel="noopener noreferrer">https://u.kab.co.il/</a></li>
        <li><a href="https://laitman.co.il/" target="_blank" rel="noopener noreferrer">https://laitman.co.il/</a></li>
        <li><a href="https://www.michaellaitman.com/" target="_blank" rel="noopener noreferrer">https://www.michaellaitman.com/</a></li>
      </ul>
      <p>
        {'O a través de otros servicios que preste la Asociación (en adelante, conjuntamente: los “'}<b>Servicios</b>{'”) y cómo la Asociación recopila, utiliza, entrega y protege la información que recibe de sus usuarios.'}
      </p>
      <p className={classes.genderNote}>
        {'La Política de Privacidad está redactada en masculino [en hebreo] únicamente por motivos de comodidad, pero se refiere por igual a mujeres y hombres. Los términos utilizados en este documento, que no hayan sido específicamente definidos en su marco, serán interpretados según las definiciones que para ello se proporcionan en las Condiciones de Uso.'}
      </p>

      <Typography className={classes.subSectionTitle}>La información que recopilamos</Typography>
      <p>
        {'“Información personal” o “información” es información que puede asociarse con un individuo o entidad, como un nombre, número de teléfono o dirección de correo electrónico. Algunos de los servicios que brindamos, incluida la participación en conferencias y/o la inscripción a eventos específicos, deben registrarse. En el marco del registro para nuestros servicios u otros eventos, se le solicitará que nos proporcione información, incluyendo nombre, dirección de correo electrónico, número de celular, sexo, edad, fecha de nacimiento, estado civil, cargo en la Asociación, marco educativo y dirección residencial. No tiene ninguna obligación legal de proporcionar esta información, y el suministro de la información depende únicamente de sus deseos y es con su consentimiento. Sin embargo, si no acepta proporcionar esta información, total o parcialmente, es posible que algunos de los servicios que brindamos no estén disponibles para usted y/o que no pueda utilizar ciertos servicios. Además, grabamos todas las actividades y conferencias en el sitio y a los participantes en esas conferencias, tanto en video como en audio (“'}<b>grabaciones</b>{'”). Además, podemos conservar otros detalles de su uso de nuestros servicios, como la publicidad que leyó en el sitio, las páginas que visitó o aquellas ofertas y servicios que le interesaron. Hay información específica que podemos recopilar de manera automatizada con respecto a su computadora, navegador, sistema operativo, dirección IP y/o dispositivo celular, así como su ubicación geográfica.'}
      </p>

      <Typography className={classes.subSectionTitle}>Cómo protegemos su información</Typography>
      <p>
        {'Tomamos medidas reconocidas por la industria para proteger la información que se nos proporciona, tanto en el momento en que se proporciona como después de recibirla. Sin embargo, no existen métodos de transferencia o almacenamiento electrónico que sean totalmente infalibles. Por lo tanto, aunque intentamos tomar las medidas aceptadas para proteger su información, no podemos garantizar la seguridad absoluta de la información.'}
      </p>
      <p>
        {'Eliminaremos toda la información personal que hayamos recibido de un usuario después de recibir una solicitud por escrito de dicho usuario. No podemos replicar datos que han sido eliminados.'}
      </p>

      <Typography className={classes.subSectionTitle}>Cómo utilizamos la información</Typography>
      <p>
        {'No compartiremos su información con otras entidades sin su consentimiento expreso, excepto en las formas que se mencionan aquí específicamente, y a menos que así lo exija una ley, un reglamento o una orden judicial o para cooperar con una investigación realizada por las autoridades.'}
      </p>
      <p>
        {'Usamos la información que usted nos brinda para brindarle nuestros servicios, como enviarle información sobre ofertas especiales y eventos a través de mensajes de texto y correos electrónicos.'}
      </p>
      <p>
        {'Utilizamos la información que usted nos proporciona para poder brindarle nuestros servicios.'}
      </p>
      <p>
        {'Podemos utilizar su información para nuestros propios fines internos, como identificar problemas con nuestros servidores o para cambiar nuestros servicios para más usos o adaptarlos a sus requisitos.'}
      </p>
      <p>
        {'Podemos transmitir su información a:'}
      </p>
      <ul>
        <li>
          {'Empresas asociadas con nosotros, o a proveedores y/o subcontratistas como proveedores que recopilan, procesan y/o almacenan información para nosotros. Exigiremos que estas empresas, los proveedores y/o los subcontratistas actúen de acuerdo con nuestras normas de protección de la privacidad.'}
        </li>
        <li>
          {'Socios comerciales con quienes es probable que ofrezcamos productos o servicios de manera conjunta, o cuyos productos o servicios se ofrecen en nuestro sitio. Podrás saber cuándo un tercero está vinculado a una oferta de un producto o servicio cuando su nombre aparezca en la propuesta, solo o junto con nuestro nombre. Si elige utilizar estos productos o servicios, podemos compartir información sobre usted, incluida su información personal, con esos socios. Tenga en cuenta que no controlamos las regulaciones de privacidad de estos socios comerciales nuestros. Si ya no está dispuesto a permitir que un tercero utilice su información, comuníquese con dicho tercero.'}
        </li>
        <li>
          {'Referencia a otros sitios de Internet: si fue remitido a este sitio desde otro sitio (por ejemplo, a través de un enlace), podemos compartir cierta información sobre usted con el sitio de referencia. Le recomendamos que lea la Política de Privacidad de cada sitio que lo remita a nuestro sitio. Además, cuando accede al sitio de nuestros socios a través de un enlace desde nuestro sitio, le proporcionamos al socio un identificador único, para que sepa que usted ha sido remitido a él desde nuestro sitio. Este identificador único no contendrá su información personal.'}
        </li>
      </ul>
      <p>
        {'Además, puede ser que al analizar toda la información que recopilamos o recibimos, incluida la información relacionada con los usuarios, creemos información estadística sobre una amplia variedad de usuarios (en adelante: “Información estadística”). La información estadística nos ayuda a comprender las tendencias y los requisitos de los usuarios para permitirnos considerar nuevos servicios y productos y para que podamos ajustar los servicios y productos existentes a las necesidades de los usuarios. La información estadística es anónima y no la conectamos con información personal. Puede ser que transmitamos Información Estadística a nuestros socios, sin restricciones, según las condiciones comerciales determinadas.'}
      </p>
      <p>
        {'Podemos analizar la Información Estadística utilizando programas que brindan servicios de información y análisis estadístico, incluido, entre otros, Google Analytics ("Herramientas Analíticas"). La información recogida tiene fines analíticos, de investigación y de control. Podemos transferir la Información Estadística a nuestros clientes y socios comerciales (como se detalla a continuación). Además, utilizamos la información que recibimos mediante las herramientas analíticas para mejorar el sistema. La información que Google Analytics recopila a raíz de su uso del sistema está sujeta a las Condiciones de Uso y la Política de Privacidad de Google Analytics, como se establece a continuación:'}
      </p>
      <p>
        {'http://www.google.com/analytics/terms/us.html, http://www.google.com/policies/privacy/.'}
      </p>

      <Typography className={classes.subSectionTitle}>Grabaciones y contenido</Typography>
      <p>
        {'Como se ha indicado, su actividad en el marco de estos servicios se registra de acuerdo a su consentimiento. Además, puede cargar contenido del usuario a los servidores, incluidas imágenes, archivos y más. Puede que utilicemos estas grabaciones y contenido con fines comerciales y de marketing a nuestra discreción. Por la presente otorga su consentimiento para el uso de las grabaciones y el contenido sin contraprestación alguna. Usted otorga a la Asociación, de manera exclusiva e irrevocable, sin contraprestación y sin límite de tiempo, todos los derechos otorgados respecto a su participación en los servicios incluyendo la grabación y contenido de los usuarios y documentación de participación, fotografía y transmisión, incluyendo cualquier derechos de autor y derechos de los artistas intérpretes o ejecutantes, derechos morales y/o compensación. No emprenderá ninguna acción ni reclamo contra la Asociación en relación con el uso de las diversas grabaciones y contenidos, incluidos detalles, imágenes, videoclips y más, que haya entregado y/o subido utilizando los servicios.'}
      </p>

      <Typography className={classes.subSectionTitle}>Cookies</Typography>
      <p>
        {'Una cookie es una breve sección de texto que se envía al navegador del visitante del sitio. Al volver a visitar el sitio, el navegador envía esta sección a la computadora del visitante original. Utilizamos cookies para adaptar su experiencia de usuario a sus requisitos. Es posible que utilicemos una cookie “permanente” para guardar sus definiciones y ajustes personales. Además, si accede al sitio, la cookie servirá para identificarle como usuario válido, de modo que no tendrá que introducir sus datos desde cero cada vez que utilice el sitio. La mayoría de los navegadores de Internet están predefinidos de una manera que facilita la recepción de cookies, pero usted puede cambiar esta definición para que su navegador bloquee todas las cookies o para asegurarse de que le informe cada vez que se ha enviado la cookie. Del mismo modo, puede eliminar todas las cookies existentes en cualquier momento. Sin embargo, puede ser que algunas de las características de los servidores y/o del sitio no funcionen como deberían si cancela o elimina las cookies.'}
      </p>
      <p>
        {'Puede ser que mostremos enlaces a sitios de Internet de terceros. Cualquier información personal que usted proporcione a un tercero es información que se proporciona directamente al tercero y está sujeta a la Política de Privacidad de ese tercero. Aparte de lo descrito anteriormente, no seremos responsables del contenido o los procedimientos de privacidad de los terceros antes mencionados. Los enlaces de nuestro sitio se presentan para su comodidad. Le recomendamos que conozca los procedimientos de privacidad de cada entidad antes de proporcionarnos cualquier información, incluida la información personal. No podemos hacernos responsables del uso de su información por parte de terceras entidades.'}
      </p>

      <Typography className={classes.subSectionTitle}>Uso de servicios por parte de niños</Typography>
      <p>
        {'La Asociación no recopila información de niños menores de 18 años. En el caso de que se compruebe que un niño menor de 18 años se ha registrado sin el consentimiento de sus padres o tutor, por favor infórmenos inmediatamente.'}
      </p>

      <Typography className={classes.subSectionTitle}>Otros usos y transferencia de información</Typography>
      <p>
        {'Cooperaremos con las fuerzas del orden o cualquier orden judicial que nos exija o nos ordene revelar la identidad, el comportamiento o el contenido digital de cualquier usuario sobre el cual exista sospecha de que hizo cosas ilegales o realizó acciones que violan la ley. Puede que usemos los servicios de subcontratistas ubicados en países que no son su país de residencia y enviarles la información que recibimos. Por ejemplo, podemos enviar su información a países fuera de Israel. Todos los subcontratistas estarán sujetos a las obligaciones de confidencialidad y no utilización. A pesar de eso, puede ser que en algunos países existan niveles de protección de información personal u otra información que no sean los mismos que el nivel de protección en su país. Podemos transferir nuestras bases de datos que incluyen su información si vendemos nuestro negocio o parte del mismo, incluida la transferencia fuera de Israel.'}
      </p>

      <Typography className={classes.subSectionTitle}>Revisión, corrección o actualización de su información</Typography>
      <p>
        {'Le permitimos examinar la información que ha proporcionado durante el registro y cambiar datos, inexactitudes o errores en la información. Para solicitar examinar la información o corregir y actualizar su información personal, contáctenos a esta dirección: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
        {'.'}
      </p>
      <p>
        {'Conservaremos su información mientras su cuenta esté activa o según sea necesario para brindarle servicios. Si desea cerrar su cuenta o solicitar que no utilicemos su información para brindarle servicios, contáctenos a la dirección de correo electrónico que se muestra arriba. Conservaremos su información y la usaremos según sea necesario para que podamos cumplir con nuestros compromisos legales, resolver disputas y hacer cumplir nuestros acuerdos.'}
      </p>

      <Typography className={classes.subSectionTitle}>Comunicaciones y mensajes</Typography>
      <p>
        {'Podemos enviarle mensajes por correo electrónico y SMS u otros mensajes sobre nosotros o sobre nuestros productos y servicios. Al aceptar nuestras Condiciones de Uso (incluidas las condiciones de esta Política de Privacidad) o de uso del sitio y/o servicios, usted acepta estos mensajes comerciales. Puede eliminar sus datos personales de nuestra lista de distribución y dejar de recibir mensajes nuestros en el futuro, haciendo clic en el enlace para cancelar que aparece en cada mensaje, o enviando un correo electrónico a esta dirección: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
        {'.'}
      </p>
      <p>
        {'Tenga en cuenta que nos reservamos el derecho de enviarle mensajes relacionados con servicios, incluidos mensajes de servicio y mensajes administrativos relacionados con su cuenta, sin ofrecerle la posibilidad de cancelar su recepción, a menos que cierre su cuenta.'}
      </p>

      <Typography className={classes.subSectionTitle}>Cambios en la política de privacidad</Typography>
      <p>
        {'Nuestra Política de Privacidad puede cambiar de vez en cuando. En caso de que se realicen cambios en nuestra Política de Privacidad con el objeto de reducir sus derechos o un uso diferente de la información que proporcionó, se informará de ello en el sitio.'}
      </p>

      <Typography className={classes.subSectionTitle}>Contáctenos</Typography>
      <p>
        {'Para cualquier pregunta o problema relacionado con nuestra Política de Privacidad, comuníquese con: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
        {'.'}
      </p>

      <p className={classes.updatedDate}>Última actualización: 11 de noviembre de 2024</p>
    </div>
  )
}

export default TermsEs
