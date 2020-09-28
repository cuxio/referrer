import { ReferrerMatcher, ReferrerName, ReferrerType } from '../shared/referrer.interface';

export const socialMatchers: ReferrerMatcher[] = [
  {
    type: ReferrerType.SOCIAL,
    name: ReferrerName.FACEBOOK,
    contains: ['facebook.com'],
  },
  {
    type: ReferrerType.SOCIAL,
    name: ReferrerName.TWITTER,
    contains: ['twitter.com'],
  },
  {
    type: ReferrerType.SOCIAL,
    name: ReferrerName.INSTAGRAM,
    contains: ['instagram.com'],
  },
  {
    type: ReferrerType.SOCIAL,
    name: ReferrerName.YOUTUBE,
    contains: ['youtube.com'],
  },
  {
    type: ReferrerType.SOCIAL,
    name: ReferrerName.LINKEDIN,
    contains: ['linkedin.com'],
  },
];
