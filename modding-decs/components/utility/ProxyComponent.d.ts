/// <reference types="react" />
export declare const UIComponents: Record<string, React.ComponentType<any>>;
export declare function wrapInUIComponent<T>(name: string, Component: React.FunctionComponent<T>): (props: any) => JSX.Element;
