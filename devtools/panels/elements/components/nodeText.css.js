// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/* See: https://crbug.com/1227651 for details on changing these to --override pattern. */

.node-label-name {
  color: var(--override-node-text-label-color, --override-dom-tag-name-color);
}

.node-label-class {
  color: var(--override-node-text-class-color, --override-dom-attribute-name-color);
}

.node-label-id {
  color: var(--override-node-text-id-color);
}

.node-label-class.node-multiple-descriptors {
  color: var(--override-node-text-multiple-descriptors-class, var(--override-node-text-class-color, --override-dom-attribute-name-color));
}

.node-label-id.node-multiple-descriptors {
  color: var(--override-node-text-multiple-descriptors-id, var(--override-node-text-id-color, --override-dom-attribute-name-color));
}

/*# sourceURL=nodeText.css */
`);
export default styles;
