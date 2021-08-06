import PropTypes from "prop-types"
import React from "react"

import Facebook from "./Facebook"
import Meta from "./Meta"
import Twitter from "./Twitter"

const SEO = ({title, description, keywords, icon, facebook, twitter}) => {
    return (
        <>
            <Meta
                title={title}
                description={description}
                keywords={keywords}
                icon={icon}
            />

            <Facebook
                title={title}
                description={description}
                url={facebook?.url}
                image={facebook?.image}
                type={facebook?.type}
            />

            <Twitter
                title={title}
                description={description}
                image={twitter?.image}
                site={twitter?.site}
                card={twitter?.card}
            />
        </>
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
    facebook: PropTypes.shape({
        image: PropTypes.string,
        type: PropTypes.string,
        url: PropTypes.string,
    }),
    twitter: PropTypes.shape({
        image: PropTypes.string,
        card: PropTypes.string,
        site: PropTypes.string,
    }),
}

export default SEO
