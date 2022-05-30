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

.css-var-link:not(.undefined) {
  cursor: pointer;
  text-underline-offset: 2px;
  color: var(--color-link);
}

.css-var-link:hover:not(.undefined) {
  text-decoration: underline;
}

.css-var-link:focus:not(:focus-visible) {
  outline: none;
}

.css-var-link.undefined {
  --override-css-var-link-undefined-color: rgb(102 102 102);

  color: var(--override-css-var-link-undefined-color);
}

/*# sourceURL=cssVarSwatch.css */
`);
export default styles;
