# Use 3DVista in a Next.js app

The default export for 3DVista is not supported for frameworks like React or Next.js. Below are the steps that need to be taken in order to get 3DVista working on next.js.

Once complected it is accessible via localhost:3000/3DVista.

Tested it on:
- Mac: Chrome/Safari/Firefox
- PC: Chrome/Safari/Firefox
- iPhone: Safari/Chrome
- iPad: Safari/Chrome
## 1. Export from 3DVista
- Click _Publish_
- Select _For Web / Mobile_
- Set the Destination to a New Folder called _3DVista_ (this will end up in you next.js projects _/public_ directory)
- Click _Publish_
## 2. Add to next.js project
- Add the newly created _3DVista_ folder into the pages directory of your project
## 3. Move files/folders
- Move these files from /pages/3DVista to /public:
  - /lib
  - /locale
  - /media
  - script_general.js
  - script.js
## 4. Update CSS
- Create a new file called _3dvista.css_
- Remove all declarations in the style tag in /pages/index.htm and place them in _3dvista.css_
- Remove all inline styles, replacing with a class, and putting these classes into _3dvista.css_
- import _3dvista.css_ file at the top of __app.js_
## 5. Edit index.htm
- Rename _index.htm_ to _index.jsx_
- Remove outer html and head tags and the !DOCTYPE declaration:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
  ...
  </head>
  <body>
  ...
  </body>
</html>
```
- Convert to a functional component
```jsx
import Head from "next/head";

export default function index() {
  return (
    <div>
      <Head>
      ...
      </Head>
      <section>
      ...
      </section>
    <div>
  )
```

- Convert script tag to dangerouslySetHtml:
```html
<script type="text/javascript">
  var tour;
  var devicesUrl = {"general":"script_general.js?v=1640882506117"};

  (function() {
    var deviceType = ['general'];
...
  }
</script>
```
to (*see bonus for alternate strategy here)
```jsx
<script
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `
      let tour;
      let devicesUrl = { general: "script_general.js" };

      (function () {
        let deviceType = ["general"];
      ...
      `
</script>
```
**NOTE:** Be sure to have the __html wrapped in backticks `` to avoid single/double quote conflicts

- Remove this comment which is causing an error: ```//Force hide. Some cases the transitionend event isn't dispatched with an iFrame.```

- Remove the ```isSafariDesktopV11orGreater()``` function, as its causing an error
- Replace all instances of ```/Mobile\/\w+/``` with ```/Mobile/```, as they are causing a regex error

- There are query parameters on the .txt, .js, and .jpg in the link and script tags that need to be removed. Locate this (looks something like this `?v=1640882506117`) at the first link tag within the head tag. Remove All occurrences of this query parameter throughout the document (highlight, right click and select “Change All Occurrences”)

&nbsp;  

# BONUS
- Move the _dangerouslySetInnerHTML_ into it's own .js file to be imported into your project!
innerHTML.js
```js
const innerHTML = `let tour;
let devicesUrl = { general: "script_general.js" };

(function () {...}
`
export default innerHTML;
```
index.jsx
```jsx
import innerHTML from './innerHTML.js';

<script type="text/javascript" dangerouslySetInnerHTML={{ __html: innerHTML}}></script>
```