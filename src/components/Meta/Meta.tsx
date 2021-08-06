import {FC} from "react"
import {Helmet} from "react-helmet"

type MetaProps = {
    title?: string
    description?: string
    keywords?: string[]
    icon?: string
}

const Meta: FC<MetaProps> = ({title, description, keywords, icon}) => {
    return (
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords.join(", ")} />}
            {icon && <link rel="icon" href={icon} />}
        </Helmet>
    )
}

export default Meta
