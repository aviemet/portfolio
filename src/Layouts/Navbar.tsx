import React from 'react'
import { Avatar, Box, Stack } from '@mantine/core'

import NavLink from './NavLink'

const Navbar = () => {
	return (
		<Box sx={ theme => ({
			width: theme.other.navbar.width,
			background: theme.fn.linearGradient(165, '#560f9d', '#300d82'),
			borderRadius: 10,
			height: '100%',
			boxShadow: theme.shadows.xl,
			padding: 4,
			'a': {
				textDecoration: 'none',
				color: theme.white,
			},
		}) }>
			<Stack justify="space-between" align="center" sx={ {
				height: '100%',
				width: '100%'
			} }>
				<Stack align="center" justify="space-around" sx={ { width: '100%' } }>
					<Avatar size="xl" sx={ { borderRadius: '50%' } } />
					<Stack sx={ theme => ({ width: '100%' }) }>
						<NavLink href="#">Projects</NavLink>
						<NavLink href="#">Blog</NavLink>
					</Stack>
				</Stack>


				<div>Bottom</div>
			</Stack>
		</Box>
	)
}

export default Navbar
