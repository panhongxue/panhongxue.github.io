// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/* Profiler Style */

#profile-views {
  flex: auto;
  position: relative;
}

.profile-view .data-grid table.data {
  background: var(--color-background);
}

.profile-view .data-grid tr:not(.selected) .highlight {
  background-color: var(--color-selection-highlight);
}

.profile-view .data-grid tr:hover td:not(.bottom-filler-td) {
  background-color: var(--color-background-hover-overlay);
}

.profile-view .data-grid td.numeric-column {
  text-align: right;
}

.profile-view .data-grid div.profile-multiple-values {
  float: right;
}

.profile-view .data-grid span.percent-column {
  color: var(--color-text-secondary);
  width: 50px;
  display: inline-block;
}

.profile-view .data-grid tr.selected span {
  color: inherit;
}

.profiles-toolbar {
  background-color: var(--color-background-elevation-1);
  border-bottom: 1px solid var(--color-details-hairline);
  flex-shrink: 0;
}

.profiles-tree-sidebar {
  flex: auto;
  overflow: hidden;
}

.profiles-sidebar-tree-box {
  overflow-y: auto;
}

.profile-view {
  display: flex;
  overflow: hidden;
}

.profile-view .data-grid {
  border: none;
  flex: auto;
}

.profile-view .data-grid th.self-column,
.profile-view .data-grid th.total-column {
  text-align: center;
}

.profile-node-file {
  float: right;
  color: var(--color-text-secondary);
}

.profile-warn-marker {
  vertical-align: -1px;
  margin-right: 2px;
}

.cpu-profile-flame-chart-overview-container {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
}

#cpu-profile-flame-chart-overview-container {
  border-bottom: 1px solid var(--color-details-hairline);
  overflow: hidden;
}

.cpu-profile-flame-chart-overview-canvas {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
}

#cpu-profile-flame-chart-overview-grid .resources-dividers-label-bar {
  pointer-events: auto;
}

.cpu-profile-flame-chart-overview-pane {
  flex: 0 0 80px !important; /* stylelint-disable-line declaration-no-important */
}

.profile-text-view {
  padding: 10px;
  overflow: auto;
  margin: 0;
  user-select: text;
  cursor: text;
}

@media (forced-colors: active) {
  .profile-view .data-grid tr:hover td:not(.bottom-filler-td) {
    background: Highlight;
  }

  .profile-view .data-grid table.data {
    background: transparent;
  }
}

/*# sourceURL=profilesPanel.css */
`);
export default styles;
