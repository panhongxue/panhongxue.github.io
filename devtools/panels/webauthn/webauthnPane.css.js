// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.webauthn-pane {
  overflow: auto;
  min-width: 500px;
}

.webauthn-toolbar-container {
  display: flex;
  background-color: var(--color-background-elevation-1);
  border-bottom: var(--legacy-divider-border);
  flex: 0 0 auto;
}

.webauthn-toolbar {
  border-bottom: var(--legacy-divider-border);
  display: inline-block;
}

.authenticators-view {
  margin: 0 10px;
  min-height: auto;
  display: none;
}

.webauthn-pane.enabled .authenticators-view {
  display: block;
}
/* New Authenticator Section */
.new-authenticator-title {
  line-height: 24px;
  font-weight: bold;
  display: block;
}

.new-authenticator-container {
  display: none;
  margin: 10px 10px;
}

.webauthn-pane.enabled .new-authenticator-container {
  display: block;
}

.new-authenticator-form {
  border: none;
  padding: 10px 0;
  flex: 0 0 auto;
  margin: 0;
}

.webauthn-pane .chrome-select {
  width: 120px;
}
/* Active Authenticator Section */
.authenticator-section {
  display: block;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-details-hairline);
}

.authenticator-fields {
  border: none;
  padding: 10px 0;
  flex: 0 0 auto;
  margin: 0;
}

.authenticator-field {
  display: flex;
  margin: auto;
}

.authenticator-section-title {
  line-height: 24px;
  width: 260px;
  display: inline-block;
}

.authenticator-section-title .authenticator-name-field {
  width: 220px;
  display: inline-block;
  font-weight: bold;
  border: none;
  animation: save-flash 0.2s;
  text-overflow: ellipsis;
}

.authenticator-section-title.editing-name .authenticator-name-field {
  border-bottom: 1px solid var(--input-outline);
  font-weight: normal;
  animation: none;
}

.authenticator-field-value {
  padding: 5px 0 5px 0;
  display: inline-block;
  font-family: monospace;
}

.authenticator-option-checkbox {
  position: relative;
  top: 2px;
}

.authenticator-option {
  display: flex;
  padding-bottom: 10px;
  margin: auto;
}

.authenticator-option-label {
  text-align: right;
  width: 200px;
  display: inline-block;
  padding: 5px 10px 0 0;
}

.text-button {
  float: right;
  white-space: nowrap;
  overflow: hidden;
  min-width: 28px;
  background: transparent;
  border: none;
  color: var(--color-link);
  text-decoration: underline;
  cursor: pointer;
}

td .text-button {
  min-width: 20px;
  margin: auto;
}

.active-button-container {
  display: inline-block;
  min-width: 28px;
}

.edit-name-toolbar {
  display: inline-block;
  vertical-align: middle;
}

@keyframes save-flash {
  from { opacity: 0%; }
  to { opacity: 100%; }
}
/* Credentials Table */

.data-grid-data-grid-node.centered {
  text-align: center;
}

.data-grid td {
  vertical-align: middle;
}

.credentials-title {
  display: block;
  font-weight: bold;
  margin: 8px 0;
}

.code {
  font-family: monospace;
}

.learn-more {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.webauthn-pane.enabled .learn-more {
  display: none;
}

/*# sourceURL=webauthnPane.css */
`);
export default styles;
