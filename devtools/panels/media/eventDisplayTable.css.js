// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.no-border-top-datagrid > .data-grid {
  /* make sure there is no top border, it ruins the menu view */
  border-top: 0;
}

.event-display-table-contents-table-container > .widget > .data-grid {
  height: 100%;
}

.data-grid .event-display-table-basic-text-table-entry {
  line-height: 26px;
}

/*# sourceURL=eventDisplayTable.css */
`);
export default styles;
