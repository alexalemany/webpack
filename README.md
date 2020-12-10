# Webpack-Config
A basic frontend **webpack config, -eslint, babel 7**. This package works as a dependency for your project.

There is a three kind of enviorment modes: Production, Development and Watch

To start working on you need to add into your project:

`webpack.config.js` file with:
```javascript

const webpack = require('webpack-config/webpack.config.js')
const path = require('path')

webpack.entry = {
	// name and input entry of your file
	'name-of-your-output-file-name': '@/src/js/input-file-name.js',
}

webpack.output = {
	filename: 'js/[name].js',
	chunkFilename: 'js/[name].js',
	path: path.resolve(__dirname, 'path-to-your-ouput-folder'),
}

module.exports = webpack
```

`package.json` file:
```javascript
// ...
"scripts": {
	"watch": "npm run development -- --watch",
	"dev": "npm run development",
	"development": "webpack --mode development --config=webpack.config.js",
	"prod": "npm run production",
	"production": "webpack --mode production --config webpack.config.js"
},
"devDependencies": {
    "webpack-config": "git@github.com:alexalemany/webpack-config.git#semver:~v1.x.x"
}
// ...
```

Add proper configuration to visual studio to parse files with eslint plugin:

```javascript
// ...
"eslint.options": {
	"configFile": "./node_modules/webpack-config/.eslintrc"
},
// ...
```

This package works with:
- **SCSS**
- **BABEL 7**
- **BABEL LOADER with standard presets**
You can check javascript style guide in [Jasvascript Standard style guide](https://standardjs.com/)

### Licence
MIT License

Copyright (c) 2020 alexalemany

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


###Amendments
I encourage you to fork this project and change the rules to fit your team’s style guide. Below, you may list some amendments to the style guide. This allows you to periodically update your style guide without having to deal with merge conflicts.
