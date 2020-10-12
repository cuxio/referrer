import { getReferrer } from '../src';
import { ReferrerName, ReferrerType } from '../src/shared/referrer.interface';

const GOOGLE = 'https://www.google.com/';

describe('Test getReferrer method', () => {
  it('using google search', () => {
    expect(getReferrer(GOOGLE)).toEqual({
      type: ReferrerType.SEARCH,
      name: ReferrerName.GOOGLE,
    });
  });
});
