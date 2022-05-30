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

.tree-outline {
  padding: 0;
}

.tree-outline li.has-warning,
.tree-outline li.not-parsed-ok {
  margin-left: 0;
}

.tree-outline li.filter-match {
  background-color: var(--color-match-highlight);
}

.tree-outline li.has-warning .exclamation-mark,
.tree-outline li.not-parsed-ok .exclamation-mark {
  display: inline-block;
  position: relative;
  width: 11px;
  height: 10px;
  margin: 0 7px 0 0;
  top: 1px;
  left: -36px; /* outdent to compensate for the top-level property indent */
  user-select: none;
  cursor: default;
  z-index: 1;
}

.tree-outline li {
  margin-left: 12px;
  padding-left: 22px;
  white-space: normal;
  text-overflow: ellipsis;
  cursor: auto;
  display: block;
}

.tree-outline li::before {
  display: none;
}

.has-ignorable-error .webkit-css-property {
  color: inherit;
}

.tree-outline li .webkit-css-property {
  margin-left: -22px; /* outdent the first line of longhand properties (in an expanded shorthand) to compensate for the "padding-left" shift in .tree-outline li */
}

.tree-outline > li {
  padding-left: 38px;
  clear: both;
  min-height: 14px;
}

.tree-outline > li .webkit-css-property {
  margin-left: -38px; /* outdent the first line of the top-level properties to compensate for the "padding-left" shift in .tree-outline > li */
}

.tree-outline > li.child-editing {
  padding-left: 8px;
}

.tree-outline > li.child-editing .text-prompt {
  white-space: pre-wrap;
}

.tree-outline > li.child-editing .webkit-css-property {
  margin-left: 0;
}

.tree-outline li.child-editing {
  word-wrap: break-word !important; /* stylelint-disable-line declaration-no-important */
  white-space: normal !important; /* stylelint-disable-line declaration-no-important */
  padding-left: 0;
}

ol:not(.tree-outline) {
  display: none;
  margin: 0;
  padding-inline-start: 12px;
  list-style: none;
}

ol.expanded {
  display: block;
}

.tree-outline li .info {
  padding-top: 4px;
  padding-bottom: 3px;
}

.enabled-button {
  visibility: hidden;
  float: left;
  font-size: 10px;
  margin: 0;
  vertical-align: top;
  position: relative;
  z-index: 1;
  width: 18px;
  left: -40px; /* original -2px + (-38px) to compensate for the first line outdent */
  top: 1px;
  height: 13px;
}

.tree-outline li.editing .enabled-button {
  display: none !important; /* stylelint-disable-line declaration-no-important */
}

.overloaded:not(.has-ignorable-error),
.inactive,
.disabled,
.not-parsed-ok:not(.has-ignorable-error) {
  text-decoration: line-through;
}

.implicit,
.inherited {
  opacity: 50%;
}

.has-ignorable-error {
  color: var(--color-text-disabled);
}

.tree-outline li.editing {
  margin-left: 10px;
  text-overflow: clip;
}

.tree-outline li.editing-sub-part {
  padding: 3px 6px 8px 18px;
  margin: -1px -6px -8px -6px;
  text-overflow: clip;
}

:host-context(.no-affect) .tree-outline li {
  opacity: 50%;
}

:host-context(.no-affect) .tree-outline li.editing {
  opacity: 100%;
}

:host-context(.styles-panel-hovered:not(.read-only)) .webkit-css-property:hover,
:host-context(.styles-panel-hovered:not(.read-only)) .value:hover {
  text-decoration: underline;
  cursor: default;
}

.styles-name-value-separator {
  display: inline-block;
  width: 14px;
  text-decoration: inherit;
  white-space: pre;
}

.styles-clipboard-only {
  display: inline-block;
  width: 0;
  opacity: 0%;
  pointer-events: none;
  white-space: pre;
}

.styles-pane-button {
  width: 15px;
  height: 15px;
  padding: 0;
  border: 0;
  margin: 0 0 0 6px;
  position: absolute;
  top: -1px;
  background-color: var(--color-background-elevation-2);
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.tree-outline li.child-editing .styles-clipboard-only {
  display: none;
}
/* Matched styles */

:host-context(.matched-styles) .tree-outline li {
  margin-left: 0 !important; /* stylelint-disable-line declaration-no-important */
}

.expand-icon {
  user-select: none;
  margin-left: -6px;
  margin-right: 2px;
  margin-bottom: -2px;
}

.tree-outline li:not(.parent) .expand-icon {
  display: none;
}

:host-context(.matched-styles:not(.read-only):hover) .enabled-button {
  visibility: visible;
}

:host-context(.matched-styles:not(.read-only)) .tree-outline li.disabled .enabled-button {
  visibility: visible;
}

:host-context(.matched-styles) ol.expanded {
  margin-left: 16px;
}

.devtools-link-styled-trim {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 80%;
  vertical-align: bottom;
}

devtools-css-angle,
devtools-css-length {
  display: inline-block;
}

/*# sourceURL=stylesSectionTree.css */
`);
export default styles;
