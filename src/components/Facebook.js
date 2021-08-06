import PropTypes from "prop-types"
import React from "react"
import {Helmet} from "react-helmet"

const Facebook = ({url, type, title, description, image}) => {
    return (
        <Helmet>
            {url && <meta property="og:url" content={url} />}
            {type && <meta property="og:type" content={type} />}
            {title && <meta property="og:title" content={title} />}

            {description && (
                <meta property="og:description" content={description} />
            )}

            {image && <meta property="og:image" content={image} />}
        </Helmet>
    )
}

Facebook.propTypes = {
    url: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Facebook
