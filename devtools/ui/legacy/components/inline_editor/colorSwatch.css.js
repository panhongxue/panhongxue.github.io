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

:host {
  white-space: nowrap;
}

.color-swatch {
  position: relative;
  margin-left: 1px;
  margin-right: 2px;
  width: 10px;
  height: 10px;
  top: 1px;
  display: inline-block;
  user-select: none;
  background-image: var(--image-file-checker);
  line-height: 10px;
}

.color-swatch-inner {
  width: 100%;
  height: 100%;
  display: inline-block;
  border: 1px solid rgb(128 128 128 / 60%); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
  box-sizing: border-box;
  cursor: pointer;
}

.color-swatch:not(.read-only) .color-swatch-inner:hover {
  border: 1px solid rgb(64 64 64 / 80%); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

@media (forced-colors: active) {
  .color-swatch {
    forced-color-adjust: none;
  }
}

/*# sourceURL=colorSwatch.css */
`);
export default styles;
