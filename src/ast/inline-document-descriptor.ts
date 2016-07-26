/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

export class InlineDocumentDescriptor {
  type: 'html' | 'javascript' | 'css' | /* etc */ string;

  contents: string;

  url: string;

  constructor(type: string, contents: string, url: string) {
    this.type = type;
    this.contents = contents;
    this.url = url;
  }
}
