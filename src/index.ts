import { Referrer } from './shared/referrer.interface';
import { parseReferrer } from './shared/referrer.helpers';

/**
 * @param {string} referrer
 * @returns {Referrer}
 */
export const getReferrer = (referrer: string): Referrer => {
  return parseReferrer(referrer);
};
