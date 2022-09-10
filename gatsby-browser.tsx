import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import MantineProvider from './src/components/Providers/Mantine'

export const wrapRootElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
	<MantineProvider>{ element }</MantineProvider>
)
