# Lesson 21 – Building the "Start Here" Page

In this lesson we create the **Start Here** page, which welcomes new visitors by explaining who the site author is, what the site's philosophy is, and how to get started. This is the page you link new visitors to on their first visit.

## What You Will Learn

In this lesson you will discover how to:

- Use the `<figure>` tag with `<figcaption>` for images with captions
- Use `<strong>` to highlight key concepts in text
- Structure a long page with multiple `<h2>` subsections
- Insert responsive images with the `responsive_img` class
- Update the navigation menu to include the new page

## Overview

The "Start Here" page uses the same HTML tags as the About Me page, but introduces `<figure>` and `<figcaption>`: a semantic way to associate a caption with an image.

```html
<figure>
    <img class="responsive_img" src="assets/img/software-developer2.jpg" alt="Software Developer">
    <figcaption>Photo from <a href="...">clipartstation.com</a></figcaption>
</figure>
```

## Files Changed in This Lesson

| File | Operation | Description |
|---|---|---|
| `start-here.html` | ✨ New | The new "Start Here" page |
| All `.html` files | ✏️ Modified | Navigation menu updated with link to "Start Here" |

## Goal

By the end of this lesson you will have:
- Created `start-here.html` with real content structured in sections
- Used `<figure>` and `<figcaption>` for images with captions
- Understood the semantic difference between a plain `<img>` and `<figure>`
