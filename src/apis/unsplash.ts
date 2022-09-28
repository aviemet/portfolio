import { createApi } from 'unsplash-js'
console.log({ key: process.env.UNSPLASH_KEY! })
type Photo = {
	id: number
	width: number
	height: number
	urls: { large: string, regular: string, raw: string, small: string }
	color: string | null
	user: {
		username: string
		name: string
	}
};

export default createApi({
	// Don't forget to set your access token here!
	// See https://unsplash.com/developers
	accessKey: process.env.UNSPLASH_KEY!
})
