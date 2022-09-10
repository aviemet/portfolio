import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'Portfolio for Avram Walden',
		author: {
			name: 'Avram Walden',
			summary: 'An aspiring developer',
		},
		description: 'Me talking about the things I\'ve built',
		siteUrl: 'https://www.aviemet.com',
		social: {
			twitter: 'aviemet',
		},
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-root-import',
		'gatsby-plugin-mantine',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: `${__dirname}/content/blog`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'projects',
				path: `${__dirname}/content/projects`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 630,
						},
					},
					{
						resolve: 'gatsby-remark-responsive-iframe',
						options: {
							wrapperStyle: 'margin-bottom: 1.0725rem',
						},
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
				],
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		// {
		//   resolve: `gatsby-plugin-google-analytics`,
		//   options: {
		//     trackingId: `ADD YOUR TRACKING ID HERE`,
		//   },
		// },
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Gatsby Starter Blog',
				short_name: 'GatsbyJS',
				start_url: '/',
				background_color: '#ffffff',
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#663399`,
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
	graphqlTypegen: {
		typesOutputPath: 'src/@types/gatsby-types.d.ts',
	},
}

export default config
