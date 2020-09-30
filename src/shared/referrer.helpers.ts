import { Referrer, ReferrerType } from './referrer.interface';
import { referrerMatchers } from '../matchers';

/**
 * @param {string} referrer
 * @returns {Referrer}
 */
export const parseReferrer = (referrer: string): Referrer => {
  if (!referrer) {
    return {
      type: ReferrerType.ORGANIC,
    };
  }

  const referrerMatch = referrerMatchers.find(matcher => {
    return matcher.contains.every(phrase => referrer.indexOf(phrase) > -1);
  });

  if (referrerMatch) {
    return {
      type: referrerMatch.type,
      name: referrerMatch.name,
    };
  }

  return {
    type: ReferrerType.OTHER,
    name: referrer,
  };
};
