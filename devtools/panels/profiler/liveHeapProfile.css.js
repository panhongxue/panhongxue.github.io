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

.data-grid {
  border: none;
}

.data-grid td .size-units {
  margin-left: 4px;
  font-size: 75%;
}

.data-grid tr:not(.selected) td .size-units {
  color: var(--color-text-secondary);
}

.toolbar {
  border-bottom: 1px solid var(--color-details-hairline);
}

/*# sourceURL=liveHeapProfile.css */
`);
export default styles;
