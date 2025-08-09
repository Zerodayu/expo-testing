import React from "react";
import { Linking, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { RADIUS } from "../app/global-css";
import TextStyle from "./Text";

type Radius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

type Padding = number | string;
type Margin = number | string;

interface Props extends Omit<TouchableOpacityProps, 'onPress'> {
  radius?: Radius;
  children: React.ReactNode;
  
  // Navigation/Action props
  href?: string;
  onClick?: () => void;
  
  // Text styling props from TextStyle component
  font?: "default" | "bold" | "italic";
  variants?: ("mono" | "link" | "highlight" | "muted")[] | string;
  textSize?: number | string;
  tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
  textColor?: string;
  textOpacity?: number;
  
  // Background properties
  bg?: string;
  
  // Border/Outline properties
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  
  // Padding properties
  p?: Padding;
  px?: Padding;
  py?: Padding;
  pt?: Padding;
  pb?: Padding;
  pl?: Padding;
  pr?: Padding;
  
  // Margin properties
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
}

const ButtonStyle = ({
  radius = "none",
  style,
  children,
  href,
  onClick,
  font,
  variants,
  textSize,
  tracking,
  textColor,
  textOpacity,
  bg,
  borderWidth,
  borderColor,
  borderStyle = 'solid',
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
  ...rest
}: Props) => {
  const handlePress = () => {
    if (href) {
      Linking.openURL(href);
    } else if (onClick) {
      onClick();
    }
  };

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

  const backgroundStyles: ViewStyle = {};
  if (bg !== undefined) {
    backgroundStyles.backgroundColor = bg;
  }

  const borderStyles: ViewStyle = {};
  if (borderWidth !== undefined) {
    borderStyles.borderWidth = borderWidth;
  }
  if (borderColor !== undefined) {
    borderStyles.borderColor = borderColor;
  }
  if (borderStyle !== undefined) {
    borderStyles.borderStyle = borderStyle;
  }

  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: RADIUS[radius],
          alignItems: "center",
          justifyContent: "center",
        },
        backgroundStyles,
        borderStyles,
        paddingStyles,
        marginStyles,
        style
      ]}
      activeOpacity={0.8}
      onPress={handlePress}
      {...rest}
    >
      <TextStyle
        font={font}
        variants={variants}
        size={textSize}
        tracking={tracking}
        color={textColor}
        opacity={textOpacity}
      >
        {children}
      </TextStyle>
    </TouchableOpacity>
  );
};

export default ButtonStyle;