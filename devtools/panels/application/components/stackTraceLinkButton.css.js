// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

button.link {
  color: var(--color-link);
  text-decoration: underline;
  cursor: pointer;
  padding: 2px 0; /* adjust focus ring size */
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

/*# sourceURL=stackTraceLinkButton.css */
`);
export default styles;
