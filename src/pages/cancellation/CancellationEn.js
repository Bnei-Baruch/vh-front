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

function CancellationEn() {
  const classes = useStyles()

  const columns = [
    'Product',
    'Payment Options',
    'Standing Order Cancellation',
    'One-Time Payment Cancellation',
  ]

  const standingOrderCancel = (
    <span>
      {'To cancel, an email must be sent to '}
      <a href="mailto:help@kli.one">help@kli.one</a>
      {'. The cancellation will take effect within 3 business days, and no further charges will be made thereafter.'}
    </span>
  )

  const proRata = 'A credit will be given for the relative portion of the unused period.'

  const payKliOneRows = [
    [
      'Maintenance Fees',
      '1. Credit card standing order - The first charge at the time of the transaction, and thereafter on the 15th of each month. 2. One-time payment.',
      standingOrderCancel,
      proRata,
    ],
    [
      '"Student Community" and "The Point in the Heart" Students',
      '1. Credit card standing order - The first charge at the time of the transaction, and thereafter on the 15th of each month. 2. One-time payment.',
      standingOrderCancel,
      proRata,
    ],
    [
      'Gym',
      'Credit card standing order - The first charge at the time of the transaction, and thereafter on the 15th of each month.',
      standingOrderCancel,
      proRata,
    ],
    [
      '"Kabbalah La\'am" College - Courses',
      '1. One-time credit card payment or up to 6 equal installments. 2. Bank transfer.',
      '–',
      'Can be canceled with a full refund up to and including the date of the second lesson. After the third lesson, a refund of 75% of the full course cost. After the fourth lesson, a refund of 60%. From the fifth lesson onwards, no refund will be given. It is clarified that under the law, after the course begins, the participant has no right of cancellation. The refunds detailed above are granted voluntarily by the Association, beyond what is required by law.',
    ],
    [
      'Meals',
      'One-time payment.',
      '–',
      'Registration for a meal constitutes a commitment to participate. A full refund will be received until the end of the early registration period, as will be specified on the purchase page of the meal. After this date, no refund will be given.',
    ],
    [
      'Events and Conventions',
      'One-time payment.',
      '–',
      'Registration for an event constitutes a commitment to participate. A full refund will be received until the end of the early registration period, as will be specified on the purchase page of the event. After this date, no refund will be given.',
    ],
    [
      'Donations',
      '1. Credit card standing order - The first charge at the time of the transaction, and thereafter on the 15th of each month. 2. One-time payment. 3. Bank transfer.',
      standingOrderCancel,
      'A one-time donation can be canceled within 14 days from the date it was made.',
    ],
  ]

  const kliOneStandingCancel = (
    <span>
      {'Cancellation can be done through account management on the website or by email to '}
      <a href="mailto:help@kli.one">help@kli.one</a>
      {'. The cancellation will take effect within 3 business days, and no further charges will be made thereafter.'}
    </span>
  )

  const kliOneRows = [
    [
      'Tuition',
      '1. One-time monthly payment. 2. Credit card standing order - The first charge at the time of the transaction, and thereafter on the 20th of each month.',
      kliOneStandingCancel,
      proRata,
    ],
  ]

  return (
    <div className={classes.contentRoot}>
      <Typography variant="h1" className={classes.pageTitle}>
        Website Regulations and Cancellation Policy
      </Typography>
      <p className={classes.orgName}>
        "Bnei Baruch - Kabbalah La'am" Association - R.A. 580292753
      </p>
      <p className={classes.genderNote}>
        This document is written in the masculine gender for convenience purposes only and applies
        equally to both women and men.
      </p>
      <p className={classes.updatedDate}>Last update: June 2026</p>

      <Typography className={classes.sectionTitle}>1. Association Details</Typography>
      <p>
        {'"Bnei Baruch - Kabbalah La\'am" Association R.A., Association Number: 580292753, Address: 12 HaRabash St., Petah Tikva, Zip Code 4934829, Email: '}
        <a href="mailto:info@kab.co.il">info@kab.co.il</a>
        {', Email for cancellation requests and customer service: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
      </p>

      <Typography className={classes.sectionTitle}>2. General</Typography>
      <p>
        These regulations govern the use of the website and the services provided by the
        Association. Entering the website and using the services constitute full agreement to the
        terms of these regulations, the privacy policy, and the Association's terms of use.
      </p>

      <Typography className={classes.sectionTitle}>3. Services and Products</Typography>

      <Typography className={classes.subSectionTitle}>3.1 Free Content</Typography>
      <p>
        The Kabbalah content offered on the website, including lessons, lectures, and study
        materials, is available for viewing and use free of charge, for personal use only.
      </p>

      <Typography className={classes.subSectionTitle}>3.2 Paid Products and Services</Typography>
      <p>The Association offers the following items for purchase:</p>
      <ul>
        <li>Maintenance fees</li>
        <li>Student community</li>
        <li>Gym</li>
        <li>College</li>
        <li>Meals</li>
        <li>Events and conventions</li>
        <li>Donations</li>
        <li>Tuition</li>
      </ul>
      <p>
        The details of each product or service, including the price, date of the event, and terms
        of participation, will be specified on the relevant purchase page on the website.
      </p>

      <Typography className={classes.sectionTitle}>4. Payment</Typography>

      <Typography className={classes.subSectionTitle}>4.1 Accepted Payment Methods</Typography>
      <p>The Association accepts payment through the following methods:</p>
      <ul>
        <li>Credit cards (Visa, Mastercard, Isracard, American Express)</li>
        <li>Apple Pay</li>
        <li>Google Pay</li>
        <li>PayPal</li>
        <li>Bank transfer</li>
        <li>Any additional payment method published on the website.</li>
      </ul>

      <Typography className={classes.subSectionTitle}>4.2 Charging and Information Security</Typography>
      <ul>
        <li>The charge is processed at the time of purchase.</li>
        <li>
          Credit card details are not stored on the Association's servers and are securely
          transmitted in accordance with the PCI DSS standard.
        </li>
        <li>
          {'The invoice will be sent to the email address stored in the system. To change the email address for receiving invoices, please contact email: '}
          <a href="mailto:help@kli.one">help@kli.one</a>.
        </li>
      </ul>

      <Typography className={classes.subSectionTitle}>
        4.3 Standing Orders and Automatically Renewing Subscriptions
      </Typography>
      <p>
        Standing orders and automatically renewing subscriptions will receive a payment receipt
        every month within two business days to the email address stored in the system. The user
        may cancel the subscription before the renewal date in accordance with the cancellation
        policy detailed in Section 5.
      </p>

      <Typography className={classes.subSectionTitle}>4.4 Price Changes</Typography>
      <p>
        The Association is entitled to change the prices of the services at any time, without prior
        notice, as well as to change the payment methods at its sole discretion.
      </p>

      <Typography className={classes.sectionTitle}>5. Cancellation and Refund Policy</Typography>

      <Typography className={classes.subSectionTitle}>
        5.1 Right of Cancellation - Distance Selling Transaction
      </Typography>
      <p>
        In accordance with the Consumer Protection Law, 5741-1981, and the Consumer Protection
        Regulations (Cancellation of a Transaction), 5771-2010, the user may cancel a transaction
        within 14 days from the date of the transaction or from the date of receiving the
        transaction confirmation, whichever is later, provided that the service has not yet been
        fully provided. A senior citizen, new immigrant, or a person with a disability may cancel a
        distance selling transaction within 4 months from the date of the transaction or from the
        date of receiving the transaction confirmation, whichever is later, upon presentation of an
        appropriate certificate.
      </p>
      <p>
        If the transaction is canceled within the specified period, the Association will perform
        the following actions:
      </p>
      <ul>
        <li>
          Cancel the charge, or return the amount paid to the user, within 14 business days from
          the date of receiving the cancellation notice.
        </li>
        <li>No additional charges will be made after the cancellation takes effect.</li>
        <li>
          The Association is entitled to deduct a cancellation fee of 5% of the transaction price
          or 100 ILS, whichever is lower, in accordance with the law.
        </li>
      </ul>
      <p>
        It is clarified that the right of cancellation does not apply to digital content made
        available to the user if consumption has begun, nor to a service fully provided with the
        user's consent before the end of the cancellation period.
      </p>
      <p>
        The aforementioned constitutes the general framework for canceling transactions. The
        specific cancellation conditions for each product and service are detailed in sections
        5.4-5.5 below.
      </p>

      <Typography className={classes.subSectionTitle}>
        5.2 Subscription Cancellation - Standing Order
      </Typography>
      <p>
        A request to cancel a renewing subscription or a standing order will take effect within 3
        business days from the date the request is received by the Association, and no later than
        the next billing date. After the cancellation takes effect, no additional charges will be
        made.
      </p>

      <Typography className={classes.subSectionTitle}>
        5.3 Method of Submitting a Cancellation Request
      </Typography>
      <p>A transaction can be canceled in one of the following ways:</p>
      <ul>
        <li>
          {'Email: '}
          <a href="mailto:help@kli.one">help@kli.one</a>
        </li>
        <li>In writing: To the Association's address: 12 HaRabash St., Petah Tikva.</li>
      </ul>
      <p>The cancellation request must state:</p>
      <ul>
        <li>Full name</li>
        <li>Email address associated with the account</li>
        <li>Transaction number / reference / copy of the invoice</li>
        <li>Reason for cancellation (optional).</li>
      </ul>

      <Typography className={classes.subSectionTitle}>
        5.4 Cancellation Terms by Product - Pay.Kli.One Website
      </Typography>
      <CancellationTable columns={columns} rows={payKliOneRows} />

      <Typography className={classes.subSectionTitle}>
        5.5 Cancellation Terms by Product - The Virtual Home (Kli.One Website)
      </Typography>
      <CancellationTable columns={columns} rows={kliOneRows} />

      <Typography className={classes.sectionTitle}>6. Accessibility Policy</Typography>
      <p>
        {'The Association operates to improve website accessibility for people with disabilities in accordance with the Equal Rights for Persons with Disabilities Law. For inquiries regarding accessibility: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
      </p>

      <Typography className={classes.sectionTitle}>7. Miscellaneous</Typography>
      <ul>
        <li>
          These regulations constitute an integral part of the Association's terms of use and
          privacy policy.
        </li>
        <li>
          The Association reserves the right to update these regulations. Material changes will be
          published on the website and sent to the email addresses of registered users.
        </li>
        <li>
          These regulations are subject to the Consumer Protection Law, 5741-1981, the Consumer
          Protection Regulations (Cancellation of a Transaction), 5771-2010, and any other
          relevant Israeli law.
        </li>
      </ul>
    </div>
  )
}

export default CancellationEn
