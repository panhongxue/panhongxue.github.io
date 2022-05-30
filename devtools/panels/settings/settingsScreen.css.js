// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.settings-window-main {
  color: var(--color-text-primary);
  background-color: var(--color-background);
  padding: 11px 0 0 0;
}

.settings-content {
  overflow-y: auto;
  overflow-x: hidden;
  margin: 8px 8px 8px 0;
  padding: 0 4px;
  flex: auto;
}

.settings-container {
  width: 100%;
  column-width: 288px;
}

.settings-block {
  display: block;
  padding-bottom: 9px;
  width: 288px;
  break-inside: avoid;
}

.settings-tab.settings-container {
  column-width: 308px;
}

.settings-tab .settings-block {
  margin-left: 20px;
}

.settings-line {
  padding-bottom: 5px;
  margin-bottom: 5px;
}

.settings-key-cell {
  display: inline-block;
  width: 153px;
  white-space: nowrap;
  text-align: right;
  vertical-align: middle;
  padding-right: 6px;
}

.settings-cell {
  display: inline-block;
  width: 135px;
  vertical-align: middle;
}

.settings-section-title {
  font-size: 120%;
  text-align: left;
}

.settings-combine-keys {
  margin: 0 0.3em;
  font-size: 9px;
}

fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

.settings-tab label {
  padding-right: 4px;
  display: inline-flex;
  flex-shrink: 0;
}

.settings-tab p {
  margin: 12px 0;
}

.settings-block p p {
  padding-left: 30px;
}

.settings-select {
  align-items: center;
  display: flex;
}

.settings-experiments-warning-subsection-warning {
  color: var(--color-accent-red);
}

.settings-experiments-warning-subsection-message {
  color: inherit;
}

.settings-content input[type=checkbox] {
  margin: 1px 7px 1px 2px;
}

.settings-window-title {
  font-size: 18px;
  color: var(--color-text-primary);
  padding: 0 0 5px 13px;
}

.settings-container-wrapper {
  position: absolute;
  top: 31px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding-top: 9px;
  border-top: 1px solid var(--color-details-hairline);
}

.settings-tab.settings-content {
  margin: 0;
  padding: 0;
}

.settings-tab-container {
  flex: auto;
  overflow: hidden;
}

.settings-tab-container header {
  padding: 0 0 6px;
}

#experiments-tab-content .settings-container {
  column-width: 470px;
}

#experiments-tab-content .settings-block {
  width: 470px;
  margin-left: 0;
}

.settings-tab-container header > h1 {
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  padding-bottom: 3px;
  white-space: nowrap;
}

.settings-tab .settings-section-title {
  margin-left: -20px;
  color: var(--color-text-secondary);
}

.settings-tab .settings-block label:hover {
  color: var(--color-text-secondary);
}

.settings-tab .settings-block fieldset:disabled label:hover {
  color: inherit;
}

.settings-tab select {
  margin-left: 10px;
}

.settings-experiment {
  display: grid;
  grid-template-columns: auto 1fr;
}

.settings-experiment .devtools-link {
  display: flex !important; /* stylelint-disable-line declaration-no-important */
  align-items: center;
}

.settings-experiment .link-icon {
  margin-left: 4px;
}

.settings-experiment-unstable {
  color: var(--color-text-secondary);
}

/*# sourceURL=settingsScreen.css */
`);
export default styles;
