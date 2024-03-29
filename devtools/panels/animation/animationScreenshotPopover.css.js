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

img {
  max-height: 300px;
  border-radius: 2px;
}

.animation-progress {
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  background: var(--legacy-selection-bg-color);
}

/*# sourceURL=animationScreenshotPopover.css */
`);
export default styles;
