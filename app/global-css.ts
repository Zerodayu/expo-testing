import { StyleSheet } from "react-native";

export const COLORS = {
  background: "#FEFEFE",
  foreground: "#000000",
  card: "#FEFEFE",
  primary: "#b74e4eff",
  secondary: "#F6F6FF",
  accent: "#E6E6FF",
  muted: "#F7F7F7",
  border: "#EDEBFF",
  destructive: "#D94F4F",
};

export const style = StyleSheet.create({
  // Main
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Texts
  primaryText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: -0.025, // tracking-normal
  },
  secondaryText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: "normal",
    letterSpacing: -0.025,
  },

  // Card
  card: {
    backgroundColor: COLORS.card,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 14, // radius: 1.4rem ≈ 14px
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },

  // Accent
  accent: {
    backgroundColor: COLORS.accent,
    color: COLORS.foreground,
  },

  // Muted
  muted: {
    backgroundColor: COLORS.muted,
    color: COLORS.foreground,
  },

  // Destructive
  destructive: {
    backgroundColor: COLORS.destructive,
    color: "#FFF",
  },
});