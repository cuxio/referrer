import { getReferrer } from '../src';
import { ReferrerName, ReferrerType } from '../src/shared';

const GOOGLE = 'https://www.google.com/';

describe('Getting referrer object', () => {
  it('From google search', () => {
    expect(getReferrer(GOOGLE)).toEqual({
      type: ReferrerType.SEARCH,
      name: ReferrerName.GOOGLE,
    });
  });
});
