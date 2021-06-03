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

Create top-level css variables that reference these theme variables. Example using Stylus:

```css
.theme = {
    colors: {
        background: var(--backgroundColor);
        foreground: var(--foregroundColor);
    }
}
```

Initialize and configure a new Themer instance in your main Vue app (App.vue), passing an array of the themes you wish to support, along with the theme to initially apply:

```js
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