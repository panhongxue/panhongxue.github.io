// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline {
  padding-left: 0;
}

.tree-outline > ol {
  padding-bottom: 5px;
  border-bottom: solid 1px var(--color-details-hairline);
}

.tree-outline > .parent {
  user-select: none;
  font-weight: bold;
  color: var(--color-text-primary);
  margin-top: -1px;
  display: flex;
  align-items: center;
  height: 26px;
}

.tree-outline li {
  padding-left: 5px;
  line-height: 20px;
}

.tree-outline li:not(.parent) {
  display: block;
  margin-left: 10px;
}

.tree-outline li:not(.parent)::before {
  display: none;
}

.tree-outline .header-name {
  color: var(--color-text-secondary);
  display: inline-block;
  margin-right: 0.25em;
  font-weight: bold;
  vertical-align: top;
  white-space: pre-wrap;
}

.tree-outline .header-separator {
  user-select: none;
}

.tree-outline .header-value {
  display: inline;
  margin-right: 1em;
  white-space: pre-wrap;
  word-break: break-all;
  margin-top: 1px;
}

.tree-outline .header-toggle {
  display: inline;
  margin-left: 30px;
  font-weight: normal;
  color: var(--color-text-disabled);
}

.tree-outline .header-toggle:hover {
  --override-header-hover-color: rgb(20% 20% 45%);

  color: var(--override-header-hover-color);
  cursor: pointer;
}

.-theme-with-dark-background .tree-outline .header-toggle:hover,
:host-context(.-theme-with-dark-background) .tree-outline .header-toggle:hover {
  --override-header-hover-color: rgb(140 140 204);
}

.tree-outline .error-log {
  color: var(--color-red);
  display: inline-block;
  margin-right: 0.25em;
  margin-left: 0.25em;
  font-weight: bold;
  vertical-align: top;
  white-space: pre-wrap;
}

.tree-outline .hex-data {
  display: block;
  word-break: break-word;
  margin-left: 20px;
}

.tree-outline .error-field {
  color: var(--color-red);
}

/*# sourceURL=signedExchangeInfoTree.css */
`);
export default styles;
