import { ProfileTabId } from '@enums/index';

type ProfileLink = '/edit' | '/tariffs' | '/paymants';

export const ACTIVE_PROFILE_TAB: Record<ProfileTabId, ProfileLink> = {
  edit: '/edit',
  tariffs: '/tariffs',
  paymants: '/paymants',
};
