import React, { useEffect, useState } from 'react'
import { Link, graphql, type PageProps } from 'gatsby'
import { Box, Transition, Title, Container } from '@mantine/core'

import Layout from 'Layouts'
import SEO from 'components/SEO'

import ProjectTile from 'components/ProjectTile'
import BlogTile from 'components/BlogTile'

const BlogIndex = ({ data, location }: PageProps<Queries.BlogIndexQuery>) => {
	const siteTitle = data.site?.siteMetadata?.title || 'Title'
	const posts = data.allMarkdownRemark.nodes

	return (
		<Layout location={ location } title={ siteTitle }>
			<Container>
				<Box component="section" sx={ theme => ({
					paddingTop: 32,
					paddingBottom: 32,
				}) }>
					<Title order={ 1 }>You found it! You found my site!</Title>
					<Title order={ 2 } size="h4">Not much to do here, but you could look at some things I&apos;ve done</Title>
				</Box>

				<section>
					<Title order={ 3 } size="h4">These are some of my projects:</Title>
					{ posts.map(post => {
						return (
							<ProjectTile key={ post.fields?.slug } post={ post } />
						)
					}) }
				</section>

				<section>
					<Title order={ 3 } size="h4">These my recent blog posts:</Title>
					{ posts.map(post => {
						return (
							<ProjectTile key={ post.fields?.slug } post={ post } />
						)
					}) }
				</section>

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
