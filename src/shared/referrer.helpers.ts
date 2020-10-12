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

/**
 * @param {string} referrer
 * @returns {string}
 */
export const parseReferrerRegex = (referrer: ReferrerType): string => {
  if (referrer === ReferrerType.ORGANIC) {
    return '';
  }

  if (!Object.values<string>(ReferrerType).includes(referrer)) {
    return referrer;
  }

  return referrerMatchers
    .filter(({ type }) => type === referrer)
    .reduce((acc, { contains }) => {
      acc.push(...contains);

      return acc;
    }, [] as string[])
    .join('|');
};
