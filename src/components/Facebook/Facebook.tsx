import {FC} from "react"
import {Helmet} from "react-helmet"

type ObjectType =
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other"
    | "article"
    | "book"
    | "profile"
    | "website"

type FacebookProps = {
    url?: string
    title?: string
    description?: string
    image?: string
    type?: ObjectType
}

const Facebook: FC<FacebookProps> = ({
    url,
    type,
    title,
    description,
    image,
}) => {
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

export default Facebook
export type {FacebookProps, ObjectType}
