import React, { useState } from 'react'
import { MantineProvider, Global } from '@mantine/core'
import bgImage from '../../images/bg1.jpg'

// import unsplash from 'apis/unsplash'

// unsplash.photos.getRandom({
// 	collectionIds: ['1078231'],
// 	orientation: 'landscape',
// 	contentFilter: 'high'
// }).then(res => {
// 	console.log({ res })
// })


const useTheme = (colorScheme: 'light'|'dark' = 'light') => ({
	colorScheme,
	fontFamily: 'Valera Round, Roboto, sans-serif',
	fontFamilyMonospace: 'Monaco, Courier, monospace',
	primaryColor: 'violet',
	defaultRadius: 'xl',
	transitionTimingFunction: 'ease-in-out',
	// headings: {
	// 	fontFamily: 'Greycliff CF, Roboto, sans-serif',
	// },
	shadows: {
		xs: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
		sm: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
		md: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
		lg: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
		xl: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
	},
	other: {
		colorSchemeOption: (light: any, dark: any) => colorScheme === 'dark' ? dark : light,
		navbar: {
			width: '12rem',
		},
	},
})

export { useTheme }

const Mantine: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [colorScheme, setColorScheme] = useState<'light'|'dark'>('dark')

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={ useTheme(colorScheme) }>
			<Global styles={ theme => ({
				'html, body': {
					height: '100vh',
					width: '100vw',
				},

				'body': {
					color: colorScheme === 'dark' ? theme.white : theme.black,
					// background: theme.fn.linearGradient(150, theme.colors.indigo[9], theme.colors.blue[9], theme.colors.blue[6]),
					backgroundImage: `url("${bgImage}")`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundAttachment: 'fixed',
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
