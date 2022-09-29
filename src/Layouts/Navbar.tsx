import React, { useEffect, useRef } from 'react'
import { Avatar, Box, Stack } from '@mantine/core'
import { useMouse } from '@mantine/hooks'
import { Home, AppWindow, Article } from 'tabler-icons-react'
import { constrain } from '../lib'
import NavLink from './NavLink'

const Navbar = () => {
	const { x, y } = useMouse()
	const navbarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if(!navbarRef.current) return

		const constrainX = 40
		const constrainY = 100
		const box = navbarRef.current.getBoundingClientRect()
		const calcX = -(y - box.y - (box.height / 2)) / constrainX
		const calcY = (x - box.x - (box.width / 2)) / constrainY

		navbarRef.current.style.transform = `perspective(2000px) rotateX(${constrain(calcX, -8, 8)}deg) rotateY(${constrain(calcY, 0, 13)}deg)`
	}, [x, y])

	return (
		<Box ref={ navbarRef } sx={ theme => ({
			width: theme.other.navbar.width,
			background: theme.fn.linearGradient(165, '#560f9d', '#300d82'),
			borderRadius: theme.radius.lg,
			height: '100%',
			maxHeight: 700,
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
