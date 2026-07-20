# DOM Manipulation

## What is DOM?
    When a browser loads an HTML document, it coverts HTML into a tree like structure called DOM.

## Why DOM?
- Without DOM - Static webpage
- With DOM - Dynamic webpage

## DOM Tree:
HTML
```html
<body>
    <div>
        <h1>Hello</h1>
        <p>Paragraph</p>
    </div>
</body>
```
TREE
- Every HTML tag becomes a node
```text
body
│
└── div
    ├── h1
    └── p
```

### Example 1:
- JavaScript uses the document object to access the DOM.
- Refer **"01_DOM_Tree.html"**
```html
<!doctype html>

<html>

    <head>
        <title>Browser</title>
    </head>

    <body>
        <h1>Heading</h1>
        <p>This is paragraph</p>
    </body>

    <script>
        console.log(document); /*It prints the DOM tree*/
    </script>
</html>
```

## Selecting elements:
- Selecting elements from the DOM
  ```text
  - getElementsById()
  - getElementsByClassName() => HTML Collections
  - getElementsByTagName()   => HTML Collections
  - querySelector()
  - querySelectorAll()       => NodeLists
  ```
- Refer **"02_Selecting_elements.html"**

## DOM Traversal:
```text
- parentElement          => Get parent element
- children	             => Get all direct children
- firstElementChild      => First child
- lastElementChild	     => Last child
- nextElementSibling	 => Next sibling
- previousElementSibling =>	Previous sibling
```

## Adding Elements:
```text
createElement()	=> Create new element
appendChild()	=> Add child element
append()	    => Add element or text
textContent	    => Add text to new element
```
### Pattern
```javascript
const element = document.createElement("li");
element.textContent = "Content";
parent.appendChild(element); /*append() can add simple text without creating tags*/
```

## Delete Elements:
```text
remove()      => Remove an element
removeChild() => Parent removes child
```
### Pattern
```javascript
const container = document.querySelector("#container");
container.firstElementChild.remove();
container.lastElementChild.remove();
```