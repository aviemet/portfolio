import { Box } from '@mantine/core'
import React from 'react'

interface NavLinkProps {
	children: React.ReactNode
	href: string
}

const NavLink = ({ children, href }: NavLinkProps) => {
	return (
		<Box sx={ theme => ({
			width: '100%',
			background: 'rgba(255, 255, 255, 0.3)',
			borderRadius: theme.radius.md,
			padding: '8px 16px',
		}) }>
			<a href={ href }>{ children }</a>
		</Box>
	)
}

export default NavLink
