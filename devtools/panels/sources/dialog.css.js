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
  padding: 10px;
}

.widget {
  align-items: center;
}

label {
  white-space: nowrap;
}

input[type=text].add-source-map {
  box-shadow: 0 0 0 1px var(--box-shadow-outline-color);
  font-size: inherit;
  margin: 0 8px 0 5px;
}

/*# sourceURL=dialog.css */
`);
export default styles;