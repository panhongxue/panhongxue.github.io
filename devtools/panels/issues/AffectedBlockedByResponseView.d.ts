import type * as Platform from '../../core/platform/platform.js';
import { AffectedResourcesView } from './AffectedResourcesView.js';
export declare class AffectedBlockedByResponseView extends AffectedResourcesView {
    private appendDetails;
    protected getResourceNameWithCount(count: number): Platform.UIString.LocalizedString;
    private appendDetail;
    update(): void;
}
