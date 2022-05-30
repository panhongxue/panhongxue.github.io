// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;
}

.header {
  padding: 0 0 6px;
  border-bottom: 1px solid var(--color-details-hairline);
  font-size: 18px;
  font-weight: normal;
  flex: none;
}

.add-locations-button {
  flex: none;
  margin: 10px 2px;
  min-width: 140px;
  align-self: flex-start;
}

.locations-list {
  max-width: 600px;
  min-width: 340px;
  flex: auto;
}

.locations-list-item {
  padding: 3px 6px;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  flex: auto 1 1;
}

.locations-list-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-basis: 170px;
  user-select: none;
  color: var(--color-text-primary);
  position: relative;
  overflow: hidden;
}

.locations-list-title {
  text-align: start;
}

.locations-list-title-text {
  overflow: hidden;
  flex: auto;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.locations-list-separator {
  flex: 0 0 1px;
  background-color: var(--color-details-hairline);
  height: 30px;
  margin: 0 4px;
}

.locations-list-separator-invisible {
  visibility: hidden;
  height: 100% !important; /* stylelint-disable-line declaration-no-important */
}

.locations-edit-row {
  display: flex;
  flex-direction: row;
  margin: 6px 5px;
}

.locations-edit-row input {
  width: 100%;
  text-align: inherit;
}

.locations-input-container {
  padding: 1px;
}

/*# sourceURL=locationsSettingsTab.css */
`);
export default styles;
