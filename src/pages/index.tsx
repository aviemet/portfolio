import React, { useEffect, useState } from 'react'
import { Link, graphql, type PageProps } from 'gatsby'
import { Box, Transition, Title, Container } from '@mantine/core'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

const BlogIndex = ({ data, location }: PageProps<Queries.BlogIndexQuery>) => {
	const [showSubHeading, setShowSubHeading] = useState(false)
	const [heroheight, setHeroHeight] = useState('100vh')

	const siteTitle = data.site?.siteMetadata?.title || 'Title'
	const posts = data.allMarkdownRemark.nodes

	useEffect(() => {
		setTimeout(() => {
			setShowSubHeading(true)

			setTimeout(() => {
				setHeroHeight('80vh')
			}, 500)

		}, 1000)
	}, [])

	return (
		<Layout location={ location } title={ siteTitle }>
			<Box sx={ {
				width: '100vw',
				height: heroheight,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				transition: 'height 500ms ease-in-out'
			} }>
				<Title order={ 2 }>Oh, you found my site...</Title>
				<Box>&nbsp;
					<Transition mounted={ showSubHeading } transition="fade" duration={ 1000 } timingFunction="ease">
						{ styles => <span style={ styles }>Now what?</span> }
					</Transition>
				</Box>
			</Box>

			<Container>
				<Box>
					<Title order={ 3 }>Well, I guess you could look at some things I built</Title>
				</Box>

				<ol style={ { listStyle: 'none' } }>
					{ posts.map(post => {
						const title = post.frontmatter?.title || post.fields?.slug

						return (
							<li key={ post.fields?.slug }>
								<article>
									<header>
										<h2>
											{ post.fields?.slug && <Link to={ post.fields.slug }>
												<span>{ title }</span>
											</Link> }
										</h2>
										<small>{ post.frontmatter?.date }</small>
									</header>
									<section>
										<p
											dangerouslySetInnerHTML={ {
												__html: post.frontmatter?.description || post.excerpt || '',
											} }
											itemProp="description"
										/>
									</section>
								</article>
							</li>
						)
					}) }
				</ol>
			</Container>
		</Layout>
	)
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

export const Head = () => <SEO />
