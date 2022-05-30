// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as i18n from '../../core/i18n/i18n.js';
import * as SDK from '../../core/sdk/sdk.js';
import * as LitHtml from '../../ui/lit-html/lit-html.js';
import * as ReportView from '../../ui/components/report_view/report_view.js';
import * as UI from '../../ui/legacy/legacy.js';
const UIStrings = {
    /**
     * @description Title text in Back-forward Cache view of the Application panel
     */
    mainFrame: 'Main Frame',
    /**
     * @description Section header text in Back-forward Cache view of the Application panel
     */
    lastMainFrameNavigation: 'Last Main Frame Navigation',
    /**
     * @description Title text in Back-forward Cache view of the Application panel
     */
    backForwardCacheTitle: 'Back-forward Cache',
    /**
     * @description Status text for the status of the main frame
     */
    unavailable: 'unavailable',
    /**
     * @description Entry name text in the Back-forward Cache view of the Application panel
     */
    url: 'URL',
    /**
     * @description Entry name text in the Back-forward Cache view of the Application panel
     */
    bfcacheStatus: 'Back-forward Cache Status',
    /**
     * @description Status text for the status of the back-forward cache status
     */
    unknown: 'unknown',
    /**
     * @description Status text for the status of the back-forward cache status indicating that
     * the back-forward cache was not used and a normal navigation occured instead.
     */
    normalNavigation: 'Normal navigation',
    /**
     * @description Status text for the status of the back-forward cache status indicating that
     * the back-forward cache was used to restore the page instead of reloading it.
     */
    restoredFromBFCache: 'Restored from back-forward cache',
    /**
     * @description Category text for the reasons which need to be cleaned up on the websites in
     * order to make the page eligible for the back-forward cache.
     */
    pageSupportNeeded: 'Features preventing back-forward cache',
    /**
     * @description Category text for the reasons which need to be addressed on the chrome's side
     * in order to make the page eligible for the back-forward cache.
     */
    chromeSupportNeeded: 'The last navigation was not cached because',
    /**
     * @description Explanation text for the reasons which will be supported in a future version
     * of Chrome.
     */
    willBeSupported: '(Supported in a future version of Chrome)',
};
const str_ = i18n.i18n.registerUIStrings('panels/application/BackForwardCacheView.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
export class BackForwardCacheView extends UI.ThrottledWidget.ThrottledWidget {
    constructor() {
        super(true, 1000);
        this.getMainResourceTreeModel()?.addEventListener(SDK.ResourceTreeModel.Events.MainFrameNavigated, this.onBackForwardCacheUpdate, this);
        this.getMainResourceTreeModel()?.addEventListener(SDK.ResourceTreeModel.Events.BackForwardCacheDetailsUpdated, this.onBackForwardCacheUpdate, this);
        this.update();
    }
    onBackForwardCacheUpdate() {
        this.update();
    }
    async doUpdate() {
        const data = { reportTitle: i18nString(UIStrings.backForwardCacheTitle) };
        const html = LitHtml.html `
      <${ReportView.ReportView.Report.litTagName} .data=${data}>
      ${this.renderMainFrameInformation(this.getMainFrame())}
      </${ReportView.ReportView.Report.litTagName}>
    `;
        LitHtml.render(html, this.contentElement, { host: this });
    }
    getMainResourceTreeModel() {
        const mainTarget = SDK.TargetManager.TargetManager.instance().mainTarget();
        return mainTarget?.model(SDK.ResourceTreeModel.ResourceTreeModel) || null;
    }
    getMainFrame() {
        return this.getMainResourceTreeModel()?.mainFrame || null;
    }
    renderMainFrameInformation(mainFrame) {
        if (!mainFrame) {
            return LitHtml.html `<${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.mainFrame)}</${ReportView.ReportView.ReportKey.litTagName}>
      <${ReportView.ReportView.ReportValue.litTagName}>
      ${i18nString(UIStrings.unavailable)}
      </${ReportView.ReportView.ReportValue.litTagName}>`;
        }
        return LitHtml.html `
      <${ReportView.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.lastMainFrameNavigation)}</${ReportView.ReportView.ReportSectionHeader.litTagName}>
      <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.url)}</${ReportView.ReportView.ReportKey.litTagName}>
      <${ReportView.ReportView.ReportValue.litTagName}>${mainFrame.url}</${ReportView.ReportView.ReportValue.litTagName}>
      <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.bfcacheStatus)}</${ReportView.ReportView.ReportKey.litTagName}>
      <${ReportView.ReportView.ReportValue.litTagName}>${this.renderBackForwardCacheStatus(mainFrame.backForwardCacheDetails.restoredFromCache)}</${ReportView.ReportView.ReportValue.litTagName}>
       ${this.maybeRenderExplanations(mainFrame.backForwardCacheDetails.explanations)}
    `;
    }
    renderBackForwardCacheStatus(status) {
        switch (status) {
            case true:
                return i18nString(UIStrings.restoredFromBFCache);
            case false:
                return i18nString(UIStrings.normalNavigation);
        }
        return i18nString(UIStrings.unknown);
    }
    maybeRenderExplanations(explanations) {
        if (explanations.length === 0) {
            return LitHtml.nothing;
        }
        const pageSupportNeeded = explanations.filter(explanation => explanation.type === "PageSupportNeeded" /* PageSupportNeeded */);
        const supportPending = explanations.filter(explanation => explanation.type === "SupportPending" /* SupportPending */);
        const circumstantial = explanations.filter(explanation => explanation.type === "Circumstantial" /* Circumstantial */);
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return LitHtml.html `
      ${pageSupportNeeded.length + supportPending.length > 0 ?
            LitHtml.html `
          <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.pageSupportNeeded)}</${ReportView.ReportView.ReportKey.litTagName}>
          <${ReportView.ReportView.ReportValue.litTagName}>${pageSupportNeeded.map(explanation => this.renderExplanation(explanation))}</${ReportView.ReportView.ReportValue.litTagName}>
        ` : LitHtml.nothing}
      ${circumstantial.length > 0 ?
            LitHtml.html `
          <${ReportView.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.chromeSupportNeeded)}</${ReportView.ReportView.ReportKey.litTagName}>
          <${ReportView.ReportView.ReportValue.litTagName}>${circumstantial.map(explanation => this.renderExplanation(explanation))}</${ReportView.ReportView.ReportValue.litTagName}>
        ` : LitHtml.nothing}
    `;
        // clang-format on
    }
    renderExplanation(explanation) {
        return LitHtml.html `
      <div>
        ${explanation.reason}
        ${explanation.type === "SupportPending" /* SupportPending */ ?
            i18nString(UIStrings.willBeSupported) :
            LitHtml.nothing}
      </div>
    `;
    }
}
//# sourceMappingURL=BackForwardCacheView.js.map