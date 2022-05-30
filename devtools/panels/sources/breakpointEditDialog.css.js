// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  z-index: 30;
  padding: 4px;
  background-color: var(--color-background-elevation-1);
  border-radius: 7px;
  border: 2px solid var(--color-details-hairline);
  width: 90%;
  pointer-events: auto;
}

:host(.sources-edit-breakpoint-dialog) {
  border-radius: 0;
  z-index: 30;
  background-color: var(--color-background-elevation-1);
  width: 555px;
  pointer-events: auto;
  margin: 2px 0 2px -1px;
  padding: 0 10px 10px 5px;
  border: 1px solid var(--color-details-hairline);
}

:host-context(.sources-edit-breakpoint-dialog) .condition-editor {
  background-color: var(--color-background);
  margin-left: 3px;
}

:host-context(.sources-edit-breakpoint-dialog) .source-frame-breakpoint-toolbar {
  font-family: sans-serif;
  font-size: 12px;
}

/*# sourceURL=breakpointEditDialog.css */
`);
export default styles;
