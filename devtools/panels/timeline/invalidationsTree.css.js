// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.header,
.children,
.content {
  min-height: initial;
  line-height: initial;
}
/* This TreeElement is always expanded and has no arrow.   */
/* FIXME(crbug.com/475618): Implement this in TreeElement. */

.children li::before {
  display: none;
}

.content {
  margin-bottom: 4px;
}

.content .stack-preview-container {
  margin-left: 8px;
}

.content .node-list {
  margin-left: 10px;
}

/* The .node-list's can be very long. So we override the tree item's default nowrap. */
.tree-outline li {
  white-space: normal;
}

/*# sourceURL=invalidationsTree.css */
`);
export default styles;