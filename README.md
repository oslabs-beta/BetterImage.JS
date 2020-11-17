# BetterImage.JS Documentation

This project aims to 

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 

`<BetterImage>`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


`<App>
	<ImageList />
</App>

<ImageList>
	<BetterImage src=”./img.png”  theme=”oneImage” />
	images.map( img => {
		<BetterImage>
			{img}
		</BetterImage>
	})
</ImageList>
`