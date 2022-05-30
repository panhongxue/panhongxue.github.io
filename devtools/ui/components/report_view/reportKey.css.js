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

:host {
  line-height: 28px;
  margin: 0 0 8px 0;
}

.key {
  color: var(--color-text-secondary);
  padding: 0 6px;
  text-align: right;
  white-space: pre;
}

/*# sourceURL=reportKey.css */
`);
export default styles;
