import React, { useEffect, useRef } from 'react'
import { MantineProvider, Global } from '@mantine/core'
import { useMouse } from '@mantine/hooks'
import bgImage from '../../images/bg2.jpg'

const useTheme = () => ({
	fontFamily: 'Valera Round, Roboto, sans-serif',
	fontFamilyMonospace: 'Monaco, Courier, monospace',
	primaryColor: 'violet',
	defaultRadius: 'xl',
	transitionTimingFunction: 'ease-in-out',
	shadows: {
		xs: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
		sm: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
		md: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
		lg: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
		xl: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
	},
	other: {
		navbar: {
			width: '12rem',
		},
	},
})

export { useTheme }

const Mantine: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { x, y } = useMouse()
	const bodyRef = useRef<HTMLElement>(document.body)

	useEffect(() => {
		const constrainX = 40
		const constrainY = 40
		const box = bodyRef.current.getBoundingClientRect()
		const calcX = (y - box.y - (box.height / 2)) / constrainX
		const calcY = (x - box.x - (box.width / 2)) / constrainY

		const style = `calc(50% + ${calcX}px) calc(50% + ${calcY}px)`
		bodyRef.current.style.backgroundPosition = style
	}, [x, y])

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={ useTheme() }>
			<Global styles={ theme => ({
				'html, body': {
					height: '100vh',
					width: '100vw',
				},

				'body': {
					color: theme.white,
					backgroundImage: `url("${bgImage}")`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: '150% 150%',
					backgroundAttachment: 'fixed',
					backgroundPosition: '50% 50%'
				},

				'*::selection': {
					backgroundColor: theme.colors[theme.primaryColor][2],
				},

				':root': {
					colorScheme: theme.colorScheme,
				},

				'.hidden': {
					display: 'none',
				},

				'#___gatsby, #gatsby-focus-wrapper': {
					height: '100%',
					minHeight: '100vh',
					minWidth: '100vw',
				}
			}) } />
			{ children }
		</MantineProvider>
	)
}

export default Mantine
