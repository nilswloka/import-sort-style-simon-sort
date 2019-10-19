# import-sort-style-simon-sort
This is a sort style for the [import-sort](https://github.com/renke/import-sort) ES6 import sorter. It should work out of the box everywhere import-sort does, but it has only be tested with the CLI and the [Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=amatiasq.sort-imports).

The actual sort style will probably not be of much use to you if you are not [Simon](https://github.com/simonThiele) or one of his colleagues.

# Installation
1. Add the package to your devDependencies (`npm install --save-dev import-sort-style-simon-sort`).
2. Configure the sort style in `package.json` by adding an entry like this:
```
"importSort": {
	".js, .jsx, .es6, .es, .mjs, .ts, .tsx": {
		"style": "simon-sort"
	}
}
```
3. Enjoy
