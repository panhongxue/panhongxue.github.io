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

.scope-chain-sidebar-pane-section-header {
  flex: auto;
}

.scope-chain-sidebar-pane-section-icon {
  float: left;
  margin-right: 5px;
}

.scope-chain-sidebar-pane-section-subtitle {
  float: right;
  margin-left: 5px;
  max-width: 55%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.scope-chain-sidebar-pane-section-title {
  font-weight: normal;
  word-wrap: break-word;
  white-space: normal;
}

.scope-chain-sidebar-pane-section {
  padding: 2px 4px;
  flex: none;
}

/*# sourceURL=scopeChainSidebarPane.css */
`);
export default styles;
