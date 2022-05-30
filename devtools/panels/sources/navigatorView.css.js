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

.navigator-toolbar {
  border-bottom: 1px solid var(--color-details-hairline);
  padding-left: 8px;
}

/*# sourceURL=navigatorView.css */
`);
export default styles;
