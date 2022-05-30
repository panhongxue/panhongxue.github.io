// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.search-drawer-header {
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
}

.search-toolbar {
  background-color: var(--color-background-elevation-1);
  border-bottom: 1px solid var(--color-details-hairline);
}

.search-toolbar-summary {
  background-color: var(--color-background-elevation-1);
  border-top: 1px solid var(--color-details-hairline);
  padding-left: 5px;
  flex: 0 0 19px;
  display: flex;
  padding-right: 5px;
}

.search-toolbar-summary .search-message {
  padding-top: 2px;
  padding-left: 1ex;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.search-view .search-results {
  overflow-y: auto;
  display: flex;
  flex: auto;
}

.search-view .search-results > div {
  flex: auto;
}

/*# sourceURL=searchView.css */
`);
export default styles;
