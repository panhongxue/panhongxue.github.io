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

.devtools-link {
  display: inline-block;
}

.security-main-view {
  user-select: text;
  overflow-x: hidden;
  overflow-y: auto;
  /* crbug.com/1152736 Consider moving --toolbar-bg-color to theme colors */
  background-color: var(--color-background-elevation-1);
}

.security-main-view > div {
  flex-shrink: 0;
}

.security-summary-section-title {
  font-size: 15px;
  margin: 12px 16px;
}

.lock-spectrum {
  margin: 8px 16px;
  display: flex;
  align-items: flex-start;
}

.security-summary .lock-icon {
  flex: none;
  width: 16px;
  height: 16px;
  margin: 0 0;
}
/* Separate the middle icon from the other two. */

.security-summary .lock-icon-neutral {
  margin: 0 16px;
}

.security-summary:not(.security-summary-secure) .lock-icon-secure,
.security-summary:not(.security-summary-neutral) .lock-icon-neutral,
.security-summary:not(.security-summary-insecure) .lock-icon-insecure,
.security-summary:not(.security-summary-insecure-broken) .lock-icon-insecure-broken {
  background-color: var(--color-text-disabled);
}

@media (forced-colors: active) {
  .security-summary-neutral .lock-icon-neutral {
    background-color: Highlight;
  }

  .security-summary:not(.security-summary-secure) .lock-icon-secure,
  .security-summary:not(.security-summary-neutral) .lock-icon-neutral,
  .security-summary:not(.security-summary-insecure) .lock-icon-insecure,
  .security-summary:not(.security-summary-insecure-broken) .lock-icon-insecure-broken {
    background-color: canvastext;
  }
}

.triangle-pointer-container {
  margin: 8px 24px 0;
  padding: 0 0;
}

.triangle-pointer-wrapper {
  /* Defaults for dynamic properties. */
  transform: translateX(0);
  transition: transform 0.3s;
}

.triangle-pointer {
  width: 12px;
  height: 12px;
  margin-bottom: -6px;
  margin-left: -6px;
  transform: rotate(-45deg);
  border-style: solid;
  border-width: 1px 1px 0 0;
  background: var(--color-background);
  border-color: var(--color-background-elevation-1);
}

.security-summary-secure .triangle-pointer-wrapper {
  transform: translateX(0);
}

.security-summary-neutral .triangle-pointer-wrapper {
  transform: translateX(32px);
}

.security-summary-insecure .triangle-pointer-wrapper {
  transform: translateX(64px);
}

.security-summary-insecure-broken .triangle-pointer-wrapper {
  transform: translateX(64px);
}

.security-summary-text {
  padding: 16px 24px;
  border-style: solid;
  border-width: 1px 0;
  font-size: 15px;
  background: var(--color-background);
  border-color: var(--color-background-elevation-1);
}

.security-summary-secure .triangle-pointer,
.security-summary-secure .security-summary-text,
.security-explanation-title-secure {
  color: var(--color-accent-green);
}

.security-summary-insecure-broken .triangle-pointer,
.security-summary-insecure-broken .security-summary-text,
.security-explanation-title-neutral,
.security-explanation-title-insecure,
.security-explanation-title-insecure-broken {
  color: var(--color-accent-red);
}

.security-explanation-list {
  padding-bottom: 16px;
}

.security-explanation-list:empty {
  border-bottom: none;
  padding: 0;
}

.security-explanations-main {
  margin-top: -5px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-background-elevation-1);
}

.security-explanations-extra {
  background-color: transparent;
}

.security-explanation {
  padding: 11px;
  display: flex;
  white-space: nowrap;
  border: none;
  color: var(--color-text-secondary);
}

.security-explanation-text {
  flex: auto;
  white-space: normal;
  max-width: 400px;
}

.security-explanation .security-property {
  flex: none;
  width: 16px;
  height: 16px;
  margin-right: 16px;
}

.security-explanation-title {
  color: var(--color-text-secondary);
  margin-top: 1px;
  margin-bottom: 8px;
}

.security-mixed-content {
  margin-top: 8px;
}

.security-explanation-recommendations {
  padding-inline-start: 16px;
}

.security-explanation-recommendations > li {
  margin-bottom: 4px;
}

/*# sourceURL=mainView.css */
`);
export default styles;
