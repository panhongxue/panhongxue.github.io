// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-initiator-view-tree .fill {
  right: -6px; /* Same as the margin in .request-initiator-view but negative. */
}

.request-initiator-view-section-title {
  font-weight: bold;
  padding: 4px;
}

.request-initiator-view-section-title:focus-visible {
  background-color: var(--color-background-elevation-2);
}

@media (forced-colors: active) {
  .request-initiator-view-section-title:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=requestInitiatorViewTree.css */
`);
export default styles;
