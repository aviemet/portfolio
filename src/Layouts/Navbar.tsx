import React from 'react'
import { ActionIcon, Avatar, Box, Stack } from '@mantine/core'
import { Home, AppWindow, Article } from 'tabler-icons-react'

import NavLink from './NavLink'

const Navbar = () => {
	return (
		<Box sx={ theme => ({
			width: theme.other.navbar.width,
			background: theme.fn.linearGradient(165, '#560f9d', '#300d82'),
			borderRadius: theme.radius.lg,
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
						<NavLink href="/" icon={ <Home /> }>Home</NavLink>
						<NavLink href="#" icon={ <AppWindow /> }>Projects</NavLink>
						<NavLink href="#" icon={ <Article /> }>Blog</NavLink>
					</Stack>
				</Stack>


				<div>Bottom</div>
			</Stack>
		</Box>
	)
}

export default Navbar
