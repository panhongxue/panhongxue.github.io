// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.paint-profiler-image-view {
  overflow: hidden;
}

.paint-profiler-image-view .paint-profiler-image-container {
  transform-origin: 0 0;
}

.paint-profiler-image-view .paint-profiler-image-container div {
  border-color: var(--color-details-hairline);
  border-style: solid;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
}

.paint-profiler-image-view img {
  border: solid 1px var(--color-background-inverted);
}

/*# sourceURL=timelinePaintProfiler.css */
`);
export default styles;
