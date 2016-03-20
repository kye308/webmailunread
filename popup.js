function onWindowLoad() {

  function DOMtoString(document_root) {
      // Original webmail title
      var def_title = "Caltech Webmail";

      // Get inner html of left sidebar...luckily we can do this because it's
      // given a name.
      var html = window.frames["left"].document.documentElement.innerHTML;

      // Strip some HTML
      html = html.replace(/<(?:.|\n)*?>/gm, '');

      // Parse the result of this html. The final variable either contains
      // (number) or some character that's the result of the computation.
      var folder_index = html.search("INBOX") + "INBOX".length + "&nbsp;".length;
      html = html.substring(folder_index);
      var space_index = html.search("&nbsp;");
      html = html.substring(0, space_index);

      // Apparently this is what I'm left with if there's no mail.
      if (html.charAt(0) !== "(") {
          document.title = html + " " + def_title;
      }

      else {
        document.title = def_title;
      }
    
    return html;
}

window.onload = onWindowLoad;