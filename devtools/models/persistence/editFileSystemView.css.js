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

.file-system-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  margin: 10px 0;
}

.file-system-header-text {
  flex: 1 0 auto;
}

.add-button {
  margin-left: 10px;
  align-self: flex-start;
}

.file-system-list {
  flex: auto;
}

.file-system-list-empty {
  flex: auto;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.file-system-list-item {
  padding: 3px 5px 3px 5px;
  height: 30px;
  display: flex;
  align-items: center;
  flex: auto 1 1;
}

.file-system-value {
  flex: 1 1 0;
}

.list-item .file-system-value {
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  overflow: hidden;
}

.file-system-edit-row {
  flex: none;
  display: flex;
  flex-direction: row;
  margin: 6px 5px;
  align-items: center;
}

.file-system-edit-row input {
  width: 100%;
  text-align: inherit;
}

/*# sourceURL=editFileSystemView.css */
`);
export default styles;
