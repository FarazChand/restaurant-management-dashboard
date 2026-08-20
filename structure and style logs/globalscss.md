# app/globalscss.md

```
@import "tailwindcss";      // imports tailwind

:root {                         // defines CSS custom properties, :root is a psuedo selector - the whole object is called a "rule"
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {                                 // allows tailwind to create utility classes
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}


// Note: The combination of a property and its value in a css rule is called a "declaration"
```

## :root

- ":root" is a psuedo css selector, like :hover, or :firstchild
- it simply targets the root of the document its used in, which in an html document is <html> (html element)

### CSS Custom Properties and creating them

- inside of this rule we can define css custom properties
  - this involves naming the custom property, note that the "--" in the front of the name is required and not optional
  - as well as assigning the desired value to the custom property
- since these will be applied to <html>, they will be inherited by the rest of the document (html element's children)
- in other words, all of the elements inside of the html element will have access to these custom css properties
- you can think of custom properties as storage containers for values.. (its much more than this though)

Note: the advantage of having these styles defined here is that it allows us to easily change the colors accross the enitire app from this location - assuming we are using these custom properties accross our app instead of normal css styles /tailwind classes. It also allows us to configure features like "dark mode" in a much easier manner

## @theme inline

- this rule allows us to create tailwind utility classes
- in the example above, we do this for 2 colors (background and foreground) and 2 fonts (geist-sans and geist mono)
- the way we create these utility classes differs slightly between colors and fonts

### creating css utility classes

- general pattern is using the relevant prefix followed by a descriptive name - which will be the name used in the created utility classes
  - colors: --color-\* -> creates utility classes like bg-\* text-\* border-\*
  - fonts: --font-\* -> creates utility classes like font-\*
- we assign a value to this property, and that value will be used to create the utility classes

#### Assigning values to Tailwind Utility Classes:

- we can just assign a color for color utilities, or a font for font utilities. This works fine
- we can also use our custom css properties from earlier to assign their values
  - the advantage of this is that it allows us to take advantage of the dynamic nature of our custom css properties and apply them to our tailwind utility classes - making change of e.g. brand colors and fonts much easier and global

## @media(prefers-color-scheme: dark) {...}

```

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

```

- native CSS media query that listens to a user's operating system or browser settings
- detects if the user has darkmode on within their OS settings, and overrides the default CSS variables on the application
  - the @media (prefers-color-scheme: dark) line detects if the users OS settings are set to "dark"
  - if they are, the ":root" block is activated, and the css custom properties are changed to the designated colors
  - since the @theme uses var(css-custom-property..) pattern, the tailwind utility classes are automatically created with the darkmode colors
  - then anywhere these utility classes are used reflect the changes to the color scheme

This means that you don't actually have to do anything in the jsx in order to change to dark mode as long as you have been using the utility classes for the relevant styling
