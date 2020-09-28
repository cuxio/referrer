import { Referrer, parseReferrer } from './shared';

/**
 * @param {string} referrer
 * @returns {Referrer}
 */
export const getReferrer = (referrer: string): Referrer => {
  return parseReferrer(referrer);
};
