// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.node-icon {
  width: 28px;
  height: 26px;
  background-image: var(--image-file-nodeIcon);
  background-size: 17px 17px;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 80%;
  cursor: auto;
}

.node-icon:hover {
  opacity: 100%;
}

.node-icon.inactive {
  filter: grayscale(100%);
}

/*# sourceURL=nodeIcon.css */
`);
export default styles;
