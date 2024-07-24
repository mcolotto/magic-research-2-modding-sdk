import React from "react";
export type AuxOptions = {
    compactLayout: boolean;
};
export declare const AuxOptionsContext: React.Context<AuxOptions>;
export declare function useAuxOptions(): AuxOptions;
