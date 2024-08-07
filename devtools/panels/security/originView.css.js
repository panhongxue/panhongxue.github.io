// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.title-section {
  padding: 16px 0 24px 0;
  border-bottom: 1px solid var(--color-background-elevation-2);
}

.title-section-header {
  padding-left: 16px;
  padding-bottom: 10px;
  font-size: 14px;
}

.security-origin-view {
  overflow-x: hidden;
  overflow-y: scroll;
  display: block;
  user-select: text;
}

.security-origin-view .origin-view-section {
  border-bottom: 1px solid var(--color-background-elevation-2);
  padding: 12px 6px 12px  24px;
  font-size: 12px;
}

.origin-view-notes {
  margin-top: 2px;
  color: var(--color-text-secondary);
}

.origin-view-section-notes {
  margin-top: 6px;
  color: var(--color-text-secondary);
}

.security-origin-view .origin-display {
  font-size: 12px;
  padding-left: 32px;
  display: flex;
  align-items: center;
}

.title-section > .view-network-button {
  padding: 6px 0 0 16px;
}

.security-origin-view .origin-display .security-property {
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  left: 13px;
}

.security-origin-view .origin-view-section-title {
  margin-top: 4px;
  margin-bottom: 4px;
  font-weight: bold;
}

.security-origin-view .details-table-row {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  line-height: 22px;
}

.security-origin-view .details-table-row > div {
  align-items: flex-start;
}

.security-origin-view .details-table-row > div:first-child {
  color: var(--color-text-secondary);
  width: 110px;
  margin-right: 1em;
  flex: none;
  display: flex;
  justify-content: flex-end;
}

.security-origin-view .details-table-row > div:nth-child(2) {
  flex: auto;
  white-space: normal;
}

.security-origin-view .sct-details .details-table .details-table-row:last-child div:last-child {
  border-bottom: 1px solid var(--color-background-elevation-2);
  padding-bottom: 10px;
}

.security-origin-view .sct-details .details-table:last-child .details-table-row:last-child div:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.security-origin-view .details-toggle {
  margin-left: 126px;
}

.security-origin-view .sct-toggle {
  margin-left: 145px;
  padding-top: 5px;
}

.security-origin-view .details-table .empty-san {
  color: var(--color-text-disabled);
}

.security-origin-view .details-table .san-entry {
  display: block;
}

.security-origin-view .truncated-san .truncated-entry {
  display: none;
}

.origin-button {
  margin-top: 4px;
  margin-left: 0;
}

.origin-view-section:last-child {
  border-bottom: none;
}

.devtools-link {
  display: inline-flex;
}

/*# sourceURL=originView.css */
`);
export default styles;
