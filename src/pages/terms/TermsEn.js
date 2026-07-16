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

function TermsEn() {
  const classes = useStyles()

  return (
    <div className={classes.contentRoot}>
      <Typography variant="h2" className={classes.pageTitle}>
        Terms of Use of "Bnei Baruch Association - Kabbalah La’am"
      </Typography>
      <p className={classes.orgName}>Hereinafter "Bnei Baruch Association" or “the Association”, No. 580292753</p>
      <p className={classes.orgName}>Address of the Association:</p>
      <p className={classes.orgName}>12 Rabash St. Petah Tikva, Zip code 4934829</p>
      <p className={classes.orgName}>
        {'Email: '}
        <a href="mailto:info@kab.co.il">info@kab.co.il</a>
      </p>

      <Typography className={classes.sectionTitle}>Conditions of Use</Typography>
      <p>
        {'Bnei Baruch - Kabbalah L’Am Association (R.A.) (hereinafter: the “Association”, “us” or “we”) provides a platform which facilitates viewing and participating in Kabbalah lessons via a website owned by the Association (hereinafter “the Site”) or via other services provided by us (hereinafter, together: “the Services”). These Conditions of Use set out your access and use of the Site and its Services. The “User” or “you” means the Site user. Entrance to the Site represents your agreement to the Conditions of Use, as well as the Privacy Policy (hereinafter: “Privacy Policy”), according to the letter, and constitutes your agreement to behave according to the Conditions of Use. The user is requested to read the Conditions of Use carefully.'}
      </p>
      <p>
        {'We reserve the right, at our exclusive discretion, to change or amend the Conditions of Use at any time. You agree to be bound by the aforementioned changes. You are responsible for reading these Conditions of Use from time to time. Your continued use of the Site after the aforementioned change or amendment constitutes your agreement to the amended Conditions of Use.'}
      </p>
      <p>
        {'You agree that we may change any part of the Site, at any time, or terminate the Services or any part of them, for whatsoever reason, without informing you and without any obligation.'}
      </p>
      <p>
        {'The Conditions of Use are worded in the masculine [in Hebrew] for the purpose of convenience only, but relate equally to women and men.'}
      </p>

      <Typography className={classes.subSectionTitle}>1. Use of the Site</Typography>
      <p>
        {'Subject to your agreement and compliance with the Conditions of Use, we grant you a limited right, which is not exclusive, and is non-transferrable, which may be canceled and which is restricted, for access and use of the Site for your personal requirements. You do not have the right to use the Site or our Services in order to build a database of your own or for any other commercial purpose.'}
      </p>
      <p>
        {'Parents of children under the age of 18 must register on the Site in order to facilitate access for their children to the Site and its Services. Your entrance to the Site and/or use of its Services constitutes confirmation that you are aged 18 or that one of your parents or your guardian has explicitly approved your use of the Site and/or its Services. You are not permitted to enter the Site and use its Services, if said use, as mentioned, is prohibited by any law.'}
      </p>

      <Typography className={classes.subSectionTitle}>2. Registration</Typography>
      <p>
        {'To create an account with us, we will ask you to provide certain information. We reserve the right to refuse to open an account for any user whomsoever, for any reason, or to restrict the number of accounts that a user may open, all at our absolute discretion. It may be that we will ask you for additional information in the future. It is prohibited to provide false information when registering. We will issue you with a username and ask you to choose a password. You do not have the right to select the name of another user as [your] username. Moreover, it is prohibited to select a username that is offensive, insulting or in any way contradicts the Conditions of Use and public policy. You undertake to update your account so that it stays current and accurate. Any loss deriving from the fact that you have not kept your account current is your exclusive responsibility.'}
      </p>
      <p>
        {'You may not reveal your password to anyone else. We will not ask you to disclose the password. If you forget your password, you may request that a new password be sent to your email address or to your cellphone. Your account is endangered if you allow anyone to use it in a manner that is inappropriate. The account may be closed if you or anyone else using the account breaches these Conditions of Use. In the event that your account is closed, you will not be permitted to open an account again without our explicit agreement.'}
      </p>
      <p>
        {'You agree to inform us immediately of any unauthorized use of your account or your password. You are solely and exclusively responsible for the security of your computer and all of the activity in your account, even in the event that such activity is not performed by you. We will not be responsible in respect of any loss or damage deriving from unauthorized use of your account or password. We do not oversee the matter and nor can we assure you that we will be aware of any improper use of the account, of the Site or the Services or that we might be able to prevent abuse as aforesaid.'}
      </p>
      <p>
        {'You agree that we may, for any reason and in our absolute discretion, without notifying you of same, close your account and remove any content connected thereto. Reasons for said closure may be: (a) A lengthy period of inactivity; (b) Breach of these Conditions of Use or of their spirit; (c) Behavior which constitutes fraud or which is injurious or aggravating; or (d) Behavior which is damaging towards other users, third parties, to the ethos of our community, or to our business affairs.'}
      </p>
      <p>
        {'If we are of the opinion, at our exclusive discretion, that there has been a breach of these Conditions of Use or that there has been illegal or inappropriate behavior, we may take any steps that we deem appropriate. We reserve the right to investigate any suspicion of breach of these Conditions of Use or of illegal or inappropriate behavior on the Site or with our Services. We will cooperate with any investigation by the law enforcement agencies or any court order which demands or instructs us to reveal the identity, behavior or content of any user concerning whom there is a suspicion that he has performed acts that appear to be against the law. You have the right to demand the closure of your account at any time and for any reason by sending a message to the following address: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
        {'.'}
      </p>
      <p>
        {'Any closure or suspension of your account will not affect your obligations to us under these Conditions of Use (including, without limitation, ownership, indemnification and all your representations and undertakings to us and limitations of responsibility), the nature and circumstances of which may continue to exist after the aforementioned closure or suspension.'}
      </p>

      <Typography className={classes.subSectionTitle}>3. Payments</Typography>
      <p>
        {'The services are provided for a fee through the purchase of a subscription and a membership for the virtual home. Payment will be made via credit cards, direct debit, or any other payment method that is published as valid. It is agreed that we reserve the right to change the service prices at any time without prior notice and to modify the payment methods at our sole discretion. The terms of each payment method used must be respected. We reserve the right to cancel any paid service or membership if full payment is not received on time. You are solely responsible for ensuring payment for our services.'}
      </p>

      <Typography className={classes.subSectionTitle}>4. Links</Typography>
      <p>
        {'Links may appear on the Site to Internet sites that are not operated by us. Such links are displayed for the convenience of the User only and we do not have any control over these sites and nor do we have any responsibility for the content appearing on them. The presence of the links on our site does not mean that we support the content that is displayed on these sites or any other link to these sites or their operators. We recommend that you exercise discretion and care in the use of sites belonging to any third party. We have the right, at our exclusive discretion, to remove all links from the Site and/or to add additional links. Moreover, we are not responsible for the results of sharing of the content that you select using social networking.'}
      </p>

      <Typography className={classes.subSectionTitle}>5. Restrictions</Typography>
      <p>
        {'Besides everything that is expressly determined herein, you commit to refrain from undertaking to allow any third party to undertake the following activities: (a) Reverse engineering, disassembly or any attempt to reveal the source code of the program that is at the base of the Site or the Services; (b) Any change of the Site, its manipulation, copying or creation of derivative creations therefrom, as well as distribution, rental, broadcasting, public display, advertising, transmission, sharing, transfer or any other use which is not in accordance with these Conditions of Use; (c) Activation or the possibility of activating any computer application, robot, spyware program or any other device, including software such as robots, crawlers and so forth, in order to search, scan, copy or automatically duplicate features from the Site. It is also forbidden to create or to use the aforementioned devices in order to create a collection, store or database that contains content from the Site or its code; (d) Attempt to halt or circumvent any security mechanism of the Site; (e) Attempt to obtain a password or personal details of a registered user or false use of same; (f) Pretending to be another user or misrepresenting yourself, including the use of multiple user accounts; (g) Breach of the privacy rights and legal rights of third parties, including slander, libel, intimidation, harassment or surveillance of other users, including via the distribution of messages or multiple messages, or; (h) Breach of copyright, privacy rights, or moral rights of any third party; (i) Solicitation of other users; (j) Use of services for commercial purposes, including the sale of products or services; (k) Use of the Site for propaganda purposes or in support of prohibited behavior.'}
      </p>
      <p>
        {'In the event that you upload or provide information or pictures (hereinafter: “'}<b>User Content</b>{'”) using the Services, you declare that the User Content is accurate and does not mislead and: (a) Is not in breach of copyright, privacy rights, advertising rights or the ethical rights of any third party; (b) Does not include any content of a slanderous nature, nor libelous, offensive, sexual or insulting (including content which encourages or praises hate, violence or jealousy); (c) Does not contain computer worms, viruses or other fraudulent programs or; (d) Does not breach any law or regulation, including any law or regulation relating to advertising or marketing. By uploading any service content you grant the Association and its associated entities and those who receive licenses from it, a worldwide license, which is not exclusive, unrestricted, permanent and free of charge, to advertise, operate, present and distribute said content in any manner whatsoever, as part of the service or in order to promote the Association and the Services provided that your privacy is respected. We reserve the right to remove, suspend access to or permanently delete any content, without prior notice, including, without limitation, content which is in breach of the explicit undertakings above (according to our reasonable opinion) or our business interests. These decisions will be made according to our exclusive discretion and you will entertain no claim in respect of any such decisions of ours. Any reliance upon content of other users will be your responsibility alone and the Association is not responsible for the accuracy, integrity, or applicability of information or User Content transmitted via third parties in the framework of the Services. The Association will not be responsible for any damage that is caused to you due to the reliance upon information that does not come directly from the Association.'}
      </p>

      <Typography className={classes.subSectionTitle}>6. Intellectual Property</Typography>
      <p>
        {'The entire site and the information on it including its content (and without derogating form the generality of the above - including its design, software applications, the names and trademarks and any other detail that appears in it or is incorporated into it), and including content received from lecturers, third parties and/or users as mentioned above, are the exclusive property of the Association or of third parties that permitted the Association to use it and they are protected by law, including the laws of the State of Israel, international treaties and the laws of foreign countries. Apart from what is explicitly permitted herein, you may not copy, develop, reproduce, distribute, broadcast, republish, change, download, upload, transmit or make other use of the content appearing in the Site. You are not permitted to remove, change or hide any copyright symbol, trademark, or service symbol or any other symbol indicating the property rights included in the Site or services. All trademarks are trademarks or the registered trade symbols of their owners. There is nothing in these Conditions of Use which grants you any right to use the trademark, service mark, our trade symbol or trading name or of any third party. You may download the content available for download in the framework of the Services but you may use this content for personal use only. It is prohibited to transfer, duplicate, distribute, display, sell and/or make any commercial use of the content or the User content of other users to third parties without receiving the prior written consent of the Association.'}
      </p>

      <Typography className={classes.subSectionTitle}>7. Privacy</Typography>
      <p>
        {'We collect information that you provide at the time of registration to the Site and/or at the time of using the Site or the Services, including information that may identify you personally or define your areas of interest (hereinafter: the “'}<b>Information</b>{'”). Inter alia, we may record audio and video clips, all subject to your consent. We have the right to use the Information in a way that is described in our Privacy Policy, as amended from time to time. The Privacy Policy is an integral part of these Conditions of Use. Use of the Site also constitutes your agreement to the Privacy Policy.'}
      </p>

      <Typography className={classes.subSectionTitle}>8. Limited Responsibility</Typography>
      <p>
        {'Your use of the Site and/or the Services is according to your exclusive discretion and is your responsibility. We accept no responsibility for any content which is received from third parties, unless explicitly stated in these Conditions of Use. The entire Site, including all the information appearing on it and the program which is at its base, including all the Services, are offered to the User “as is”, and subject to availability (“as available”) without any warranty whatsoever. We explicitly reject any responsibility, including, without limitation, explicit or implied liability for usability, explicit or implied liability for tradability, compatibility with a specific objective, ownership or non-breach. Any reliability on the Site, its Services or content, is your exclusive responsibility and we reject any responsibility, explicit or implied, (a) Regarding accuracy, authenticity, compliance with deadlines, security or performance of the Site, the Services or the content, or; (b) That the Site, the Services and/or the content will be without errors or that the errors, should they exist, will be corrected, or; (c) Regarding the accuracy, quality, currency, completeness or usability of all information or content presented on the Site or the Services.'}
      </p>
      <p>
        {'Many sources of content appear on the Site and/or in the Services. We try to ensure that the content is as accurate as possible. At the same time, the Association is not responsible in respect of content which originates with third parties and the Association does not guarantee the level of accuracy of said content. We do not promise that the content of the Site and/or the Services is accurate, complete, reliable, current or without errors. We are not responsible for any content which is inaccurate or which is erroneous. We would clarify that the information which is presented on the Site does not constitute a recommendation, opinion, advice and/or proposal from us to purchase any product or provide service, and any reliance on the information displayed on the Site is at the exclusive responsibility of the User and the Association shall not be responsible as a result of reliance of the User on the information and/or for the degree of compatibility of the information to the use of the User and/or his requirements. Any advice or information, given verbally or in writing, received from the Association, shall not be such as to establish any responsibility for the Association, other than what is expressly stated in writing in these Conditions. Should you rely on any advice and/or information as mentioned, said reliance is your exclusive responsibility. There are countries in which it is forbidden to exclude different types of liability. Accordingly, some of the above exclusions may not apply to you.'}
      </p>
      <p>
        {'We do not accept any liability for any error, omission, interval, deletion, fault, delay in activity or broadcast, failure of any communications line, theft or destruction or unauthorized access or change of any content. The Association is not responsible for any problem or technical failure of any network or telephone and/or Internet line, online computer systems, servers or providers, computer equipment, software, failure of any email deriving from technical problems or overload of traffic on the Internet or our site and services, including any injury or damage to users or any computer of any individual connected or deriving from participation or downloading of materials from the Site or in connection therewith and/or in connection with the Services. Under no circumstances will the Association be responsible for any loss or damage, including personal injury or death, resulting from the use of the Site and/or services, from any content advertised or from the behavior of any users of the Site and/or the Services, whether online or otherwise.'}
      </p>
      <p>
        {'The Association, its directors, officials, employees, emissaries or shareholders will under no circumstances be responsible to you or to any third party for any physical damage or compensation, including, without limitation, any damage or compensation which is general incidental, consequential, indirect, direct or punitive in nature, deriving from the use of the Site and its Services or connected thereto. The total liability of the Association in the framework of every condition of these Conditions of Use, shall not exceed the sum that you paid the Association to use the Site. Accordingly, if you have not paid anything to the Association to use the Site, the Association shall have no liability to you in respect of the aforementioned use. The Association is not responsible for connections to or from the Internet. The Association is not responsible for telephone lines or systems or for computerized systems or servers. Under no circumstances will the Association be responsible for losses or damages resulting from the use of the Site or the Services, or from any content uploaded to the Site or the Services, or from any behavior of any third party, whether online or not.'}
      </p>

      <Typography className={classes.subSectionTitle}>9. Indemnification</Typography>
      <p>
        {'You undertake to indemnify the Association and its employees, directors, officials, contractors and agents, against any claim, action, compensation, cost or expense (including fees and legal costs) deriving, directly or indirectly: (a) From a breach of these Conditions by yourself or by anyone using your computer or your password; (b) Against any action, loss or damage deriving from your use, your attempted use of the Site and/or the Services (or lack of ability to use the Site and/or the Services), including any transaction that you handle on the Site; and (c) Any breach of the law or the regulations committed by you. You agree that every use of the Site and/or the Services by you will be according to the law.'}
      </p>

      <Typography className={classes.subSectionTitle}>10. Period</Typography>
      <p>
        {'The period of the agreement shall commence on the date that you receive these Conditions of Use and shall continue without time limit, unless it is terminated in accordance with these Conditions of Use. Each party may terminate these Conditions of Use by sending a message in writing (including via email). Even when the Conditions of Use have been terminated, Sections 2-11 will continue to remain in force after the termination for any reason.'}
      </p>

      <Typography className={classes.subSectionTitle}>11. Miscellaneous Directives</Typography>
      <p>
        {'Should we need to contact you, you agree that we may do so electronically, including but not limited to, via email. We may issue you notices to your email address, your fax number or via mail according to the details for contacting you that you provided when you registered. Messages sent via email will be considered to have been received when they are sent by us. Messages sent by fax will be considered as if they have been received when confirmation of receipt as mentioned, is received by us. Messages sent by regular mail will be considered to have been received 10 days after the date of dispatch. These Conditions of Use represent the agreement in full between the parties in respect of the matters they address and they replace any agreement whatsoever between the parties in respect to the aforementioned matters. There is nothing in this agreement which creates any agency, transaction, joint venture or partnership between you and the Association or which qualifies you to operate on behalf of the Association. The Association has the right to assign, transfer or endorse its rights and liabilities according to these Conditions of Use, or any part thereof, to any third party it deems fit. You do not have the right to assign, transfer or endorse your rights and liabilities, or any part thereof, according to these Conditions of Use, and any such attempt to endorse them shall be null and void. In the event that it is determined that any condition of these Conditions of Use is not valid or is not enforceable by a competent court of law, the conditions whose validity have been invalidated or which are unenforceable, shall be considered to have been replaced by valid conditions which are enforceable and whose content matches as closely as possible the substance and intention of the original conditions while the remaining conditions shall remain valid. All activity on the Site and everything connected and subject thereto, including the Conditions of Use, will be subject only to Israeli law and the exclusive jurisdiction for any dispute relating to the Site and the use thereof and the Conditions of Use shall reside with the authorized law courts in the Tel-Aviv/Jaffa district of Israel.'}
      </p>

      <Typography className={classes.sectionTitle}>Privacy Policy</Typography>
      <p>
        {'Bnei Baruch - Kabbalah L’Am Association (hereinafter: the “'}<b>Association</b>{'”, “'}<b>us</b>{'” or “'}<b>we</b>{'”) respects your right to privacy. We want to make it possible for you to take informed decisions regarding the use of your information.'}
      </p>
      <p>
        {'The objective of this Privacy Policy is to explain how the Association acts with regard to the information which is collected using the different websites under its ownership, including the one you are currently viewing and including, inter alia, the following sites:'}
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
        {'Or via other services that the Association provides (hereinafter, jointly: the “'}<b>Services</b>{'”) and how the Association collects, uses, delivers and protects the information which is received from its users.'}
      </p>
      <p className={classes.genderNote}>
        {'The Privacy Policy is worded in the masculine [in Hebrew] for the purpose of convenience only, but relates equally to women and men. The terms used in this document, which have not been specifically defined in its framework, will be interpreted according to the definitions that were provided therefor in the Conditions of Use.'}
      </p>

      <Typography className={classes.subSectionTitle}>The Information We Collect</Typography>
      <p>
        {'“Personal Information” or “information” is information that can be associated with an individual or entity, such as a name, telephone number or email address. Some of the services that we provide, including participation in lectures and/or registration for specific events, have to be recorded. In the framework of the registration for our services or other events, you will be required to provide us with information, including name, email address, cellular number, gender, age, date of birth, marital status, position in the Association, educational framework, and residential address. You are under no legal obligation to provide this information, and the provision of the information depends purely on your wishes and is with your consent. However, if you do not agree to provide this information, in whole or in part, it may be that some of the services we provide will be unavailable to you and/or that you will not be able to use certain services. In addition, we record all the activities and lectures on the site and the participants in those lectures, both by video and audio (“'}<b>recordings</b>{'”). Moreover, we may retain other details of your use of our services, such as advertising that you read on the site, the pages that you visited or those offers and services that you were interested in. There is specific information that we may collect in an automated manner concerning your computer, browser, operating system, IP address and/or cellular device as well as your geographic location.'}
      </p>

      <Typography className={classes.subSectionTitle}>How We Protect Your Information</Typography>
      <p>
        {'We take industry-recognized steps to protect the information given to us, both at the time it is given and after we receive it. Notwithstanding this, there are no methods for transfer or electronic storage that are totally foolproof. Therefore, even though we try to take the accepted steps to protect your information, we cannot guarantee the absolute safety of the information.'}
      </p>
      <p>
        {'We will delete all personal information that we have received from a user after receiving a written demand from said user. We cannot replicate data that has been deleted.'}
      </p>

      <Typography className={classes.subSectionTitle}>How We Use The Information</Typography>
      <p>
        {'We will not share your information with other entities without your express consent, except for the ways that are mentioned here specifically, and unless we are required so to do by law, regulation or court injunction or in order to cooperate with an investigation by law enforcement authorities.'}
      </p>
      <p>
        {'We use the information that you give us in order to provide you with our services, such as sending information about special offers and events through text messages and emails.'}
      </p>
      <p>
        {'We use the information that you give us in order to provide you with our services.'}
      </p>
      <p>
        {'We may use your information for our own internal purposes, such as to identify problems with our servers or in order to change our services for more uses or to adapt them to your requirements.'}
      </p>
      <p>
        {'We may pass on your information to:'}
      </p>
      <ul>
        <li>
          {'Companies associated with us, or to suppliers and/or subcontractors such as suppliers who collect, process and/or store information for us. We will require that these companies, the suppliers and/or the subcontractors act according to our regulations for the protection of privacy.'}
        </li>
        <li>
          {'Business partners with whom we may be likely to offer products or services in partnership, or whose products or services are offered on our site. You will be able to know when a third party is connected to an offer for a product or service when its name appears on the proposal, on its own or together with our name. If you choose to use these products or services, we may share information about you, including your personal information, with those partners. Note that we do not control the privacy regulations of these business partners of ours. If you are no longer willing to allow a third party to use your information, contact the said third party.'}
        </li>
        <li>
          {'Referral to other Internet sites: If you were referred to this site from another site (for example, via a link), we may share certain information about you with the referring site. We encourage you to read the Privacy Policy of every site that refers you to our site. In addition, when you move to the site of our partners via a link from our site, we provide the partner with a unique identifier, so that he is aware that you have been referred to him from our site. This unique identifier will not contain your personal information.'}
        </li>
      </ul>
      <p>
        {'In addition, it may be that through analyzing all the information that we collect or receive, including information relating to users, we create statistical information about a wide variety of users (hereinafter: “Statistical Information”). Statistical Information helps us to understand trends and the requirements of the users to enable us to consider new services and products and so that we can adjust existing services and products to the needs of the users. Statistical Information is anonymous and we do not connect it to personal information. It may be that we will pass on Statistical Information to our partners, without restriction, according to the commercial conditions determined.'}
      </p>
      <p>
        {'We may analyze the Statistical Information using programs that provide information services and statistical analysis including, but not limited to, Google Analytics (“Analytical Tools”). The information collected is intended for analytical purposes, research and control. We may transfer the Statistical Information to our customers and our business partners (as detailed below). Moreover, we use the information that we receive using the analytical tools, to improve the system. The information that Google Analytics collects in the wake of your use of the system is subject to the conditions of use and Privacy Policy of Google Analytics, as set out below:'}
      </p>
      <p>
        {'http://www.google.com/analytics/terms/us.html ,http://www.google.com/policies/privacy/.'}
      </p>

      <Typography className={classes.subSectionTitle}>Recordings and Content</Typography>
      <p>
        {'As stated, your activity in the framework of these services is recorded subject to your consent. In addition, you can upload user content to the servers, including pictures, files and more. We may use these recordings and content for business and marketing purposes at our discretion. You hereby grant your consent to the use of the recordings and content without any consideration whatsoever. You grant the Association, in an exclusive and irrevocable manner, without consideration and without time limit, all of the rights granted you regarding your participation in the services including the recording and content of the users and documentation of participation, photography and broadcasting, including any copyright and performers’ rights, moral rights and/or compensation. You will entertain no action and/or claim against the Association in connection with the use of the various recordings and content, including details, pictures, video clips and more, which you have delivered and./or uploaded using the services.'}
      </p>

      <Typography className={classes.subSectionTitle}>Cookies</Typography>
      <p>
        {'A cookie is a short section of text that is sent to the browser of the site visitor. When revisiting the site, the browser sends this section to the original viewer’s computer. We use cookies in order to match your user experience with your requirements. It may be that we will use a “permanent” cookie in order to save your definitions and personal adjustments. Moreover, if you enter the site, the cookie will serve to identify you as a valid user, so that you do not need to enter your details from scratch every time you use the site. Most Internet browsers are predefined in a manner that facilitates the receipt of cookies, but you can change this definition so that your browser blocks all the cookies or to ensure that the browser tells you every time that the cookie has been sent. Similarly, you can delete every existing cookie at any time. However, it may be that some of the features of the servers and/or the site do not work as they should if you cancel or remove the cookies.'}
      </p>
      <p>
        {'It may be that we display links to Internet sites of third parties. Any personal information that you give to any third party, is information that is given directly to the third party and is subject to the Privacy Policy of that third party. Other than what is described above, we will not be responsible for content or privacy procedures of aforementioned third parties. Links from our site are presented for your convenience. We recommend that you learn the privacy procedures of each entity before you provide us with whatsoever information, including personal information. We cannot be responsible for use of your information by third entities.'}
      </p>

      <Typography className={classes.subSectionTitle}>Use of Services by Children</Typography>
      <p>
        {'The Association does not collect information from children under the age of 18. In the event that it is proven that a child under the age of 18 has registered without the consent of his parents or guardian, please inform us immediately.'}
      </p>

      <Typography className={classes.subSectionTitle}>Other Uses and Transfer of Information</Typography>
      <p>
        {'We will cooperate with the law enforcement agencies or any court order which demands or instructs us to reveal the identity, behavior or digital content of any user concerning whom there is a suspicion that he did things that are illegal or performed actions in breach of the law. We may use the services of subcontractors located in countries that are not your country of residence, and send them the information we receive. For example, we may send your information to countries outside Israel. All the subcontractors will be subject to the non-disclosure and non-use obligations. Despite that, it may be that in some countries there will be levels of protection of personal information or other information that are not the same as the level of protection in your country. We may transfer our databases which include your information if we sell our business or part thereof, including transfer outside of Israel.'}
      </p>

      <Typography className={classes.subSectionTitle}>Perusal, Correction or Update of Your Information</Typography>
      <p>
        {'We enable you to peruse the information that you have provided during registration and to change data, inaccuracies or errors in the information. For a request to peruse the information or to correct and update your personal information, contact us at this address: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
        {'.'}
      </p>
      <p>
        {'We will retain your information as long as your account is active or as required in order to provide you with services. If you wish to close your account or request that we not use your information in order to provide you with services, contact us at the email address shown above. We will retain your information and use it according to need so that we can comply with our legal undertakings, to solve disputes and enforce our agreements.'}
      </p>

      <Typography className={classes.subSectionTitle}>Communications and Messages</Typography>
      <p>
        {'We may send you messages by email and SMS or other messages about us or about our products and services. By accepting our conditions of use (including the conditions of this Privacy Policy) or use of the site and/or services, you agree to accept these commercial messages. You can remove your personal details from our distribution list and cease receiving messages from us in the future, by clicking on the link to cancel which appears on every message, or by sending an email to this address: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
        {'.'}
      </p>
      <p>
        {'Please be advised that we reserve the right to send you messages connected to services, including service messages and administrative messages, which relate to your account, without offering you the possibility of canceling their receipt, unless you close your account.'}
      </p>

      <Typography className={classes.subSectionTitle}>Changes to Privacy Policy</Typography>
      <p>
        {'Our Privacy Policy may change from time to time. In the event that there are changes made to our Privacy Policy with the object of reducing your rights or different usage of the information you gave, notice will be given of this on the site.'}
      </p>

      <Typography className={classes.subSectionTitle}>Contact Us</Typography>
      <p>
        {'For any question or problem connected to our Privacy Policy, contact: '}
        <a href="mailto:help@kli.one">help@kli.one</a>
        {'.'}
      </p>

      <p className={classes.updatedDate}>Last updated: November 11, 2024</p>
    </div>
  )
}

export default TermsEn
