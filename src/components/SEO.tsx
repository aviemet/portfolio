/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useSiteMetadata } from 'hooks/useSiteMetadata'

interface SEOProps {
	title?: string
	description?: string
	lang?: string
	children?: React.ReactNode
}

const SEO = ({ description = '', title, lang = 'en', children }: SEOProps) => {
	const meta = useSiteMetadata()

	return (
		<>
			<title>{ title || meta?.title }</title>
			<meta name="description" content={ description || meta.description } />
			{ children }
		</>
	)
}

export default SEO
