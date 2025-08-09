import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";
import { COLORS, TRACKING } from "../app/global-css";

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
type Margin = number | string;

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
    borderRadius: 5,
  },
});

const trackingStyles: Record<Tracking, { letterSpacing: number }> = {
  tighter: { letterSpacing: TRACKING.tighter },
  tight: { letterSpacing: TRACKING.tight },
  normal: { letterSpacing: TRACKING.normal },
  wide: { letterSpacing: TRACKING.wide },
  wider: { letterSpacing: TRACKING.wider },
  widest: { letterSpacing: TRACKING.widest },
};

interface Props extends TextProps {
  font?: Font;
  variants?: Style[] | string;
  size?: number | string;
  tracking?: Tracking;
  color?: string;
  opacity?: number;
  p?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  children: React.ReactNode;
}

const TextStyle = ({
  font = "default",
  variants = [],
  size,
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
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  children,
  ...rest
}: Props) => {
  const variantArr: Style[] =
    typeof variants === "string"
      ? variants.split(" ").filter(Boolean) as Style[]
      : variants;

  const paddingStyles: Record<string, number> = {};
  
  if (p !== undefined) {
    paddingStyles.paddingTop = Number(p);
    paddingStyles.paddingBottom = Number(p);
    paddingStyles.paddingLeft = Number(p);
    paddingStyles.paddingRight = Number(p);
  }
  
  if (px !== undefined) {
    paddingStyles.paddingLeft = Number(px);
    paddingStyles.paddingRight = Number(px);
  }
  if (py !== undefined) {
    paddingStyles.paddingTop = Number(py);
    paddingStyles.paddingBottom = Number(py);
  }
  
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

  const marginStyles: Record<string, number> = {};
  
  if (m !== undefined) {
    marginStyles.marginTop = Number(m);
    marginStyles.marginBottom = Number(m);
    marginStyles.marginLeft = Number(m);
    marginStyles.marginRight = Number(m);
  }
  
  if (mx !== undefined) {
    marginStyles.marginLeft = Number(mx);
    marginStyles.marginRight = Number(mx);
  }
  if (my !== undefined) {
    marginStyles.marginTop = Number(my);
    marginStyles.marginBottom = Number(my);
  }
  
  if (mt !== undefined) {
    marginStyles.marginTop = Number(mt);
  }
  if (mb !== undefined) {
    marginStyles.marginBottom = Number(mb);
  }
  if (ml !== undefined) {
    marginStyles.marginLeft = Number(ml);
  }
  if (mr !== undefined) {
    marginStyles.marginRight = Number(mr);
  }

  return (
    <RNText
      style={[
        { fontSize: Number(size) },
        variantStyles[font],
        ...variantArr.map(v => variantStyles[v]),
        trackingStyles[tracking],
        color ? { color } : {},
        opacity !== undefined ? { opacity } : {},
        paddingStyles,
        marginStyles,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default TextStyle;
