import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {DASHBOARD, INVENTORY_LIST, USER_PROFILE} from '../constants/routeNames';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? INVENTORY_LIST;

  switch (routeName) {
    case INVENTORY_LIST:
      return 'Inventory';
    case USER_PROFILE:
      return 'My profile';
    case DASHBOARD:
      return 'Dashboard';
  }
}
export default getHeaderTitle;