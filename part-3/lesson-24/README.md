# Lesson 24 – Building the Photo Gallery and Completing the Home Page

In this lesson we do two things: we add an **interactive photo gallery** using CSS Grid and external JavaScript, and we **update the Home Page** to link all real site sections instead of the placeholders.

## What You Will Learn

In this lesson you will discover how to:

- Use **CSS Grid** to arrange images in a responsive grid
- The `grid-template-columns: repeat(auto-fill, minmax(...))` property for automatic columns
- How to manage images with `object-fit: cover` to normalise their dimensions
- How to build a **lightbox viewer** with `position: fixed` and `z-index`
- Separate **JavaScript into an external file** (`assets/js/gallery.js`) with `defer`
- **Update an existing page** (the Home Page) as the site grows
- Use HTML entities (`&amp;`, `&rarr;`) for special characters in text

## CSS Grid and the Lightbox

```css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}
```

The lightbox pattern uses a hidden `div` (`display: none`) that covers the full viewport, made visible by JavaScript when a photo is clicked.

## Updating the Home Page

The Home Page changes from:

| Before | After |
|---|---|
| "Second Page" → `second_page.html` | "My Gallery" → `gallery.html` |
| "Third Page" → `third_page.html` | "Resources" → `resources.html` |
| "Fourth Page" → `fourth_page.html` | "Contacts" → `contacts.html` |
| Lorem Ipsum placeholder text | Real descriptions of each section |

## Files Changed in This Lesson

| File | Operation | Description |
|---|---|---|
| `gallery.html` | ✨ New | Photo gallery with lightbox |
| `assets/gallery/` | ✨ New | 10 gallery images |
| `assets/js/gallery.js` | ✨ New | JS functions to show/close photos |
| `assets/css/page.css` | ✏️ Modified | Styles for the grid and lightbox |
| `index.html` | ✏️ Modified | Home Page updated with real links and descriptive text |
| All `.html` files | ✏️ Modified | Navigation menu updated with link to Gallery |

## Goal

By the end of this lesson you will have:
- A responsive photo gallery with CSS Grid and a JavaScript lightbox
- A Home Page that links to the real site pages with meaningful descriptions
- JavaScript code separated into a reusable external file
