/// <reference types="react" />
type PlusMinusAllocatorProps = {
    disableMinus: boolean;
    disablePlus: boolean;
    onPressMinus: () => void;
    onPressPlus: () => void;
};
export declare function PlusMinusAllocator(props?: PlusMinusAllocatorProps): JSX.Element;
export {};
