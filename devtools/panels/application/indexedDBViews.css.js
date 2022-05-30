// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
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

.indexed-db-data-view .data-view-toolbar {
  position: relative;
  background-color: var(--color-background-elevation-1);
  border-bottom: 1px solid var(--color-details-hairline);
}

.indexed-db-data-view .data-grid {
  flex: auto;
}

.indexed-db-data-view .data-grid .data-container tr:nth-last-child(1) {
  background-color: var(--color-background);
}

.indexed-db-data-view .data-grid .data-container tr:nth-last-child(1) td {
  border: 0;
}

.indexed-db-data-view .data-grid .data-container tr:nth-last-child(2) td {
  border-bottom: 1px solid var(--color-details-hairline);
}

.indexed-db-data-view .data-grid:focus .data-container tr.selected {
  background-color: var(--color-background-highlight);
  color: inherit;
}

.indexed-db-data-view .section,
.indexed-db-data-view .section > .header,
.indexed-db-data-view .section > .header .title {
  margin: 0;
  min-height: inherit;
  line-height: inherit;
}

.indexed-db-data-view .data-grid .data-container td .section .header .title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.indexed-db-key-path {
  color: var(--color-accent-red);
  white-space: pre-wrap;
  unicode-bidi: -webkit-isolate;
}

.indexed-db-container {
  overflow: auto;
}

.indexed-db-header {
  min-width: 400px;
  flex-shrink: 0;
  flex-grow: 0;
}

.source-code.indexed-db-key-path {
  font-size: unset !important; /* stylelint-disable-line declaration-no-important */
}

.resources-toolbar {
  padding-right: 10px;
}

.object-store-summary-bar {
  flex: 0 0 27px;
  line-height: 27px;
  padding-left: 5px;
  background-color: var(--color-background-elevation-1);
  border-top: 1px solid var(--color-details-hairline);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/*# sourceURL=indexedDBViews.css */
`);
export default styles;
