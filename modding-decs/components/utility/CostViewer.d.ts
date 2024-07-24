import React from "react";
import { Resource } from "../../backend/Resources";
type Props = {
    resources: Partial<Record<Resource, number>>;
    items?: Record<string, number>;
};
declare function ResourceRow(props: {
    name: string;
    icon: string;
    current: number;
    cost: number;
    cap: number;
    switch?: boolean;
    callback?: () => void;
}): JSX.Element;
declare const ResourceRowMemo: React.MemoExoticComponent<typeof ResourceRow>;
export { ResourceRowMemo as CostRow };
export declare function CostViewer(props: Props): JSX.Element;
