import React from "react";
import type { Props as PaperTooltipProps } from "../utility/tooltip/PaperTooltip";
export declare function setTooltipComponentForMarkdown(component: React.ComponentType<PaperTooltipProps>): void;
declare function MarkdownImpl(props: any): JSX.Element;
declare const Markdown: React.MemoExoticComponent<typeof MarkdownImpl>;
export { Markdown };
