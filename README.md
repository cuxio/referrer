# Referrer

Micro library created to parse and return proper referrer parameters.

## Installation

```
yarn add @cux/referrer
```

## Usage

```
import { getReferrer } from '@cux/referrer';

getReferrer('https://google.com/');
```

You should receive the following object: 
```
{
  type: ReferrerType;
  name: ReferrerName | string;
}
```

## Types of referrers

- Paid Traffic (Google, Facebook, Bing. Yahoo campaigns)
- Search (Google, Bing, Yahoo, Baidu, Yandex)
- Social (Facebook, Twitter, Instagram, Youtube, Linkedin)
- Organic (direct link)
- Other
