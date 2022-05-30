// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.media-attributes-view {
  border-bottom: 1px solid var(--color-details-hairline);
}

.media-property-renderer {
  line-height: 20px;
  min-height: 28px;
  padding: 4px 10px;
}

.media-property-renderer-hidden {
  display: none;
}

.media-property-renderer-title {
  font-size: 14px;
}

.media-property-renderer-contents {
  position: absolute;
  left: 200px;
  overflow: hidden;
  height: 20px;
}

.media-property-renderer:nth-child(even) {
  background: var(--color-background-elevation-0);
}

.media-property-renderer:hover {
  background: var(--color-background-hover-overlay);
}

.-theme-with-dark-background .media-property-renderer:nth-child(even) {
  background: rgb(41 41 41);
}

.media-properties-frame {
  display: block;
  overflow-x: hidden;
}

/*# sourceURL=playerPropertiesView.css */
`);
export default styles;
