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

.signed-exchange-info-view {
  user-select: text;
  overflow: auto;
}

.signed-exchange-info-tree {
  flex-grow: 1;
  overflow-y: auto;
  margin: 0;
}

/*# sourceURL=signedExchangeInfoView.css */
`);
export default styles;
