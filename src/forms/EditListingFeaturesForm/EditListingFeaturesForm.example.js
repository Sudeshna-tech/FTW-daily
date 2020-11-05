import EditListingFeaturesForm from './EditListingFeaturesForm';

const NAME = 'amenities';

const initialValueArray = ['towels', 'jacuzzi', 'bathroom'];
const initialValues = { [NAME]: initialValueArray };

const filterConfig = [
  {
    id: 'amenities',
    label: 'Category',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_amenities'],
    config: {
      mode: 'has_all',
      options: [
        {
          key: 'payperlead',
          label: 'Pay per lead (CPL)',
        },
        {
          key: 'payperacquisition',
          label: 'Pay per acquisition (CPA)',
        },
        {
          key: 'paypercallminute',
          label: 'Pay per call/minute',
        },
        {
          key: 'hourlyrate',
          label: 'Hourly rate',
        },
        {
          key: 'weeklyflatrate',
          label: 'Weekly flat rate',
        },
        {
          key: 'monthlyflatrate',
          label: 'Monthly flat rate',
        },
      ],
    },
  },
];

export const Amenities = {
  component: EditListingFeaturesForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingFeaturesForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save amenities',
    updated: false,
    updateInProgress: false,
    disabled: false,
    ready: false,
    filterConfig,
  },
  group: 'forms',
};
