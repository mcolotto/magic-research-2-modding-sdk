import React from "react";
import { Text as NativeText, StyleProp, TextStyle } from "react-native";
import { VariantProp } from "react-native-paper/lib/typescript/src/components/Typography/types";
import { ThemeProp } from "react-native-paper/lib/typescript/src/types";
export type Props = React.ComponentProps<typeof NativeText> & {
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    variant?: VariantProp<string>;
    children: React.ReactNode;
    theme?: ThemeProp;
    style?: StyleProp<TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    doNotScaleFonts?: boolean;
};
declare const Text: React.NamedExoticComponent<Props>;
declare const ForwardedRefText: React.NamedExoticComponent<Props>;
export { ForwardedRefText, Text };
