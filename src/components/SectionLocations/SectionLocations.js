import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import helsinkiImage from './images/location_helsinki.jpg';
import rovaniemiImage from './images/location_rovaniemi.jpg';
import rukaImage from './images/location_ruka.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="The most efficient and easy to use platform for global call center outsourcing." />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Florida',
          helsinkiImage,
          '?address=Florida,+USA/@27.5221898,-88.3025632,6z/data=!3m1!4b1!4m5!3m4!1s0x88c1766591562abf:0xf72e13d35bc74ed0!8m2!3d27.6648274!4d-81.5157535'
        )}
        {locationLink(
          'Alaska',
          rovaniemiImage,
          '?address=Alaska,+USA/@60.1257502,-176.4942467,4z/data=!3m1!4b1!4m5!3m4!1s0x5400df9cc0aec01b:0xbcdb5e27a98adb35!8m2!3d64.2008413!4d-149.4936733'
        )}
        {locationLink(
          'New York',
          rukaImage,
          '?address=New+York,+NY,+USA/@40.6971494,-74.2598781,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
