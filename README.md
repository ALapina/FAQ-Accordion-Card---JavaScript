# 🚚 Project Title: FAQ Accordion Card - JavaScript

![Design preview for the FAQ Accordion Card coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

This is my solution for [Frontend Mentor](https://www.frontendmentor.io) challenge.

## 🔗 Live Link / Demo Link:

- https://alapina.github.io/FAQ-Accordion-Card---JavaScript

## 🛠 Technologies Used:

- Accessible HTML
- SCSS (CSS grid and flexbox was used for centering and some positioning)
- Vanila JavaScript
- e2e testing with [Cypess](https://www.cypress.io/)
- Responsive design

## 📚 Some interesting stuff about my approach to this challenge:

**1.** Project was built with maximum accessibility in mind.

https://www.w3.org/TR/wai-aria-practices-1.1/examples/disclosure/disclosure-faq.html

- The semantic structure of the FAQ is conveyed with native **dl**, **dt** and **dd** elements. So that the list structure is communicated to assistive technologies, instead of applying a button role to the `dt` element, a button element is contained within the `dd` element. Similarly, the container for the answer content that is shown and hidden is inside of the `dd` element so the `dl` structure is complete even when the answers are all hidden.
- **aria-expanded="false/true"** - Gives information to assistive technologies that the container controlled by the disclosure button is hidden or visible.
- **aria-controls="IDREF"** - communicate question dt and answear dd element by id attribute in dd.

**2.** Also as part of accessibility used new pseudo-class `:focus-visible` to remove focus outline on mouse click on button, but add and make it visible on tabbing through buttons. _Go and try clicking and tabbing through buttons!_

https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible

```css
/* Remove the focus indicator on mouse-focus for browsers that do support :focus-visible */

button:focus:not(:focus-visible) {
  outline: 0;
}

/* Draw a very noticeable focus style for keyboard-focus on browsers that do support :focus-visible */

button:focus-visible {
  outline: 2px dashed $soft-red;
  outline-offset: 0px;
}
```

**3.** **CSS** `clip-path` for one of the illustrations. https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

**4.** CSS animation for spinning arrows and open/close answear panel

**5.** Cross Browser testing with [CrossBrowserTesting GO](https://crossbrowsertesting.com/)

**6.** E2e testing with [Cypess](https://www.cypress.io/)
