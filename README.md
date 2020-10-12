<p align="center">
  <img src="https://static.cux.io/logo.svg" width="200" alt="Cux.io" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@cux/referrer">
    <img src="https://img.shields.io/github/package-json/v/cuxio/referrer" />
  </a>
  <a href="https://github.com/cuxio/referrer/actions">
    <img src="https://img.shields.io/github/workflow/status/cuxio/referrer/CI" />
  </a>
  <a href="https://github.com/cuxio/referrer/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/cuxio/referrer" />
  </a>
</p>

<br />

<p align="center">
  Micro library for parsing a referrer by type
</p>

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
