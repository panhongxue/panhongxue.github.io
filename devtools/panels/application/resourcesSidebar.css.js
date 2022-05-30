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
  padding-left: 0;
  color: var(--color-text-primary);
}

.tree-outline > ol {
  padding-bottom: 10px;
}

.tree-outline li {
  min-height: 20px;
}

li.storage-group-list-item {
  padding: 10px 8px 6px 8px;
}

li.storage-group-list-item:not(:first-child) {
  border-top: 1px solid var(--color-details-hairline);
}

li.storage-group-list-item::before {
  display: none;
}

.icons-container .red-icon {
  background-color: var(--color-accent-red);
}

.navigator-file-tree-item {
  background: linear-gradient(45deg, hsl(0deg 0% 50%), hsl(0deg 0% 70%)); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

.navigator-folder-tree-item {
  background: linear-gradient(45deg, hsl(210deg 82% 65%), hsl(210deg 82% 80%)); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

.navigator-script-tree-item {
  background: linear-gradient(45deg, hsl(48deg 70% 50%), hsl(48deg 70% 70%)); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

.navigator-stylesheet-tree-item {
  background: linear-gradient(45deg, hsl(256deg 50% 50%), hsl(256deg 50% 70%)); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

.navigator-image-tree-item,
.navigator-font-tree-item {
  background: linear-gradient(45deg, hsl(109deg 33% 50%), hsl(109deg 33% 70%)); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
}

.window-closed .tree-element-title {
  text-decoration: line-through;
}

/*# sourceURL=resourcesSidebar.css */
`);
export default styles;
