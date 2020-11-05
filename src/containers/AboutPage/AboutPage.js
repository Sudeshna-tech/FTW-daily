import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Callbit',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>About Callbit</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Online marketplace for the global call center outsourcing industry</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Callbit is the safest online marketplace for the global call center outsourcing industry. Our platform is designed to serve BPOs, digital marketers, lead generators, and buyers looking to hire any of the above. Our mission is simple. We wish to completely eradicate fraud in the outsourcing industry meanwhile democratizing the marketplace at large. Now buyers can easily post job details and hire a vendor to support their business.
              </h2>

              <p>
              Billions of customer service and marketing interactions occur yearly and the number of telephone related jobs is endless. Only the most reliable and trustworthy vendors should be at the helm of managing these aspects of any business. Each interaction counts and they all need to comply with either laws or agreements set forth by buyers and sellers. 
              </p>          

              

              
              <p>
              Buyers and sellers can connect, interact and transact as they please and join the Callbit community today.
              </p>
              
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
