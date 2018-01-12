import '../../polymer/polymer.js';
import '../prism-highlighter.js';
import '../prism-theme-default.js';
import { Polymer as Polymer$0 } from '../../polymer/lib/legacy/polymer-fn.js';
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Polymer$0({
  _template: Polymer.html`
    <style include="prism-theme-default">
      pre {
        padding: 0;
        margin: 0;
      }
    </style>

    <prism-highlighter></prism-highlighter>
    <pre id="output"></pre>
`,

  is: 'prism-demo',

  properties: {
    code: {
      type: String,
      observer: '_render'
    },

    lang: {
      type: String
    }
  },

  attached: function() {
    this._render();
  },

  _render: function() {
    this.$.output.innerHTML = this.highlight(this.code, this.lang);
  },

  highlight: function(code, lang) {
    return this.fire('syntax-highlight', {code: code, lang: lang}).detail.code;
  }
});
