import FireBolt from './Firebolt.blits'
import DeviceModule from './DeviceModule.blits'
import AccountModule from './AccountModule.blits'
import LocalizationModule from './LocalizationModule.blits'

const FireBoltRoutes = [
  {
    path: '/examples/firebolt',
    component: FireBolt,
  },
  {
    path: '/examples/firebolt/device',
    component: DeviceModule,
  },
  {
    path: '/examples/firebolt/account',
    component: AccountModule,
  },
  {
    path: '/examples/firebolt/localization',
    component: LocalizationModule,
  },
]

export default FireBoltRoutes
