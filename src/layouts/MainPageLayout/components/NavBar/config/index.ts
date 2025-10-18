import { MeterNameId } from '@enums/index';

type NavLink = '/electricity' | '/water' | '/gas' | '/profile';

export const ACTIVE_TAB: Record<MeterNameId, NavLink> = {
  water: '/water',
  gas: '/gas',
  profile: '/profile',
  electricity: '/electricity',
};
