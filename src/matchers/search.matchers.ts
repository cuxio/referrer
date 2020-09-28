import { ReferrerMatcher, ReferrerName, ReferrerType } from '../shared';

export const searchMatchers: ReferrerMatcher[] = [
  {
    type: ReferrerType.SEARCH,
    name: ReferrerName.GOOGLE,
    contains: ['google'],
  },
  {
    type: ReferrerType.SEARCH,
    name: ReferrerName.BING,
    contains: ['bing.com'],
  },
  {
    type: ReferrerType.SEARCH,
    name: ReferrerName.YAHOO,
    contains: ['search.yahoo'],
  },
  {
    type: ReferrerType.SEARCH,
    name: ReferrerName.BAIDU,
    contains: ['baidu.com'],
  },
  {
    type: ReferrerType.SEARCH,
    name: ReferrerName.YANDEX,
    contains: ['yandex.com'],
  },
];
