import {FC} from "react"
import {Helmet} from "react-helmet"

type TwitterProps = {
    title?: string
    description?: string
    image?: string
    card?: string
    site?: string
}

const Twitter: FC<TwitterProps> = ({card, site, title, description, image}) => {
    return (
        <Helmet>
            {card && <meta name="twitter:card" content={card} />}
            {site && <meta name="twitter:site" content={site} />}
            {title && <meta name="twitter:title" content={title} />}

            {description && (
                <meta name="twitter:description" content={description} />
            )}

            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    )
}

export default Twitter
export {TwitterProps}
