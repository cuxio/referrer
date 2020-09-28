import { paidTrafficMatchers } from './paid-traffic.matchers';
import { searchMatchers } from './search.matchers';
import { socialMatchers } from './social.matchers';

export const referrerMatchers = [
  ...paidTrafficMatchers,
  ...searchMatchers,
  ...socialMatchers,
];
