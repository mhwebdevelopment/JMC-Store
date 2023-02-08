import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../global.css';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Privacy">
      <CommonSection title="Privacy Policy" />
      <section className="pt-20">
        <Container>
          <Row>
            <Col lg="12">
              <div className="about__details">
                <p className="mb-5">
                  This Privacy Policy governs the manner in which the website
                  collects, uses, maintains and discloses information collected
                  from users (each, a 'User') of the website ('Site'). This
                  privacy policy applies to the Site and all products and
                  services offered by Jonathan Martin Companies.
                </p>
                <h1 className="mb-2">Personal Identification Information</h1>
                <p className="content__paragraph">
                  We may collect personal identification information from Users
                  in a variety of ways, including, but not limited to, when
                  Users visit our Site, register on the site, subscribe to the
                  newsletter, and in connection with other activities, services,
                  features or resources we make available on our Site. Users may
                  be asked for, where appropriate, an email address. Users may,
                  however, visit our Site anonymously. We will collect personal
                  identification information from Users only if they voluntarily
                  submit such information to us. Users can always refuse to
                  supply personal identification information, however, it may
                  prevent them from engaging in certain Site related activities.
                </p>
                <h1 className="mb-2">Non-Personal Identification</h1>
                <p className="content__paragraph">
                  We may collect non-personal identification information about
                  Users whenever they interact with our Site. Non-personal
                  identification information may include the browser name, the
                  type of computer and technical information about Users' means
                  of connection to our Site, such as the operating system and
                  the Internet service providers utilized and other similar
                  information.
                </p>
                <h1 className="mb-2">Web Browser Cookies</h1>
                <p className="content__paragraph">
                  Our Site may use 'cookies' to enhance User experience. Users'
                  web browser places cookies on their hard drive for
                  record-keeping purposes and sometimes to track information
                  about them. Users may choose to set their web browser to
                  refuse cookies or to alert you when cookies are being sent. If
                  they do so, note that some parts of the Site may not function
                  properly.
                </p>
                <h1 className="mb-2">How We Use Collected Information</h1>
                <p className="content__paragraph">
                  Jonathan Martin Companies may collect and use Users' personal
                  information for the following purposes:<br></br> To improve
                  customer service - Information you provide helps us respond to
                  your customer service requests and support needs more
                  efficiently.<br></br> To personalize user experience - We may
                  use information in the aggregate to understand how our Users
                  as a group use the services and resources provided on our
                  Site.<br></br> To send periodic emails - We may use the email
                  addresses to send User information and updates pertaining to
                  their order. It may also be used to respond to their
                  inquiries, questions, and/or other requests. If User decides
                  to opt-in to our mailing list, they will receive emails that
                  may include company news, updates, related product or service
                  information, etc. If at any time the User would like to
                  unsubscribe from receiving future emails, we include detailed
                  unsubscribe instructions at the bottom of each email or the
                  User may contact us via our Site.
                </p>
                <h1 className="mb-2">How We Protect Your Information</h1>
                <p className="content__paragraph">
                  We adopt appropriate data collection, storage and processing
                  practices, and security measures to protect against
                  unauthorized access, alteration, disclosure or destruction of
                  your personal information, username, password, transaction
                  information and data stored on our Site.
                </p>
                <h1 className="mb-2">Sharing Your Information</h1>
                <p className="content__paragraph">
                  We do not sell, trade, or rent Users' personal identification
                  information to others. We may share generic aggregated
                  demographic information not linked to any personal
                  identification information regarding visitors and users with
                  our business partners, trusted affiliates and advertisers for
                  the purposes outlined above.
                </p>
                <h1 className="mb-2">Third Party Websites</h1>
                <p className="content__paragraph">
                  Users may find advertising or other content on our Site that
                  links to the sites and services of our partners, suppliers,
                  advertisers, sponsors, licensors and other third parties. We
                  do not control the content or links that appear on these sites
                  and are not responsible for the practices employed by websites
                  linked to or from our Site. In addition, these sites or
                  services, including their content and links, may be constantly
                  changing. These sites and services may have their own privacy
                  policies and customer service policies. Browsing and
                  interaction on any other website, including websites that have
                  a link to our Site, is subject to that website's own terms and
                  policies.
                </p>
                <h1 className="mb-2">Changes To This Privacy Policy</h1>
                <p className="content__paragraph">
                  Jonathan Martin Companies has the discretion to update this
                  privacy policy at any time. When we do, we will revise the
                  updated date at the top of this page. We encourage Users to
                  frequently check this page for any changes to stay informed
                  about how we are helping to protect the personal information
                  we collect. You acknowledge and agree that it is your
                  responsibility to review this privacy policy periodically and
                  become aware of modifications.
                </p>
                <h1 className="mb-2">Your Acceptance of These Terms</h1>
                <p className="content__paragraph">
                  By using this Site, you signify your acceptance of this
                  policy. If you do not agree to this policy, please do not use
                  our Site. Your continued use of the Site following the posting
                  of changes to this policy will be deemed your acceptance of
                  those changes.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Privacy;
