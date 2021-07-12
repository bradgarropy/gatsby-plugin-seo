import {useLocation} from "@reach/router"
import PropTypes from "prop-types"
import React from "react"

import useSiteMetadata from "../hooks/useSiteMetadata"
import Facebook from "./Facebook"
import Meta from "./Meta"
import Twitter from "./Twitter"

const SEO = ({title = "", description = "", image = ""}) => {
    const {pathname} = useLocation()
    const meta = useSiteMetadata()

    const defaultTitle = meta.title
    const defaultDescription = meta.description
    const defaultTwitterImage = `${meta.url}/twitter.png`
    const defaultFacebookImage = `${meta.url}/facebook.png`

    const seoImage = `${meta.url}${image}`
    const seoUrl = `${meta.url}${pathname}`

    return (
        <>
            <Meta
                title={title || defaultTitle}
                description={description ?? defaultDescription}
                keywords={meta.keywords}
                icon={`${meta.url}/favicon.png`}
            />

            <Facebook
                url={seoUrl}
                title={title || defaultTitle}
                description={description ?? defaultDescription}
                image={image ? seoImage : defaultFacebookImage}
            />

            <Twitter
                site={meta.twitter}
                title={title || defaultTitle}
                description={description ?? defaultDescription}
                image={image ? seoImage : defaultTwitterImage}
            />
        </>
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default SEO
