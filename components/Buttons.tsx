import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { COLORS } from "../app/global-css";

type Variant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

interface Props extends TouchableOpacityProps {
  variant?: Variant;
  children: React.ReactNode;
  textStyle?: TextStyle;
}

const variantStyles = StyleSheet.create({
  default: {
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  secondary: {
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  ghost: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    opacity: 0.7,
  },
  destructive: {
    backgroundColor: COLORS.destructive,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  link: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: "center",
  },
});

const textVariants: Record<Variant, TextStyle> = {
  default: { color: "#FFF", fontWeight: "bold" },
  secondary: { color: COLORS.primary, fontWeight: "bold" },
  outline: { color: COLORS.primary, fontWeight: "bold" },
  ghost: { color: COLORS.primary, fontWeight: "bold" },
  destructive: { color: "#FFF", fontWeight: "bold" },
  link: { color: COLORS.primary, textDecorationLine: "underline" },
};

const ButtonStyle = ({
  variant = "default",
  style,
  children,
  textStyle,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      style={[variantStyles[variant], style]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={[textVariants[variant], textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonStyle;