// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-cookies-view {
  overflow: auto;
  padding: 12px;
  height: 100%;
  background-color: var(--color-background);
}

.request-cookies-view .request-cookies-title {
  font-size: 12px;
  font-weight: bold;
  margin-right: 30px;
  color: var(--color-text-primary);
}

.request-cookies-view .cookie-line {
  margin-top: 6px;
  display: inline-block;
}

.request-cookies-view .cookies-panel-item {
  margin-top: 6px;
  margin-bottom: 16px;
  flex: none;
}

@media (forced-colors: active) {
  td.flagged-cookie-attribute-cell .cookie-warning-icon {
    forced-color-adjust: none;
    filter: grayscale();
  }
}

/*# sourceURL=requestCookiesView.css */
`);
export default styles;
