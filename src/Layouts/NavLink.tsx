import React, { useState } from 'react'
import { ActionIcon, Box, Group } from '@mantine/core'
import { Link } from 'gatsby'

interface NavLinkProps {
	children: React.ReactNode
	href: string
	icon: React.ReactNode
}

const NavLink = ({ children, href, icon }: NavLinkProps) => {
	const [wrapperClassname, setWrapperClassname] = useState('')

	const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
		if(isCurrent) {
			setWrapperClassname('active')
			return { className: 'active' }
		}
		return {}
	}

	return (
		<Box className={ wrapperClassname } sx={ theme => ({
			width: '100%',
			borderRadius: theme.radius.md,
			padding: '8px 8px',

			'&.active': {
				background: 'rgba(255, 255, 255, 0.3)',
			},
		}) }>
			<Link to={ href } getProps={ isActive }>
				<Group spacing="xs">
					<ActionIcon size="xl" variant="transparent">{ icon }</ActionIcon>
					{ children }
				</Group>
			</Link>
		</Box>
	)
}

export default NavLink
