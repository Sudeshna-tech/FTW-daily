import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionHowItWorks.css';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <h1>Next generation pay per call marketing</h1>
        
        <h2>The future of call center outsourcing.</h2>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
           <h2>1. Post your campaign</h2>
          </h2>
          <p>
            <p>Post your campaign. Complete all of the details and campaign requirements you want your call center to know.</p>
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <h2>2. Connect with publishers</h2>
          </h2>
          <p>
            <p>Get responses from a network of call centers and performance marketers from around the globe.</p>
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
           <h2>3. Launch your campaign</h2>
          </h2>
          <p>
            <p>Select the best vendor that fits the requirements of your campaign. Negotiate your terms and launch!</p>
          </p>
        </div>
      </div>

      
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
