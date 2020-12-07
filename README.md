# BetterImage Documentation

** Note: this project is currently under construction. Please do not download/use this until the Official release 1.0.0 is published.**

## What Is BetterImage

BetterImage enhances the image optimization and editing experience on React by providing a single component that unifies the most frequently used techniques. 

## Synopsis

BetterImage was created to facilitate React applications to render images faster. At the core, we want to bring a 

Mobile has been the go-to method to surf the web, but most Images are yet to be optimized for stellar mobile experiences. Large images with sizes 2000x2000 pixel are still fully transferred before .

99.7 % of images don't use modern image formats like WebP which is 30% smaller than JPEG

## 1 Installation 

In the project directory, you can run:

### 1.1 Getting Started

BetterImage requires one modification in the Webpack to make it work properly. 



In case of using `npx create-react-app`

### 1.2 Adding BetterImage

### 1.4 Known Installation Bugs
nodemon or react dev server not running (vice versa)

issue with node gui (represented as ____chkstk_darwin)

[NodeGUI Issue](https://github.com/nodegui/nodegui/issues/391)


## 2 Main Concepts

### 2.1 BetterImage Component

#### 2.1.1 Example of Using BetterImage Component

BetterImage component 

`<BetterImage>`

`<App>
	<ImageList />
</App>

<ImageList>
	<BetterImage src=”./img.png” resize="200x200" theme=”oneImage” />
	images.map( img => {
		<BetterImage>
			{img}
		</BetterImage>
	})
</ImageList>
`

### 2.2 Features
Image compression, resize, 
Works with both Class and Hooks
SEO optimization



## 3 Advanced Guides

### 3.1 Default Parameters
When BetterImage component doesn't receive optional parameters, it defaults to constant parameters specified in the code. The deafult parameters are as following:


BetterImage component uses `ImportAll` syntax to import all converted images to the rendering webpage. This step requires file-loader to disable the `esModule` by setting it to `false`. 

## 4 Results



## 5 Reference

### 6.1 Related Resources

## 7 FAQ


### `npm run build`

[BetterImage](https://www.betterimagejs.com) 




