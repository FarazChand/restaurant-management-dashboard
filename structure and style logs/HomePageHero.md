## Section Wrapper

- responsible for the display, height, background color and centering of its content
- used min-h-[calc(100vh-81px)], but decided to change this since its a hardcoded value that can cause issues depending on numerous variables
- instead, we go to our layout.tsx of our marketing route
  - in here we ensure we wrap our header, main tag and footer in a div wrapper
  - this div wrapper is used to:
    - change the display to flex
    - ensure its flex-col so they are vertically stacked
    - set the min height to be the size of the screen (min-h-screen)
    - we also added the "flex-1" style to the main tag in order to specify the element we want to grow to allow our content to stretch to the size of the screen when needed e.g. when there is less content
