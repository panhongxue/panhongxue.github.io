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

.timeline-toolbar-container {
  display: flex;
  flex: none;
}

.timeline-toolbar-container > .toolbar {
  background-color: var(--color-background-elevation-1);
  border-bottom: var(--legacy-divider-border);
}

.timeline-main-toolbar {
  flex: 1 1 auto;
}

.timeline-settings-pane {
  flex: none;
  background-color: var(--color-background-elevation-1);
  border-bottom: var(--legacy-divider-border);
}

#timeline-overview-panel {
  flex: none;
  position: relative;
  border-bottom: 1px solid var(--color-details-hairline);
}

#timeline-overview-grid {
  background-color: var(--color-background);
}

#timeline-overview-grid .timeline-grid-header {
  height: 12px;
}

#timeline-overview-grid .resources-dividers-label-bar {
  pointer-events: auto;
  height: 12px;
}

#timeline-overview-grid .resources-divider-label {
  top: 1px;
}

.timeline-details-split {
  flex: auto;
}

.timeline.panel .status-pane-container {
  z-index: 1000;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.timeline.panel .status-pane-container.tinted {
  background-color: var(--color-background-elevation-2);
  pointer-events: auto;
}

#timeline-overview-panel .overview-strip {
  margin-top: 2px;
  justify-content: center;
}

#timeline-overview-panel .overview-strip .timeline-overview-strip-title {
  color: var(--color-text-secondary);
  font-size: 10px;
  font-weight: bold;
  z-index: 100;
  background-color: var(--color-background-opacity-80);
  padding: 0 4px;
  position: absolute;
  top: -2px;
  right: 0;
}

#timeline-overview-cpu-activity {
  flex-basis: 20px;
}

#timeline-overview-network {
  flex-basis: 8px;
}

#timeline-overview-framerate {
  flex-basis: 16px;
  margin-top: 0 !important; /* stylelint-disable-line declaration-no-important */
}

#timeline-overview-filmstrip {
  flex-basis: 30px;
}

#timeline-overview-memory {
  flex-basis: 20px;
}

#timeline-overview-framerate::before,
#timeline-overview-network::before,
#timeline-overview-cpu-activity::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid var(--divider-line);
  z-index: -200;
}

.overview-strip .background {
  z-index: -10;
}

#timeline-overview-responsiveness {
  flex-basis: 5px;
  margin-top: 0 !important; /* stylelint-disable-line declaration-no-important */
}

#timeline-overview-input {
  flex-basis: 6px;
}

#timeline-overview-pane {
  flex: auto;
  position: relative;
  overflow: hidden;
}

#timeline-overview-container {
  display: flex;
  flex-direction: column;
  flex: none;
  position: relative;
  overflow: hidden;
}

#timeline-overview-container canvas {
  width: 100%;
  height: 100%;
}

.popover ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.memory-graph-label {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 9px;
  color: var(--color-text-secondary);
  white-space: nowrap;
  padding: 0 4px;
  background-color: var(--color-background-opacity-80);
}

#memory-graphs-canvas-container {
  overflow: hidden;
  flex: auto;
  position: relative;
}

#memory-counters-graph {
  flex: auto;
}

#memory-graphs-canvas-container .memory-counter-marker {
  position: absolute;
  border-radius: 3px;
  width: 5px;
  height: 5px;
  margin-left: -3px;
  margin-top: -2px;
}

#memory-graphs-container .timeline-memory-header {
  flex: 0 0 26px;
  background-color: var(--color-background-elevation-1);
  border-bottom: 1px solid var(--color-details-hairline);
  justify-content: space-between;
}

#memory-graphs-container .timeline-memory-header::after {
  content: "";
  background-image: var(--image-file-toolbarResizerVertical);
  background-repeat: no-repeat;
  background-position: right center, center;
  flex: 20px 0 0;
  margin: 0 4px;
}

.timeline-memory-toolbar {
  flex-shrink: 1;
}

.memory-counter-value {
  margin: 8px;
}

#counter-values-bar {
  flex: 0 0 20px;
  border-top: solid 1px var(--color-details-hairline);
  width: 100%;
  overflow: hidden;
  line-height: 18px;
}

#timeline-overview-coverage {
  flex-basis: 20px;
}

.timeline-overview-coverage-label {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 9px;
  color: var(--color-text-secondary);
  white-space: nowrap;
  padding: 0 4px;
  background-color: var(--color-background-opacity-80);
}

