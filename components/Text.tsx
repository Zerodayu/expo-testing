import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";
import { COLORS } from "../app/global-css";

type Font =
  | "default"
  | "bold"
  | "italic";

type Style =
  | "mono"
  | "link"
  | "highlight"
  | "muted";

type Tracking =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";

const variantStyles = StyleSheet.create({
  default: {
    color: COLORS.foreground,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  mono: {
    fontFamily: "monospace",
  },
  link: {
    textDecorationLine: "underline",
  },
  muted: {
    color: COLORS.foreground,
    backgroundColor: COLORS.muted,
  },
  highlight: {
    color: COLORS.foreground,
    backgroundColor: COLORS.muted,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
});

const trackingStyles: Record<Tracking, { letterSpacing: number }> = {
  tighter: { letterSpacing: -0.5 },
  tight: { letterSpacing: -0.25 },
  normal: { letterSpacing: 0 },
  wide: { letterSpacing: 0.5 },
  wider: { letterSpacing: 1 },
  widest: { letterSpacing: 2 },
};

interface Props extends TextProps {
  font?: Font;
  variants?: Style[] | string; // accept array or string
  size?: number | string;
  tracking?: Tracking;
  children: React.ReactNode;
}

const TextStyle = ({
  font = "default",
  variants = [],
  size = 16,
  tracking = "normal",
  children,
  ...rest
}: Props) => {
  // Convert string to array if needed
  const variantArr: Style[] =
    typeof variants === "string"
      ? variants.split(" ").filter(Boolean) as Style[]
      : variants;

  return (
    <RNText
      style={[
        { fontSize: Number(size) },
        variantStyles[font],
        ...variantArr.map(v => variantStyles[v]),
        trackingStyles[tracking],
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default TextStyle;
