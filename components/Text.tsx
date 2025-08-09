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

type Padding = number | string;

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
    color: COLORS.muted,
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
  variants?: Style[] | string;
  size?: number | string;
  tracking?: Tracking;
  color?: string;
  opacity?: number | string;
  p?: Padding;   // padding (all sides)
  px?: Padding;  // padding horizontal (left & right)
  py?: Padding;  // padding vertical (top & bottom)
  pt?: Padding;  // padding top
  pb?: Padding;  // padding bottom
  pl?: Padding;  // padding left
  pr?: Padding;  // padding right
  children: React.ReactNode;
}

const TextStyle = ({
  font = "default",
  variants = [],
  size = 16,
  tracking = "normal",
  color,
  opacity,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  children,
  ...rest
}: Props) => {
  const variantArr: Style[] =
    typeof variants === "string"
      ? variants.split(" ").filter(Boolean) as Style[]
      : variants;

  // Build padding styles object with proper precedence
  const paddingStyles: Record<string, number> = {};
  
  // Start with general padding (all sides)
  if (p !== undefined) {
    paddingStyles.paddingTop = Number(p);
    paddingStyles.paddingBottom = Number(p);
    paddingStyles.paddingLeft = Number(p);
    paddingStyles.paddingRight = Number(p);
  }
  
  // Then apply axis-specific padding (overrides p)
  if (px !== undefined) {
    paddingStyles.paddingLeft = Number(px);
    paddingStyles.paddingRight = Number(px);
  }
  if (py !== undefined) {
    paddingStyles.paddingTop = Number(py);
    paddingStyles.paddingBottom = Number(py);
  }
  
  // Finally apply side-specific padding (overrides px/py)
  if (pt !== undefined) {
    paddingStyles.paddingTop = Number(pt);
  }
  if (pb !== undefined) {
    paddingStyles.paddingBottom = Number(pb);
  }
  if (pl !== undefined) {
    paddingStyles.paddingLeft = Number(pl);
  }
  if (pr !== undefined) {
    paddingStyles.paddingRight = Number(pr);
  }

  return (
    <RNText
      style={[
        { fontSize: Number(size) },
        variantStyles[font],
        ...variantArr.map(v => variantStyles[v]),
        trackingStyles[tracking],
        color ? { color } : {},
        opacity !== undefined ? { opacity: Number(opacity) } : {},
        paddingStyles,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default TextStyle;