.timeline-details {
  vertical-align: top;
}

.timeline-details-view {
  color: var(--color-text-secondary);
  overflow: hidden;
}

.timeline-details-view-body {
  flex: auto;
  overflow: auto;
  position: relative;
  background-color: var(--color-background-elevation-1);
  user-select: text;
}

.timeline-details-view-block {
  flex: none;
  display: flex;
  background-color: var(--color-background);
  flex-direction: column;
  padding-bottom: 5px;
  border-bottom: var(--legacy-divider-border);
}

.timeline-details-view-row {
  padding-left: 10px;
  line-height: 20px;
}

.timeline-details-view-block .timeline-details-stack-values {
  flex-direction: column !important; /* stylelint-disable-line declaration-no-important */
}

.timeline-details-chip-title {
  font-size: 13px;
  padding: 8px;
  display: flex;
  align-items: center;
}

.timeline-details-view-row-title:not(:empty) {
  color: var(--color-text-secondary);
  overflow: hidden;
  padding-right: 10px;
  display: inline-block;
}

.timeline-details-warning {
  --override-details-warning-background-color: rgb(250 209 209 / 48%);

  background-color: var(--override-details-warning-background-color);
}

.-theme-with-dark-background .timeline-details-warning,
:host-context(.-theme-with-dark-background) .timeline-details-warning {
  --override-details-warning-background-color: rgb(87 10 10 / 48%);
}

.timeline-details-warning .timeline-details-view-row-title {
  color: var(--color-red);
}

