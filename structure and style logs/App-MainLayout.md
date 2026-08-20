# app/layout.tsx

- imports are self explanitory, note that we are importing a Metadata type and font functions

Actual explaination:

1. Importing fonts

- we import the fonts, which are next js font functions
- we pass an object with these properties:
  - variable: a string representing the variable we will be using to expose the font
  - subsets: a string that identifies the fallback font
- the function returns a value (an object) which we store in a variable (we use this in the html element later)

We are essentially telling NextJS to load the font and expose it through the variable we specified

2. Attatch those variables to <html>

- we use the returned object and access its "variable" property, and add that to the class list of our html element
- we can use string interpolation to do this (dynamic variables within jsx)

3. Now global.css uses these variables

- in our global.css under our @theme inline rules, we are essentially creating a custom class name for our fonts
- we are doing this so that we can use these fonts in our jsx without having to write the whole variable name we created above
- the global.css is looking within the scope for a variable

Chatgpt:

We import Next.js's font functions and pass them the name of the CSS custom property we want to use to expose the font. Next.js returns an object containing generated classes and other font information.

We then apply geistSans.variable to our <html> element. This applies the generated class that Next.js uses to establish the --font-geist-sans CSS custom property on the document.

--font-geist-sans is a CSS custom property whose value represents the loaded Geist font. Because it is established on <html>, it is available to descendant elements through normal CSS inheritance/cascade rules.

Our global.css doesn't have access to the JavaScript geistSans object or the scope of layout.tsx. Instead, it simply references the CSS custom property by its name:

var(--font-geist-sans)

We then assign that value to Tailwind's --font-sans theme variable, effectively creating an alias that allows Tailwind's font-sans utility to use the Geist font.
