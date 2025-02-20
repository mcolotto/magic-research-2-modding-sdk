import type { NativeEventSubscription, EmitterSubscription } from 'react-native';
export declare function addEventListener<T extends {
    addEventListener: (...args: any) => NativeEventSubscription | EmitterSubscription;
} & {
    removeEventListener?: (...args: any) => void;
} & {
    remove?: (...args: any) => void;
}>(Module: T, ...rest: Parameters<typeof Module.addEventListener>): NativeEventSubscription;
export declare function addListener<T extends {
    addListener: (...args: any) => EmitterSubscription;
    removeEventListener: (...args: any) => void;
}>(Module: T, ...rest: Parameters<typeof Module.addListener>): EmitterSubscription | {
    remove: () => void;
};
