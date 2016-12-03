import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from './screens/HomeScreen';
import GarbageScreen from './screens/GarbageScreen';
import GarbageSchedule from './screens/GarbageScheduleScreen';
import GarbageMonster from './screens/GarbageMonster';

/**
 * This is where we map route names to route components. Any React
 * component can be a route, it only needs to have a static `route`
 * property defined on it, as in HomeScreen below
 */
export default createRouter(() => ({
  home: () => HomeScreen,
  garbage: () => GarbageScreen,
  garbage_schedule: () => GarbageSchedule,
  garbage_monster: () => GarbageMonster,
}));
