// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.drop-down {
  padding: 1px;
  box-shadow: var(--drop-shadow);
  background: var(--color-background);
}

.preview-item {
  border-color: transparent;
  border-style: solid;
  border-width: 1px 5px;
  padding: 2px 0;
  margin: 2px 1px;
}

.preview-item.selected {
  border-color: var(--legacy-selection-bg-color);
}

.preview-item canvas {
  width: 100%;
  height: 100%;
}

.text-details {
  font-size: 11px;
  padding: 3px;
}

.text-details span {
  flex: 1 0;
  padding-left: 8px;
  padding-right: 8px;
}

.text-details .name {
  font-weight: bold;
}

.text-details span.time {
  color: var(--color-text-secondary);
  text-align: right;
}

.screenshot-thumb {
  display: flex;
  border: 1px solid var(--color-background-elevation-2);
  margin: 2px 4px;
}

.screenshot-thumb img {
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}

/*# sourceURL=timelineHistoryManager.css */
`);
export default styles;
