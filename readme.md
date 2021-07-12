# 🔎 gatsby-plugin-seo

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_SEO plugin for [Gastby][gatsby]. Supports [Facebook][facebook], [Twitter][twitter], [Open Graph][og], and `meta` tags._

## 📦 Installation

This package is installable from [npm][npm].

```shell
npm install @bradgarropy/gatsby-plugin-seo
```

## ⚙ Configuration

Head over to the `gatsby-config.js` file and add `@bradgarropy/gatsby-plugin-seo` to the list of `plugins`.

```javascript
// gatsby-config.js

module.exports = {
    siteMetadata: {
        url: "https://bradgarropy.com",
        title: "Brad Garropy",
        description: "🏡 My home on the web.",
        keywords: ["gatsby", "portfolio"],
        twitter: "bradgarropy",
    },
    plugins: ["@bradgarropy/gatsby-plugin-seo"],
}
```

Some fields in `siteMetadata` are also required.

| Name          | Description                          |
| ------------- | ------------------------------------ |
| `url`         | Base url of the website.             |
| `title`       | Document title shown in the browser. |
| `description` | Meta description of the page.        |
| `keywords`    | Keywords describing the page.        |
| `twitter`     | Twitter handle, without the `@`.     |

This plugin also expects the default social media cards and favicon to be availabe at `/facebook.png`, `/twitter.png`, and `/favicon.png`. This can be accomplished by placing these images in the `static` directory.

```
static/
  |  facebook.png
  |  favicon.png
  |  twitter.png
```

## 🥑 Usage

This plugin exports an `<SEO>` component that can be used without any `props`.

```javascript
import SEO from "@bradgarropy/gatsby-plugin-seo"

const App = () => <SEO />
```

If you want to customize the SEO properties on each page, the `<SEO>` component accepts three `props`: `title`, `description`, and `image`.

```javascript
import SEO from "@bradgarropy/gatsby-plugin-seo"

const App = () => (
    <SEO
        title="Custom page title."
        description="My custom description."
        image="https://github.com/bradgarropy.png"
    />
)
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/gatsby-plugin-seo/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/gatsby-plugin-seo/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/gatsby-plugin-seo/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[gatsby]: https://gatsbyjs.org
[facebook]: https://www.facebook.com/profile.php?id=7933107
[twitter]: https://twitter.com/bradgarropy
[og]: https://ogp.me
[npm]: https://www.npmjs.com/package/@bradgarropy/gatsby-plugin-seo
[issues]: https://github.com/bradgarropy/gatsby-plugin-seo/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
[version-badge]: https://img.shields.io/npm/v/@bradgarropy/http.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/http?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=@bradgarropy/gatsby-plugin-seo
[size-badge]: https://img.shields.io/bundlephobia/minzip/@bradgarropy/http?style=flat-square
[contributing]: https://github.com/bradgarropy/gatsby-plugin-seo/blob/master/contributing.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors]: #-contributors
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/gatsby-plugin-seo?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
