import * as React from 'react'
import { Link } from 'gatsby'
import { Box, Group } from '@mantine/core'
import Navbar from './Navbar'

interface LayoutProps {
	location: Location
	title: string
	children?: React.ReactNode
}

const Layout = ({ children, location, title }: LayoutProps) => {
	const rootPath = `${__PATH_PREFIX__}/`
	const isRootPath = location.pathname === rootPath

	return (
		<Box data-is-root-path={ isRootPath } sx={ {
			padding: 16,
			height: '100%',
		} }>
			<Box sx={ theme => ({
				padding: 24,
				height: '100%',
				backgroundColor: 'rgba(255, 255, 255, 0.275)',
				border: '1px solid rgba(255, 255, 255, 0.4)',
				borderRadius: theme.radius.xl,
				backdropFilter: 'blur(50px)',
				boxShadow: theme.shadows.xl,
			}) }>
				<Group noWrap align="stretch" sx={ {
					height: '100%',
				} }>
					<Box sx={ {
						height: '100%',
					} }>
						<Navbar />
					</Box>
					<Box>
						<main>{ children }</main>
					</Box>
				</Group>
			</Box>
		</Box>
	)
}

export default Layout
