import PropTypes from "prop-types"
import React from "react"
import {Helmet} from "react-helmet"

const Meta = ({title, description, keywords, icon}) => {
    return (
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords.join(", ")} />}
            {icon && <link rel="icon" href={icon} />}
        </Helmet>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
}

export default Meta
