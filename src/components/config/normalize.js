const normalize = `
  // normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css

  // Document

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  // Sections

  // Remove the margin in all browsers (opinionated).

  body {
    margin: 0;
  }

  // Add the correct display in IE 9-.

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  // Correct the font size and margin on 'h1' elements within 'section' and
  // 'article' contexts in Chrome, Firefox, and Safari.

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  // Grouping content

  // Add the correct display in IE 9-.
  // 1. Add the correct display in IE.

  figcaption,
  figure,
  main {
    display: block;
  }

  // Add the correct margin in IE 8.

  figure {
    margin: 1em 40px;
  }

  // 1. Add the correct box sizing in Firefox.
  // 2. Show the overflow in Edge and IE.

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  // 1. Correct the inheritance and scaling of font size in all browsers.
  // 2. Correct the odd 'em' font sizing in all browsers.

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  // Text-level semantics

  // 1. Remove the gray background on active links in IE 10.
  // 2. Remove gaps in links underline in iOS 8+ and Safari 8+.

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  // Remove the outline on focused links when they are also active or hovered
  // in all browsers (opinionated).

  a:active,
  a:hover {
    outline-width: 0;
  }

  // 1. Remove the bottom border in Firefox 39-.
  // 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  // Prevent the duplicate application of 'bolder' by the next rule in Safari 6.

  b,
  strong {
    font-weight: inherit;
  }

  // Add the correct font weight in Chrome, Edge, and Safari.

  b,
  strong {
    font-weight: bolder;
  }

  // 1. Correct the inheritance and scaling of font size in all browsers.
  // 2. Correct the odd 'em' font sizing in all browsers.

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  // Add the correct font style in Android 4.3-.

  dfn {
    font-style: italic;
  }

  // Add the correct background and color in IE 9-.

  mark {
    background-color: #ff0;
    color: #000;
  }

  // Add the correct font size in all browsers.

  small {
    font-size: 80%;
  }

  // Prevent 'sub' and 'sup' elements from affecting the line height in
  // all browsers.

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  // Embedded content

  // Add the correct display in IE 9-.

  audio,
  video {
    display: inline-block;
  }

  // Add the correct display in iOS 4-7.

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  // Remove the border on images inside links in IE 10-.

  img {
    border-style: none;
  }

  // Hide the overflow in IE.

  svg:not(:root) {
    overflow: hidden;
  }

  // Forms

  // 1. Change the font styles in all browsers (opinionated).
  // 2. Remove the margin in Firefox and Safari.

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  // Show the overflow in IE.
  // 1. Show the overflow in Edge.

  button,
  input {
    overflow: visible;
  }

  // Remove the inheritance of text transform in Edge, Firefox, and IE.
  // 1. Remove the inheritance of text transform in Firefox.

  button,
  select {
    text-transform: none;
  }

  // 1. Prevent a WebKit bug where (2) destroys native 'audio' and 'video'
  //    controls in Android 4.
  // 2. Correct the inability to style clickable types in iOS and Safari.

  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  // Remove the inner border and padding in Firefox.

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  // Restore the focus styles unset by the previous rule.

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  // Change the border, margin, and padding in all browsers (opinionated).

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  // 1. Correct the text wrapping in Edge and IE.
  // 2. Correct the color inheritance from 'fieldset' elements in IE.
  // 3. Remove the padding so developers are not caught out when they zero out
  //    'fieldset' elements in all browsers.

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  // 1. Add the correct display in IE 9-.
  // 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.

  progress {
    display: inline-block;
    vertical-align: baseline;
  }

  // Remove the default vertical scrollbar in IE.

  textarea {
    overflow: auto;
  }

  // 1. Add the correct box sizing in IE 10-.
  // 2. Remove the padding in IE 10-.

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  // Correct the cursor style of increment and decrement buttons in Chrome.

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  // 1. Correct the odd appearance in Chrome and Safari.
  // 2. Correct the outline style in Safari.

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  // Remove the inner padding and cancel buttons in Chrome and Safari on macOS.

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  // 1. Correct the inability to style clickable types in iOS and Safari.
  // 2. Change font properties to 'inherit' in Safari.

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  // Interactive

  // Add the correct display in IE 9-.
  // 1. Add the correct display in Edge, IE, and Firefox.

  details,
  menu {
    display: block;
  }

  // Add the correct display in all browsers.

  summary {
    display: list-item;
  }

  // Scripting

  // Add the correct display in IE 9-.

  canvas {
    display: inline-block;
  }

  // Add the correct display in IE.

  template {
    display: none;
  }

  // Hidden
  // Add the correct display in IE 10-.

  [hidden] {
    display: none;
  }
`

export default normalize
