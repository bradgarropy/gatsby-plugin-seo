# 🔎 gatsby-plugin-seo

<a href="https://npmjs.com/package/@bradgarropy/gatsby-plugin-seo">
    <img alt="npm" src="https://img.shields.io/npm/v/@bradgarropy/gatsby-plugin-seo.svg?style=flat-square">
</a>

<a href="https://npmjs.com/package/@bradgarropy/gatsby-plugin-seo">
    <img alt="npm" src="https://img.shields.io/npm/dt/@bradgarropy/gatsby-plugin-seo?style=flat-square">
</a>

_SEO plugin for Gastby. Supports Facebook, Twitter, Open Graph, and `meta` tags._

### 📦 Installation

This package is installable from [npm][npm].

```shell
npm install @bradgarropy/gatsby-plugin-seo
```

### ⚙ Configuration

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

### 🥑 Usage

```javascript
import SEO from "@bradgarropy/gatsby-plugin-seo"

const App = () => <SEO />
```

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

[npm]: https://npmjs.com
