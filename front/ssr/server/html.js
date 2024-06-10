import serializeJavascript from "serialize-javascript";
export default ({ styles, children, extractor, store }) => {
  return `<html lang="en" class="h-100">
    <head>
      <base href="/" />
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" type="image/x-icon" href="/client/favicon.ico">
      ${styles}
      ${extractor.getStyleTags()}
    </head>
    <body>
      <div id="root">${children}</div>
      <script>
        window.INITIAL_STATE = ${serializeJavascript(store.getState())}
      </script>
      ${extractor.getScriptTags()}
    </body>
  </html>`;
};
