import "./layout.css"

import PropTypes from "prop-types"
import * as React from "react"

import SEO from "../../../."
import Header from "./header"

const Layout = ({children}) => {
    const seo = {
        title: "My website",
        description: "A blog and portfolio",
        keywords: ["website", "blog", "portfolio"],
        icon: "/favicon.ico",
        themeColor: "#663399",
        colorScheme: "light",
        facebook: {
            image: "/facebook.png",
            url: "https://website.com",
            type: "website",
        },
        twitter: {
            image: "/twitter.png",
            site: "@bradgarropy",
            card: "summary",
        },
    }

    return (
        <>
            <SEO {...seo} />

            <Header siteTitle="Header" />

            <div
                style={{
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "0 1.0875rem 1.45rem",
                }}
            >
                <main>{children}</main>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
