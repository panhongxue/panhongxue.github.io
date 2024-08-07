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

.message {
  line-height: 20px;
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 4px;
  user-select: text;
}

.message p {
  margin-bottom: 16px;
  margin-block-start: 2px;
}

.message ul {
  list-style-type: none;
  list-style-position: inside;
  padding-inline-start: 0;
}

.message li {
  margin-top: 8px;
  display: list-item;
}

.message li::before {
  content: "→";
  -webkit-mask-image: none;
  padding-right: 5px;
  position: relative;
  top: -1px;
}

.message code {
  color: var(--color-text-primary);
  font-size: 12px;
  user-select: text;
  cursor: text;
  background: var(--color-background-elevation-1);
}

/*# sourceURL=markdownView.css */
`);
export default styles;
