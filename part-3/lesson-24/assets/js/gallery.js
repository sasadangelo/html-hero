/*
    © 2025 Salvatore D'Angelo
    This project is distributed under the MIT license.
    See https://opensource.org/licenses/MIT for details.
*/

/*
 * gallery.js – JavaScript functions for the photo gallery.
 *
 * This file is included in gallery.html via the tag:
 *   <script src="assets/js/gallery.js" defer></script>
 *
 * Keeping JavaScript in an external file is a best practice because:
 * 1. It keeps the HTML code cleaner and more readable
 * 2. The same JS file can be reused by multiple HTML pages
 * 3. The browser can cache the file, improving performance
 */

/**
 * showImage - Opens the full-screen viewer with the clicked image.
 *
 * @param {HTMLImageElement} img - The <img> element the user clicked on.
 *
 * How it works:
 * 1. Retrieves the viewer element from the DOM via getElementById
 * 2. Sets the src and alt of the expanded image by copying them from the clicked image
 * 3. Makes the viewer visible by setting style.display = "block"
 */
function showImage(img) {
    var viewer = document.getElementById("gallery-viewer");
    var expandedImg = document.getElementById("gallery-expanded-img");
    expandedImg.src = img.src;
    expandedImg.alt = img.alt;
    viewer.style.display = "block";
}

/**
 * closeImage - Hides the full-screen viewer.
 *
 * How it works:
 * 1. Retrieves the viewer element from the DOM via getElementById
 * 2. Hides it by setting style.display = "none"
 */
function closeImage() {
    document.getElementById("gallery-viewer").style.display = "none";
}
