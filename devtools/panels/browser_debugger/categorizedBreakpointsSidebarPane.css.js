// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  margin: 0;
  padding: 2px 4px;
  min-height: 18px;
}

.tree-outline {
  padding: 0;
}

.tree-outline li {
  margin-left: 14px;
  user-select: text;
  cursor: default;
}

.tree-outline li.parent {
  margin-left: 1px;
}

.tree-outline li:not(.parent)::before {
  display: none;
}

.breakpoint-hit {
  --override-breakpoint-hit-background-color: rgb(255 255 194);
  --override-breakpoint-hit-border-color: rgb(107 97 48);

  background-color: var(--override-breakpoint-hit-background-color);
}

:host-context(.-theme-with-dark-background) .breakpoint-hit {
  --override-breakpoint-hit-background-color: hsl(46deg 98% 22%);
  --override-breakpoint-hit-dark-mode-color: #ccc;

  color: var(--override-breakpoint-hit-dark-mode-color);
}

.breakpoint-hit .breakpoint-hit-marker {
  background-color: var(--override-breakpoint-hit-background-color);
  border-right: 3px solid var(--override-breakpoint-hit-border-color);
  height: 100%;
  left: 0;
  margin-left: -30px;
  position: absolute;
  right: -4px;
  z-index: -1;
}

.source-code[is="dt-checkbox"] {
  max-width: 100%;
}

/*# sourceURL=categorizedBreakpointsSidebarPane.css */
`);
export default styles;
