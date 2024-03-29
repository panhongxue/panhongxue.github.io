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

.protocol-monitor {
  --override-data-grid-sent-message-row-background-color: rgb(240 246 255);
}

.-theme-with-dark-background .protocol-monitor,
:host-context(.-theme-with-dark-background) .protocol-monitor {
  --override-data-grid-sent-message-row-background-color: rgb(43 46 56);
}

.protocol-monitor .protocol-monitor-toolbar {
  border-bottom: 1px solid var(--color-details-hairline);
}

.protocol-monitor .protocol-monitor-bottom-toolbar {
  border-top: 1px solid var(--color-details-hairline);
}

/*# sourceURL=protocolMonitor.css */
`);
export default styles;
