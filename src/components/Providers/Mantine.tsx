import React from 'react'
import { MantineProvider } from '@mantine/core'

const Mantine: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<MantineProvider theme={ {
			fontFamily: 'Open Sans'
		} } withGlobalStyles withNormalizeCSS>
			{ children }
		</MantineProvider>
	)
}

export default Mantine
