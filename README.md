# BetterImage Documentation

** Note: this project is currently under construction. Please do not download/use this until the Alpha verion 0.1.0 is published.**

## Why Use BetterImage

BetterImage enhances the image optimization and editing experience on React by providing a single component that unifies the most frequently used techniques. For example, the 

This is advantageous for developers for several reasons: 

## Business Case for BetterImage

BetterImage was created to facilitate the use of images in React applications. At the core, we want to bring a 

Users use phones to surf the web, but some Images are not optimized. That means sizes like 2000x2000 pixel images are only getting displayed 100x100 pixel.

99.7 % of images don't use modern image formats like WebP which is 30% smaller than JPEG

## 1 Installation 

In the project directory, you can run:

### 1.1 Getting Started

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




## 4 Results



## 5 Reference

### 6.1 Related Resources

## 7 FAQ


### `npm run build`

[BetterImage](https://www.betterimagejs.com) 




