import {useStaticQuery, graphql} from "gatsby"

const useSiteMetadata = () => {
    const query = graphql`
        {
            site {
                siteMetadata {
                    url
                    title
                    description
                    keywords
                    twitter
                }
            }
        }
    `

    const data = useStaticQuery(query)
    const {siteMetadata} = data.site

    return siteMetadata
}

export default useSiteMetadata
