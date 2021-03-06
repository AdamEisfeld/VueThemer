# Themer

## Usage

Create a css class for each theme you want to support. Use css vars to define your values:

```css
.darkMode {
    --backgroundColor: black;
    --foregroundColor: white;
}

.lightMode {
    --backgroundColor: white;
    --foregroundColor: black;
}
```

Create top-level css variables that reference these theme variables. Example using Stylus (saved as themes/theme.styl):

```css
.theme = {
    colors: {
        background: var(--backgroundColor);
        foreground: var(--foregroundColor);
    }
}
```

Optionally add an automatic import of your css via a vue.config.js file in the root of your project:

```
module.exports = {
	css: {
		loaderOptions: {
		stylus: {
			import: [
			'~@/themes/theme.styl',
			],
		},
		},
	},
};
```

Initialize and configure a new Themer instance in your main Vue app (App.vue), passing an array of the themes you wish to support, along with the theme to initially apply:

```vue
const themer = new Themer(["lightMode", "darkMode"], "lightMode");
```

Get the current applied theme from your Themer:

```js
const currentTheme = themer.currentTheme();
console.log(currentTheme); // lightMode
```

Switch the current theme (takes affect immediately):

```js
themer.setCurrentTheme("darkMode");
console.log(themer.currentTheme()); // darkMode
```

Use the theme values in your components' style tags:

```css
<style lang="stylus" scoped>
div {
	background-color: theme.colors.background;
	color: theme.colors.foreground;
}
</style>
```