.timeline-details-view-row-value {
  display: inline-block;
  user-select: text;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.timeline-details-warning .timeline-details-view-row-value {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.timeline-details-view-row-value .stack-preview-container {
  line-height: 11px;
}

.timeline-details-view-pie-chart-wrapper {
  margin: 4px 0;
}

.timeline-details-view-pie-chart {
  margin-top: 5px;
}

.timeline-details-view-row-stack-trace {
  padding: 4px 0;
  line-height: inherit;
}

.timeline-flamechart {
  overflow: hidden;
}

.timeline-flamechart-resizer {
  flex: 8px 0 0;
  background-color: var(--color-background-elevation-1);
  border: 1px var(--color-details-hairline);
  border-style: solid none;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}

.timeline-network-resizer-disabled > .timeline-flamechart-resizer {
  display: none;
}

.timeline-flamechart-resizer::after {
  content: "...";
  font-size: 14px;
  margin-bottom: -1px;
}

.timeline-layers-view-properties table {
  width: 100%;
  border-collapse: collapse;
}

.timeline-layers-view-properties td {
  border: 1px solid var(--color-details-hairline);
  line-height: 22px;
}

.timeline-filmstrip-preview > img {
  margin-top: 5px;
  max-width: 500px;
  max-height: 300px;
  cursor: pointer;
  border: 1px solid var(--color-details-hairline);
}

.timeline-tree-view {
  display: flex;
  overflow: hidden;
}

.timeline-tree-view .toolbar {
  background-color: var(--color-background-elevation-1);
  border-bottom: var(--legacy-divider-border);
}

.timeline-tree-view .data-grid {
  border: none;
  flex: auto;
}

.timeline-tree-view .data-grid .data-container {
  overflow-y: scroll;
  top: 21px;
}

.timeline-tree-view .data-grid.data-grid-fits-viewport .corner {
  display: table-cell;
}

.timeline-tree-view .data-grid table.data {
  background: var(--color-background);
}

.timeline-tree-view .data-grid tr:hover td:not(.bottom-filler-td) {
  background-color: var(--color-background-hover-overlay);
}

.timeline-tree-view .data-grid td.numeric-column {
  text-align: right;
  position: relative;
}

.timeline-tree-view .data-grid div.background-percent-bar {
  float: right;
}

.timeline-tree-view .data-grid span.percent-column {
  color: var(--color-text-secondary);
  width: 45px;
  display: inline-block;
}

.timeline-tree-view .data-grid tr.selected span {
  color: inherit;
}

.timeline-tree-view .data-grid .name-container {
  display: flex;
  align-items: center;
  padding-left: 2px;
}

.timeline-tree-view .data-grid .name-container .activity-icon {
  width: 12px;
  height: 12px;
  border: 1px solid var(--divider-line);
  margin: 3px 0;
}

.timeline-tree-view .data-grid .name-container .activity-icon-container {
  margin-right: 3px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  overflow: hidden;
}

.timeline-tree-view .data-grid .name-container .activity-warning::after {
  content: "[deopt]";
  margin: 0 4px;
  line-height: 12px;
  font-size: 10px;
  color: var(--color-text-disabled);
}

.timeline-tree-view .data-grid tr.selected .name-container .activity-warning::after {
  color: var(--color-text-secondary-selected);
}

.timeline-tree-view .data-grid .name-container .activity-link {
  flex: auto;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5px;
}

.timeline-tree-view .data-grid .background-bar-container {
  position: absolute;
  left: 3px;
  right: 0;
}

.timeline-tree-view .data-grid .background-bar {
  --override-background-bar-background-color: hsl(43deg 84% 64% / 20%);
  --override-background-bar-border-color: hsl(43deg 84% 64%);

  float: right;
  height: 18px;
  background-color: var(--override-background-bar-background-color);
  border-bottom: 1px solid var(--override-background-bar-border-color);
}

.timeline-tree-view .data-grid .selected .background-bar {
  background-color: var(--color-background-opacity-50);
  border-bottom: 1px solid var(--color-background-opacity-80);
}

.-theme-with-dark-background .timeline-tree-view .data-grid .background-bar,
:host-context(.-theme-with-dark-background) .timeline-tree-view .data-grid .background-bar {
  --override-background-bar-background-color: rgb(169 126 15 / 20%);
  --override-background-bar-border-color: rgb(169 126 15);
}

.timeline-tree-view .timeline-details-view-body .full-widget-dimmed-banner {
  background-color: inherit;
}

.timeline-details .filter-input-field {
  width: 120px;
}

.timeline-tree-view .data-grid .header-container {
  height: 21px;
}

.timeline-stack-view-header {
  height: 27px;
  background-color: var(--color-background-elevation-1);
  padding: 6px 10px;
  color: var(--color-text-secondary);
  white-space: nowrap;
  border-bottom: var(--legacy-divider-border);
}

.timeline-landing-page {
  position: absolute;
  background-color: var(--color-background);
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-size: 13px;
  color: var(--color-text-secondary);
}

@media (forced-colors: active) {
  .timeline-tree-view .data-grid .name-container .activity-icon {
    forced-color-adjust: none;
  }

  .timeline-tree-view .data-grid tr.selected span.percent-column,
  .timeline-tree-view .data-grid tr.selected div.background-percent-bar span,
  .timeline-tree-view .data-grid tr.selected .name-container .activity-link .devtools-link {
    color: HighlightText;
  }

  .timeline-tree-view .data-grid .background-bar,
  .timeline-tree-view .data-grid tr:hover td:not(.bottom-filler-td) {
    background-color: transparent;
  }

  .timeline-tree-view .data-grid tr.selected .background-bar {
    background-color: transparent;
    border-bottom-color: HighlightText;
  }
}

.timeline-additional-metrics {
  display: flex;
  flex: 0 0 27px;
  background-color: var(--color-background-elevation-1);
  border-top: var(--legacy-divider-border);
  overflow: hidden;
  z-index: 100;
}

.timeline-details-view-row-stack-trace div {
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 12px;
}

.timeline-details-view-body > div {
  overflow-y: hidden;
  overflow-x: auto;
}

.timeline-landing-page > div {
  max-width: 450px;
  margin: 10px;
}

.timeline-details-chip-title > div {
  width: 12px;
  height: 12px;
  border: 1px solid var(--color-details-hairline);
  display: inline-block;
  margin-right: 4px;
  content: " ";
}

.timeline-paint-profiler-log-split > div:last-child {
  background-color: var(--color-background-elevation-1);
  z-index: 0;
}

.timeline-layers-view > div:last-child,
.timeline-layers-view-properties > div:last-child {
  background-color: var(--color-background-elevation-1);
}

.timeline.panel .status-pane-container > div {
  pointer-events: auto;
}

.timeline-landing-page > div > p {
  flex: none;
  white-space: pre-line;
}

.timeline-tree-view .data-grid .name-container div {
  flex: none;
}

.status-pane-container > .small-dialog {
  width: 100%;
  height: 100%;
}

/*# sourceURL=timelinePanel.css */
`);
export default styles;
