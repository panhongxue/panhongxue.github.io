// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (C) 2009 Google Inc. All rights reserved.
 * Copyright (C) 2010 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

.heap-snapshot-view {
  overflow: hidden;
}

.heap-snapshot-view .data-grid {
  border: none;
  flex: auto;
}

.heap-snapshot-view .data-grid tr:empty {
  height: 16px;
  visibility: hidden;
}

.heap-snapshot-view .data-grid span.percent-column {
  width: 35px !important; /* stylelint-disable-line declaration-no-important */
}

.heap-snapshot-view .object-value-object,
.object-value-node {
  display: inline;
  position: static;
}

.heap-snapshot-view .object-value-string {
  white-space: nowrap;
}

.heap-snapshot-view td.object-column .objects-count {
  margin-left: 10px;
  font-size: 11px;
  color: var(--color-text-secondary);
}

.heap-snapshot-view tr:not(.selected) .object-value-id {
  color: var(--color-text-secondary);
}

.profile-view .heap-tracking-overview {
  flex: 0 0 80px;
  height: 80px;
}

.heap-snapshot-view .retaining-paths-view {
  overflow: hidden;
}

.heap-snapshot-view .heap-snapshot-view-resizer {
  background-image: var(--image-file-toolbarResizerVertical);
  background-color: var(--color-background-elevation-1);
  border-bottom: 1px solid var(--color-details-hairline);
  background-repeat: no-repeat;
  background-position: right center, center;
  flex: 0 0 21px;
}

.heap-snapshot-view td.object-column > div > span {
  margin-right: 6px;
}

.heap-snapshot-view .heap-snapshot-view-resizer .title > span {
  display: inline-block;
  padding-top: 3px;
  vertical-align: middle;
  margin-left: 4px;
  margin-right: 8px;
}

.heap-snapshot-view .heap-snapshot-view-resizer * {
  pointer-events: none;
}

.heap-snapshot-view tr:not(.selected) td.object-column span.highlight {
  background-color: inherit;
}

.heap-snapshot-view td.object-column span.heap-object-source-link {
  float: right;
}

.heap-snapshot-view td.object-column span.heap-object-source-link:empty {
  animation: fadeInOut 2s infinite;
}

.heap-snapshot-view td.object-column span.heap-object-source-link:empty::before {
  content: "\\b7\\b7";
  font-weight: bold;
}

@keyframes fadeInOut {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(0.5turn);
  }

  100% {
    transform: rotate(1turn);
  }
}

.heap-snapshot-view tr:not(.selected) td.object-column span.heap-object-tag {
  color: var(--color-text-secondary);
}

.heap-snapshot-view td.object-column span.grayed {
  color: var(--color-text-secondary);
}

.cycled-ancessor-node {
  opacity: 60%;
}

#heap-recording-view .profile-view {
  top: 80px;
}

.heap-overview-container {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
}

#heap-recording-overview-grid .resources-dividers-label-bar {
  pointer-events: auto;
}

.heap-recording-overview-canvas {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
}

.heap-snapshot-statistics-view {
  overflow: auto;
}

.heap-snapshot-stats-pie-chart {
  margin: 12px 30px;
  flex-shrink: 0;
}

.heap-allocation-stack .stack-frame {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-details-hairline);
  padding: 2px;
}

.heap-allocation-stack .stack-frame:focus {
  background-color: var(--legacy-selection-bg-color);
  color: var(--legacy-selection-fg-color);
}

.heap-allocation-stack .stack-frame:focus:hover {
  background-color: var(--legacy-accent-color-hover);
}

.heap-allocation-stack .stack-frame:hover:not(:focus) {
  background-color: var(--color-background-hover-overlay);
}

.heap-allocation-stack .stack-frame .devtools-link {
  color: var(--color-text-secondary);
}

.heap-allocation-stack .stack-frame:focus .devtools-link {
  color: var(--legacy-selection-fg-color);
}

.no-heap-allocation-stack {
  padding: 5px;
}

@media (forced-colors: active) {
  .cycled-ancessor-node {
    opacity: 100%;
  }

  .heap-snapshot-view td.object-column .objects-count,
  .heap-snapshot-view tr:not(.selected) td.object-column span.heap-object-tag,
  .heap-snapshot-view tr:not(.selected) .object-value-id {
    color: ButtonText;
  }
}

/*# sourceURL=heapProfiler.css */
`);
export default styles;
