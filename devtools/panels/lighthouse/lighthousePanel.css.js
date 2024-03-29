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

.toolbar {
  background-color: var(--color-background-elevation-1);
  border-bottom: var(--legacy-divider-border);
}

.lh-root {
  --report-menu-width: 0;

  user-select: text;
}
/* for View Trace button */

.lh-audit-group {
  position: relative;
}

button.view-trace {
  margin: 10px;
}

.lighthouse-results-container {
  position: relative;
}
/** \\'window.opener\\' is null for windows opened from DevTools. This breaks
    the LH viewer app, so disable this feature. */

.lh-tools--viewer {
  display: none !important; /* stylelint-disable-line declaration-no-important */
}

.lighthouse-settings-pane {
  flex: none;
}

.lighthouse-settings-pane .toolbar {
  flex: 1 1;
}

.lighthouse-toolbar-container {
  display: flex;
  flex: none;
}

.lighthouse-toolbar-container > :first-child {
  flex: 1 1 auto;
}

/*# sourceURL=lighthousePanel.css */
`);
export default styles;
