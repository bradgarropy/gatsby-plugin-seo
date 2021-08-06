# 🔎 gatsby-plugin-seo

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_SEO plugin for [Gastby][gatsby]. Supports [Facebook][facebook], [Twitter][twitter], [Open Graph][og], and `meta` tags._

## 📦 Installation

This package is installable from [npm][npm].

```shell
npm install @bradgarropy/gatsby-plugin-seo
```

## 🥑 Usage

To add a base set of SEO tags, create a [custom `<Layout/>` component][layout] and add the `<SEO/>` component there. The SEO tags will render for every route in your site.

```jsx
// .src/components/Layout.js

import SEO from "@bradgarropy/next-seo"

const Layout = ({children}) => {
    return (
        <>
            <SEO title="My website" description="A blog and portfolio" />
            {children}
        </>
    )
}

export default Layout
```

If you want to override SEO tags on individual pages, use the `<SEO/>` component and only include the props that you want to update. For example, if you added `<SEO/>` in the `Layout.js` file as shown above, and then included `<SEO/>` in the `about.js` file as shown below, the `description` would be overwritten to be `Learn more about me`.

```jsx
// .src/pages/about.js

import SEO from "@bradgarropy/next-seo"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <SEO description="Learn more about me" />
            <h1>about</h1>
        </Layout>
    )
}

export default AboutPage
```

With this capability, you can create a default set of SEO tags, and then tailor certain properties on specific pages.

## 📖 API Reference

### `<SEO>`

| Name             | Required | Example                            | Description                                                |
| :--------------- | :------: | :--------------------------------- | :--------------------------------------------------------- |
| `title`          | `false`  | `"My website"`                     | Page title.                                                |
| `description`    | `false`  | `"A blog and portfolio"`           | Description of the page.                                   |
| `keywords`       | `false`  | `["website", "blog", "portfolio"]` | Array of keywords.                                         |
| `icon`           | `false`  | `"/favicon.ico"`                   | Tab icon url.                                              |
| `facebook.image` | `false`  | `"/facebook.png"`                  | Facebook share image.                                      |
| `facebook.url`   | `false`  | `"https://website.com"`            | Page URL.                                                  |
| `facebook.type`  | `false`  | `"website"`                        | Type of resource. See all types [here][types].             |
| `twitter.image`  | `false`  | `"/twitter.png"`                   | Twitter share image.                                       |
| `twitter.site`   | `false`  | `"@bradgarropy"`                   | Twitter handle of publishing site.                         |
| `twitter.card`   | `false`  | `"summary"`                        | Format of Twitter share card. See all types [here][cards]. |

All of the `SEO` props are optional. If a prop is not provided, the associated meta tag will not be rendered.

```jsx
// renders no seo tags
<SEO/>

// renders all seo tags
<SEO
    title="My website"
    description="A blog and portfolio"
    keywords={["website", "blog", "portfolio"]}
    icon="/favicon.ico"
    facebook={{
        image: "/facebook.png",
        url: "https://website.com",
        type: "website",
    }}
    twitter={{
        image: "/twitter.png",
        site: "@bradgarropy",
        card: "summary",
    }}
/>

// renders some seo tags
<SEO
    title="My blog"
    description="Posts about technology"
    keywords={["website", "blog", "technology"]}
/>
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
    <td align="center"><a href="https://www.webdevgem.com"><img src="https://avatars.githubusercontent.com/u/51011468?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gem Kosan</b></sub></a><br /><a href="https://github.com/bradgarropy/gatsby-plugin-seo/commits?author=GemKosan" title="Code">💻</a></td>
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
[github-actions]: https://github.com/bradgarropy/gatsby-plugin-seo/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/gatsby-plugin-seo/%F0%9F%9A%80%20release?style=flat-square
[codecov]: https://app.codecov.io/gh/bradgarropy/gatsby-plugin-seo
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/gatsby-plugin-seo?style=flat-square
[typescript]: https://www.typescriptlang.org/dt/search?search=%40bradgarropy%2Fgatsby-plugin-seo
[typescript-badge]: https://img.shields.io/npm/types/@bradgarropy/gatsby-plugin-seo?style=flat-square
[contributing]: https://github.com/bradgarropy/gatsby-plugin-seo/blob/master/contributing.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors]: #-contributors
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/gatsby-plugin-seo?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[layout]: https://www.gatsbyjs.com/docs/recipes/pages-layouts#creating-a-layout-component
