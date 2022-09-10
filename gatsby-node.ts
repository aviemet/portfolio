import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import type { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	// Get all markdown blog posts sorted by date
	const result: {
		errors?: any
		data?: Queries.CreatePagesQuery
	} = await graphql(`
		query CreatePages {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: ASC }
				limit: 1000
			) {
				nodes {
					id
					fields {
						slug
					}
					frontmatter {
						templateKey
					}
				}
			}
		}
	`)

	if (result.errors) {
		reporter.panicOnBuild(
			'There was an error loading your blog posts',
			result.errors
		)
		return
	}

	const blogTemplate = path.resolve('./src/templates/blogPost.tsx')
	const projectTemplate = path.resolve('./src/templates/projectPost.tsx')

	const posts = result.data?.allMarkdownRemark.nodes || []

	posts.forEach((post, index) => {
		const previousPostId = index === 0 ? null : posts[index - 1].id
		const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

		let template: string
		switch(post.frontmatter?.templateKey) {
			case 'project':
				template = projectTemplate
				break
			case 'blog':
			default:
				template = blogTemplate
		}

		createPage({
			path: post.fields?.slug || '',
			component: template,
			context: {
				id: post.id,
				previousPostId,
				nextPostId,
			},
		})
	})
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === 'MarkdownRemark') {
		const value = createFilePath({ node, getNode })

		createNodeField({
			name: 'slug',
			node,
			value,
		})
	}
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
	const { createTypes } = actions

	// Explicitly define the siteMetadata {} object
	// This way those will always be defined even if removed from gatsby-config.js

	// Also explicitly define the Markdown frontmatter
	// This way the "MarkdownRemark" queries will return `null` even when no
	// blog posts are stored inside "content/blog" instead of returning an error
	createTypes(`
		type SiteSiteMetadata {
			author: Author
			siteUrl: String
			social: Social
		}

		type Author {
			name: String
			summary: String
		}

		type Social {
			twitter: String
		}

		type MarkdownRemark implements Node {
			frontmatter: Frontmatter
			fields: Fields
		}

		type Frontmatter {
			title: String
			description: String
			date: Date @dateformat
		}

		type Fields {
			slug: String
		}
	`)
}
