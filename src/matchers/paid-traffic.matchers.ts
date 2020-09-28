import { ReferrerMatcher, ReferrerName, ReferrerType } from '../shared/referrer.interface';

export const paidTrafficMatchers: ReferrerMatcher[] = [
  {
    type: ReferrerType.PAID_TRAFFIC,
    name: ReferrerName.GOOGLE,
    contains: ['google', 'utm_medium=cpc'],
  },
  {
    type: ReferrerType.PAID_TRAFFIC,
    name: ReferrerName.GOOGLE,
    contains: ['google', 'gclid'],
  },
  {
    type: ReferrerType.PAID_TRAFFIC,
    name: ReferrerName.FACEBOOK,
    contains: ['facebook', 'utm_medium=cpc'],
  },
  {
    type: ReferrerType.PAID_TRAFFIC,
    name: ReferrerName.BING,
    contains: ['bing.com', 'utm_medium=cpc'],
  },
  {
    type: ReferrerType.PAID_TRAFFIC,
    name: ReferrerName.YAHOO,
    contains: ['search.yahoo', 'utm_medium=cpc'],
  },
];
