# General Styles and Structures

One of the style patterns I've seen is to take the semantic tag e.g. Footer, Header etc., and use it to style the:

- background color brand (bg-black)
- border if needed e.g. bottom (border-b)

Then there is an inner div inside of that wraps the reset of the contet an sets:

- centering the container horizontally (mx-auto)
- max-width (max-w-7xl)
- display flex, centering and justifying children (or display grid)
- setting padding

Then inside of this wrapper div is what ever children needs to be there e.g. in a Header it would be the Logo, nav and cta

### Logos

- for logos that we are not using an img for, we can use simple text
- the basic styles for a logo are:
  - larger text (text-2xl)
  - bold text (font-bold)
  - brand color e.g. text-black

## Nav list for desktop

- <nav> is just the semantic tag that wraps the rest of the content
- <ul> will be the unordered list that wraps the list items
    - will be flex display
    - will have items-center
    - will have some gap between items (gap-6)

- <li> each one of these wraps the Link component. Since we will be mapping through the list of link objects, we need to add a unique key to each one of these, we can use the href attribute (thouogh should probably use something better)

- <Link> each one of these has an href attribute and content that we get from the links object list. 
    - smaller text (text-sm)
    - font slightly bold (font-medium)
    - text color to brand/accent color (text-gray-700)
    - enable transitions (transition)
    - set hover to brand/accent color (hover:text-black)

#### Button

- the button will be a <Link> component, it will have an href that leads to the cta e.g. /reservations
- we can style it to appear as a button:
  - rounder corners (rounder-md)
  - brand color (bg-black)
  - padding px-5 py-2.5
  - smaller text (text-sm)
  - slightly bold (font-medium)
  - text color contrasting brand (text-white)
  - enable transitions (transition)
  - hover text accent color (bg-grey-800)
