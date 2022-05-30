// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.timeline-flamechart-popover {
  overflow: hidden;
}

.timeline-flamechart-popover span {
  margin-right: 5px;
}

.timeline-flamechart-popover span.timeline-info-network-time {
  color: var(--color-primary);
}

.timeline-flamechart-popover span.timeline-info-time {
  color: var(--color-accent-green);
}

.timeline-flamechart-popover span.timeline-info-warning {
  color: var(--color-accent-red);
}

.timeline-flamechart-popover span.timeline-info-warning * {
  color: inherit;
}

/*# sourceURL=timelineFlamechartPopover.css */
`);
export default styles;
