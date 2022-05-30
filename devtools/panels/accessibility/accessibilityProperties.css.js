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

.ax-name {
  color: var(--color-syntax-4);
  flex-shrink: 0;
}

.ax-readable-name {
  flex-shrink: 0;
}

.ax-readable-string {
  font-style: italic;
}

.ax-value-string {
  color: var(--color-syntax-1);
}

span.ax-internal-role {
  font-style: italic;
}

#source-order-warning {
  padding-bottom: 0;
  text-align: left;
}

.source-order-checkbox {
  margin: 5px;
}

/*# sourceURL=accessibilityProperties.css */
`);
export default styles;
