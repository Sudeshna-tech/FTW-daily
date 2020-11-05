import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-florida',
    predictionPlace: {
      address: 'Florida, US',
      bounds: new LatLngBounds(new LatLng(27.6648, 81.760254), new LatLng(27.6648, 81.760254)),
    },
  },
  {
    id: 'default-alaska',
    predictionPlace: {
      address: 'Alaska, US',
      bounds: new LatLngBounds(new LatLng(64.2008, 149.4937), new LatLng(64.2008, 149.4937)),
    },
  },
  {
    id: 'default-new york',
    predictionPlace: {
      address: 'New York, US',
      bounds: new LatLngBounds(new LatLng(40.7128, 74.0060), new LatLng(40.7128, 74.0060)),
    },
  },
  {
    id: 'default-ohio',
    predictionPlace: {
      address: 'Ohio, US',
      bounds: new LatLngBounds(new LatLng(40.4173, 82.9071), new LatLng(40.4173, 82.9071)),
    },
  },
  {
    id: 'default-los angeles',
    predictionPlace: {
      address: 'Los Angeles, US',
      bounds: new LatLngBounds(new LatLng(34.0522, 118.2437), new LatLng(34.0522, 118.2437)),
    },
  },
];
