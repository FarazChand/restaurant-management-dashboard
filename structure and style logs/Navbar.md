### /app/components/Navbar.tsx

- import our Link component
- create an array of "link" objects called links, which we will use to map inside our nav element and assign our list of Link components - has two properties:
  - href -> used to assign the href property of the Link component
  - label -> used to populate the content of the Link component

#### General Structure

- this component is a header element that wraps 3 children
  - a Link component that represents our logo, href leads to homepage
  - nav element, which wraps a "ul" which is a list of "li" elements that wrap Links
  - another Link component that represents a button used to book a table

#### Important Styling

##### Header:

- nothing crazy just a border bottom and a color for that border

##### The main "div" wrapper:

- mx-auto to center horizontally
- flex to remove block display from children
- max-w-7xl ?
- items-center to center vertically
- justify-between to space out children
- padding...

###### nav and children:

- nav just used sematically to wrap the ul
- the ul
  - flex to remove block display from children
  - items-center to center vertically
  - gap-6 to have a reasonable gap between each
- each li is just used as a wrapper for the Link component, and to have the key attribute since we are mapping over a list
- each Link
  - text-sm for small text
  - font-medium for text boldness
  - text-gray-700 color
  - transition to allow transitions
  - hover:text-black to change color on hover (needs transition as a className to work)
