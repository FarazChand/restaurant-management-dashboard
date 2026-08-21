# app/(marketing)/layout.tsx

## Imports

```
import { ReactNode } from "react";                      // used for typing the children from props
import Navbar from "../components/marketing/Navbar";
import Footer from "../components/marketing/Footer";
```

## export

```
// simple typing of children from props
type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Navbar></Navbar>

      <main className="flex-1">{children}</main>

      <Footer></Footer>
    </>
  );
}
```

- we have to remember that this app/marketing/layout.tsx is wrapped by the body tag from our app/layout.tsx.. which is also wrapped by the html tag in the same file
- usually you would have one layout, but because we will have multiple routes (marketing, login, dashboard) with their own designs, we use two layers of layouts. One for the main root layout to set up the html and body elements, and one for each respective route

- we use fragments here since we cannot return multiple elements from our component, and since the content on this page will be wrapped in a body tag (its container), it will work fine

- our Navbar and Footer components will be explained more thoroughly in their own files, they are loosely coupled in the sense that they just need to be imported and rendered in their desired location. Their styles are their own

## <main>

- our <main> is where our pages will be rendered. Each unique page will be wrapped in the main tag
- it has one class, flex-1, which in combination with the heights set on the html and body elements in app/layout.tsx, will result in the content stretching to allow the parent have its entire height occupied

- if you remember, our html is h-full, or 100% of the viewport
- our body is min-h-full, or 100% of its parent minimum - and allowed to grow as content grows. It also has flex and flex-col to allow stacking of its children and manipulation through flex properties
- our Nav and Footer have their own styles that control their height, which are irrelevant to talk about in this file, we just need to understand that they are also children of the body tag
- our main tag is also a child, in the middle of nav and footer (standard structure), and has the property flex-1 - which allows it to grow as much as its needed in order for the Nav, main, and footer elements to collectively occupy 100% of its parent.

Now this is important because it allows us to ensure that the footer is always pushed to the bottom of the screen

- in the situation where our content + nav + footer is smaller than 100% of the viewport, our main element will grow and push the footer to the bottom of the screen
- without flex-1 on our main, in the same situation explained above, the footer would be somewhere in the middle of the screen, right after where the content would end - really bad UI, looks terrible
