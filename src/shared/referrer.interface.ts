export enum ReferrerType {
  PAID_TRAFFIC = 'paidTraffic',
  ORGANIC = 'organic',
  SEARCH = 'search',
  SOCIAL = 'social',
  OTHER = 'other',
}

export enum ReferrerName {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  BING = 'bing',
  YAHOO = 'yahoo',
  BAIDU = 'baidu',
  YANDEX = 'yandex',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube',
  LINKEDIN = 'linkedin',
}

export interface Referrer {
  type: ReferrerType;
  name?: ReferrerName | string;
}

export interface ReferrerMatcher extends Referrer {
  contains: string[];
}
