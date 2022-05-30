// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/**
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  user-select: text;
}

.platform-fonts {
  flex-shrink: 0;
}

.font-name {
  font-weight: bold;
}

.font-usage {
  color: var(--color-text-secondary);
  padding-left: 3px;
}

.title {
  padding: 0 5px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: var(--color-background-elevation-2);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 24px;
  background-color: var(--color-background-elevation-0);
  display: flex;
  align-items: center;
}

.stats-section {
  margin: 5px 0;
}

.font-stats-item {
  padding-left: 1em;
}

.font-stats-item .font-delimeter {
  margin: 0 1ex 0 1ex;
}

/*# sourceURL=platformFontsWidget.css */
`);
export default styles;
