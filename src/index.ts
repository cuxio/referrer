import { Referrer, ReferrerType } from './shared/referrer.interface';
import { parseReferrer, parseReferrerRegex } from './shared/referrer.helpers';

/**
 * @param {string} referrer
 * @returns {Referrer}
 */
export const getReferrer = (referrer: string): Referrer => {
  return parseReferrer(referrer);
};

/**
 * @param {ReferrerType} referrer
 * @returns {string}
 */
export const getReferrerRegex = (referrer: ReferrerType): string => {
  return parseReferrerRegex(referrer);
};
