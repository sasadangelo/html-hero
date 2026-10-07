# Lesson 23 – Building the "Contacts" Page with an HTML Form

In this lesson we add the **Contacts** page to the site, which lets visitors send messages directly through an HTML form. We will learn the main form elements and how to apply custom CSS styles.

## What You Will Learn

In this lesson you will discover how to:

- Create an **HTML form** with the `<form>` tag
- Use the main input types: `text`, `email`, `textarea`
- Associate labels with form fields using the `<label>` tag (best practice for accessibility)
- Add a submit button with `<button type="submit">`
- Style the form with CSS: borders, padding, `:focus` effects, button hover states
- Use `display: flex; flex-direction: column` to stack form elements vertically

## Overview

An HTML form is made up of:

| Element | Purpose |
|---|---|
| `<form>` | The form container |
| `<label>` | Descriptive label for a field |
| `<input type="text">` | Single-line text field |
| `<input type="email">` | Email field (automatically validated) |
| `<textarea>` | Multi-line text field |
| `<button type="submit">` | Submit button |

## Files Changed in This Lesson

| File | Operation | Description |
|---|---|---|
| `contacts.html` | ✨ New | The new Contacts page with a form |
| `assets/css/page.css` | ✏️ Modified | Added CSS styles for the form |
| All `.html` files | ✏️ Modified | Navigation menu updated with link to Contacts |

## Goal

By the end of this lesson you will have:
- Created `contacts.html` with a working HTML form
- Applied CSS styles to make the form visually attractive
- Understood how to associate labels with fields for accessibility
- Learned about `:focus` and `:hover` CSS effects for form controls
