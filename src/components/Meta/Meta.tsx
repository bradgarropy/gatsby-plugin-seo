import {FC} from "react"
import {Helmet} from "react-helmet"

type MetaProps = {
    title?: string
    description?: string
    keywords?: string[]
    icon?: string
    themeColor?: string
    colorScheme?: ColorScheme
}

type ColorScheme = "normal" | "light" | "dark" | "only light"

const Meta: FC<MetaProps> = ({
    title,
    description,
    keywords,
    icon,
    themeColor,
    colorScheme,
}) => {
    return (
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords.join(", ")} />}
            {icon && <link rel="icon" href={icon} />}
            {themeColor && <meta name="theme-color" content={themeColor} />}
            {colorScheme && <meta name="color-scheme" content={colorScheme} />}
        </Helmet>
    )
}

export default Meta
export type {ColorScheme, MetaProps}
