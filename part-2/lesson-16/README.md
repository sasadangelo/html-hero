# Lesson 16 – Creating a Styled Navigation Menu

In this lesson we add a **horizontal navigation bar** with a blue background to all pages, allowing users to move between pages of the site.

## What You Will Learn

- How to structure a navigation menu with `<nav>`, `<ul>` and `<li>`
- How to style the navigation bar with CSS: background colour, padding, inline display
- How to make menu links white and without underlines
- How to apply the menu consistently to all pages of the site

## Overview

A navigation menu is built with an unordered list (`<ul>`) inside the semantic `<nav>` tag. CSS transforms the vertical list into a horizontal bar by using `display: inline-block` on the `<li>` elements.

```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="second_page.html">Second Page</a></li>
        ...
    </ul>
</nav>
```

## Files Changed in This Lesson

| File | Operation | Description |
|---|---|---|
| All `.html` files | ✏️ Modified | Added the `<nav>` navigation bar |
| `default.css` | ✏️ Modified | Styles for the menu (colour, padding, white links) |

## Goal

By the end of this lesson you will have:
- A blue navigation bar present on all pages
- Working links that lead to each page of the site
- Understood how to use `<nav>`, `<ul>`, `<li>` to build a menu
