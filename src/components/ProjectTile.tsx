import { Box, Title, useMantineTheme } from '@mantine/core'
import React from 'react'

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
type posts = Queries.BlogIndexQuery['allMarkdownRemark']['nodes']
type post = ArrayElement<posts>

const ProjectTile = ({ post }: { post: post }) => {
	const theme = useMantineTheme()

	return (
		<Box sx={ theme => ({
			background: theme.white,
			boxShadow: theme.shadows.sm,
			borderRadius: theme.radius.md,
			padding: 16,
			color: theme.black,
		}) }>
			<Title order={ 2 } color={ theme.primaryColor }>{ post?.frontmatter?.title }</Title>
			<Title order={ 6 } color={ theme.colors.violet[6] }>{ post?.frontmatter?.description }</Title>
		</Box>
	)
}

export default ProjectTile
