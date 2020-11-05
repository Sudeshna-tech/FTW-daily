import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';
import { TopbarSearchForm } from '../../forms';
import css from './SectionHero.css';


const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <h1>Better Campaigns.

Guaranteed Payouts. No Pause.

No Fraud. No Excuses.</h1>
        </h1>
        <h2 className={css.heroSubTitle}>
          <p>Callbit is a global marketplace for call center outsourcing and performance marketing. Learn how marketers, call centers and BPOs are taking advantage of our platform and how companies everywhere source inbound call leads and live transfers with Callbit.</p>
        </h2>
        
        <NamedLink
          name="SearchPage"
          to={{
            search:
              '?address=New+York,+NY,+USA/@40.6971494,-74.2598781,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728',
          }}
          className={css.heroButton}
        >
          <p>Search campaign</p>
        </NamedLink>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
