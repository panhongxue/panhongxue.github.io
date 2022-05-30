// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.html-preview-frame {
  /* We always want a white background, even in dark mode */
  --override-preview-frame-background: #fff;

  box-shadow: var(--drop-shadow);
  background: var(--override-preview-frame-background);
  flex-grow: 1;
  margin: 20px;
}

/*# sourceURL=requestHTMLView.css */
`);
export default styles;
