import React from 'react'
import MantineProvider from './src/components/Providers/Mantine'

export const wrapRootElement = ({ element }) => (
	<MantineProvider>{ element }</MantineProvider>
)
