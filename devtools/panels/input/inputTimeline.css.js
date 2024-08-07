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

.input-timeline-toolbar-container {
  display: flex;
  background-color: var(--color-background-elevation-1);
  border-bottom: 1px solid var(--color-details-hairline);
  flex: 0 0 auto;
}

.input-timeline-toolbar {
  display: inline-block;
}

/*# sourceURL=inputTimeline.css */
`);
export default styles;
