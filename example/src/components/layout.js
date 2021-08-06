import "./layout.css"

import {graphql, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"

import SEO from "../../../."
import Header from "./header"

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
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

            <Header siteTitle={data.site.siteMetadata?.title || "Title"} />

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
