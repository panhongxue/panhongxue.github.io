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

.value-interpreter {
  --override-text-highlight-color: #80868b;

  border: var(--legacy-divider-border);
  background-color: var(--color-background-elevation-1);
  overflow: hidden;
  width: 400px;
}

.settings-toolbar {
  min-height: 26px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
}

.settings-toolbar-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.settings-toolbar-button devtools-icon {
  height: 14px;
  width: 14px;
  min-height: 14px;
  min-width: 14px;
}

.settings-toolbar-button.active devtools-icon {
  --icon-color: var(--color-primary);
}

.divider {
  display: block;
  height: 1px;
  margin-bottom: 12px;
  background-color: var(--color-details-hairline, #d0d0d0); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

/*# sourceURL=linearMemoryValueInterpreter.css */
`);
export default styles;
