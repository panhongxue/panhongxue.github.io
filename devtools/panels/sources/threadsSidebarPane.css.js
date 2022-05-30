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

.thread-item {
  padding: 3px 8px 3px 20px;
  position: relative;
  min-height: 18px;
  line-height: 15px;
  display: flex;
  flex-wrap: wrap;
}

.thread-item + .thread-item {
  border-top: 1px solid var(--color-details-hairline-light);
}

.thread-item:hover {
  background-color: var(--color-background-elevation-1);
}

.thread-item:focus-visible {
  background-color: var(--legacy-focus-bg-color);
}

.thread-item-title,
.thread-item-paused-state {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.thread-item-paused-state {
  color: var(--color-text-disabled);
  margin-left: auto;
  padding: 0 10px 0 10px;
}

.selected-thread-icon {
  display: none;
  position: absolute;
  top: 5px;
  left: 4px;
}

.thread-item.selected .selected-thread-icon {
  display: block;
}

@media (forced-colors: active) {
  .thread-item:hover,
  .thread-item:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .thread-item:hover > div,
  .thread-item:focus-visible > div {
    color: HighlightText;
  }
}

/*# sourceURL=threadsSidebarPane.css */
`);
export default styles;
