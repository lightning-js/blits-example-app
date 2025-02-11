const modules = {
  device: {
    about: "A module for querying about the device and it's capabilities",
    methods: [
      {
        name: 'make',
        about: 'The manufacturer of the device model',
      },
      {
        name: 'model',
        about: 'The manufacturer designated model of the device',
      },
      {
        name: 'name',
        about: 'The human readable name of the device',
      },
      {
        name: 'network',
        about: 'The current network status and type',
      },
      {
        name: 'platform',
        about: 'Platform identifier for the device',
      },
    ],
  },
  account: {
    about: 'A module for querying about the device account',
    methods: [
      {
        name: 'id',
        about: 'The platform back-office account identifier',
      },
      {
        name: 'uid',
        about: 'Unique id for the current app & account',
      },
    ],
  },
  localization: {
    about: 'Methods for accessing location and language preferences',
    methods: [
      {
        name: 'countryCode',
        about: 'Get the ISO 3166-1 alpha-2 code for the country device is located in',
      },
      {
        name: 'language',
        about: 'Get the ISO 639 1/2 code for the preferred language',
      },
      {
        name: 'latlon',
        about: 'Approximate latitude and longitude coordinates of the device location',
      },
      {
        name: 'locality',
        about: 'The locality/city the device is located in',
      },
      {
        name: 'postalCode',
        about: 'Get the postal code the device is located in',
      },
    ],
  },
}

export default modules
