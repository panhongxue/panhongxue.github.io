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

:host {
  flex: auto;
  display: flex;
}

.view {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  padding: 9px 12px 9px 7px;
}

devtools-linear-memory-inspector-navigator + devtools-linear-memory-inspector-viewer {
  margin-top: 12px;
}

.value-interpreter {
  display: flex;
}

/*# sourceURL=linearMemoryInspector.css */
`);
export default styles;
