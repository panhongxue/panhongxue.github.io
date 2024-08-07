// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.paused-status {
  --override-paused-status-background-color: hsl(50deg 100% 95%);
  --override-paused-status-color: rgb(107 97 48);

  padding: 6px;
  border-bottom: 1px solid transparent;
  border-top: 1px solid var(--color-details-hairline);
  background-color: var(--override-paused-status-background-color);
  color: var(--override-paused-status-color);
}

.-theme-with-dark-background .paused-status,
:host-context(.-theme-with-dark-background) .paused-status {
  --override-paused-status-background-color: hsl(46deg 98% 22%);
  --override-paused-status-color: #ccc;
}

.paused-status.error-reason {
  --override-error-reason-background-color: hsl(0deg 100% 97%);
  --override-error-reason-color: rgb(107 59 59);

  background-color: var(--override-error-reason-background-color);
  color: var(--override-error-reason-color);
}

.-theme-with-dark-background .paused-status.error-reason,
:host-context(.-theme-with-dark-background) .paused-status.error-reason {
  --override-error-reason-background-color: rgb(79 0 0);
  --override-error-reason-color: rgb(196 148 148);
}

.status-main {
  font-weight: bold;
  padding-left: 15px;
  position: relative;
}

.status-sub:not(:empty) {
  padding-left: 15px;
  padding-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.paused-status.error-reason .status-sub {
  color: var(--color-red);
  line-height: 11px;
  max-height: 27px;
  user-select: text;
}

.status-icon {
  filter: hue-rotate(190deg);
  position: absolute;
  left: 0;
  top: calc(50% - 5px);
}

.paused-status.error-reason .status-icon {
  filter: none;
}

/*# sourceURL=debuggerPausedMessage.css */
`);
export default styles;
