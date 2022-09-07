import * as React from 'react'
import { Link, graphql, type PageProps, type HeadProps } from 'gatsby'

import Bio from 'components/Bio'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const BlogPostTemplate = ({ data, location }: PageProps<Queries.BlogPostBySlugQuery>) => {
	const post = data.markdownRemark
	const siteTitle = data.site?.siteMetadata?.title || 'Title'
	const { previous, next } = data

	if(!post) return <Layout location={ location } title={ siteTitle }>Post not found</Layout>

	return (
		<Layout location={ location } title={ siteTitle }>
			<article
				className="blog-post"
				itemScope
				itemType="http://schema.org/Article"
			>
				<header>
					<h1 itemProp="headline">{ post.frontmatter?.title }</h1>
					<p>{ post.frontmatter?.date }</p>
				</header>
				<section
					dangerouslySetInnerHTML={ { __html: post.html || '' } }
					itemProp="articleBody"
				/>
				<hr />
				<footer>
					<Bio />
				</footer>
			</article>
			<nav className="blog-post-nav">
				<ul
					style={ {
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						listStyle: 'none',
						padding: 0,
					} }
				>
					<li>
						{ previous?.fields?.slug && (
							<Link to={ previous.fields.slug } rel="prev">
                ← { previous.frontmatter?.title }
							</Link>
						) }
					</li>
					<li>
						{ next?.fields?.slug && (
							<Link to={ next.fields.slug } rel="next">
								{ next.frontmatter?.title } →
							</Link>
						) }
					</li>
				</ul>
			</nav>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
				templateKey
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

export const Head = ({ data }: HeadProps<Queries.BlogPostBySlugQuery>) => <SEO
	title={ data.markdownRemark?.frontmatter?.title || '' }
	description={ data.markdownRemark?.frontmatter?.description || data.markdownRemark?.excerpt || '' }
/>
