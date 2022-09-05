import React from 'react'
import MantineProvider from 'components/Providers/Mantine'

export const wrapRootElement = ({ element }) => (
	<MantineProvider>{ element }</MantineProvider>
)
