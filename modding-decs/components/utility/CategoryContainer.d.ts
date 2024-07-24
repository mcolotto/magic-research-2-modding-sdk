/// <reference types="react" />
type CategoryContainerProps = {
    title: string;
    titleStyle?: any;
    containerStyle?: any;
    contentContainerStyle?: any;
    children: any;
    categoryId: string;
    doNotPersistExpandedState?: boolean;
    initiallyExpanded?: boolean;
    dividerColor?: string;
};
export declare function CategoryHeader(props: Omit<CategoryContainerProps, "children">): JSX.Element;
export default function CategoryContainer(props: CategoryContainerProps): JSX.Element;
export {};
