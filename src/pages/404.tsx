import * as React from 'react'
import { Link, graphql, type PageProps } from 'gatsby'

import Layout from 'components/Layout'
import Seo from 'components/Seo'

const NotFoundPage = ({ data, location }: PageProps<Queries.NotFoundPageQuery>) => {
	return (
		<Layout location={ location } title={ data.site?.siteMetadata?.title || '' }>
			<Seo title="404: Not Found" />
			<h1>404: Not Found</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			<Link to="/">Why don't we just head on home</Link>
		</Layout>
	)
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
