import { getReferrerRegex } from '../src';
import { ReferrerType } from '../src/shared/referrer.interface';

describe('Test getReferrerRegex method', () => {
  it('for Paid Traffic', () => {
    expect(getReferrerRegex(ReferrerType.PAID_TRAFFIC)).toEqual(
      'google|utm_medium=cpc|google|gclid|facebook|utm_medium=cpc|bing.com|utm_medium=cpc|search.yahoo|utm_medium=cpc'
    );
  });

  it('for Organic', () => {
    expect(getReferrerRegex(ReferrerType.ORGANIC)).toEqual('');
  });

  it('for Search', () => {
    expect(getReferrerRegex(ReferrerType.SEARCH)).toEqual(
      'google|bing.com|search.yahoo|baidu.com|yandex.com'
    );
  });

  it('for Social', () => {
    expect(getReferrerRegex(ReferrerType.SOCIAL)).toEqual(
      'facebook.com|twitter.com|instagram.com|youtube.com|linkedin.com'
    );
  });

  it('for Other', () => {
    expect(getReferrerRegex(ReferrerType.OTHER)).toEqual('');
  });
});
