import PropTypes from "prop-types"
import React from "react"
import {Helmet} from "react-helmet"

const Twitter = ({card, site, title, description, image}) => {
    return (
        <Helmet>
            {card && <meta name="twitter:card" content={card} />}
            {site && <meta name="twitter:site" content={`@${site}`} />}
            {title && <meta name="twitter:title" content={title} />}

            {description && (
                <meta name="twitter:description" content={description} />
            )}

            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    )
}

Twitter.propTypes = {
    card: PropTypes.string,
    site: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Twitter
