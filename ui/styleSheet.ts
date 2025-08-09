import { StyleSheet } from 'react-native';
import { COLORS, FONT, RADIUS } from './global-css';

export const sText = StyleSheet.create({
  title: {
    fontFamily: FONT.type.sans,
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  body: {
    fontFamily: FONT.type.sans,
  },
  
  muted: {
    fontFamily: FONT.type.sans,
    color: COLORS.muted,
    letterSpacing: FONT.tracking.wide,
  },

  link: {
    fontFamily: FONT.type.mono,
    textDecorationLine: 'underline',
  },
  
  code: {
    fontFamily: FONT.type.mono,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export const sButton = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.primary,
    color: COLORS.background,
    borderRadius: RADIUS.xl,
    fontWeight: 'bold',
    padding: 12,
    margin: 8,
  },
  
  secondary: {
    backgroundColor: COLORS.accent,
    color: COLORS.primary,
    borderRadius: RADIUS.xl,
    fontWeight: 'bold',
    padding: 12,
    margin: 8,
  },
  
  outline: {
    outlineColor: COLORS.primary,
    outlineWidth: 2,
    color: COLORS.primary,
    borderRadius: RADIUS.xl,
    fontWeight: 'bold',
    padding: 12,
    margin: 8,
  },

  link: {
    textDecorationLine: 'underline',
    color: COLORS.primary,
    borderRadius: RADIUS.xl,
    fontWeight: 'bold',
    padding: 12,
    margin: 8,
  },
  
  destructive: {
    backgroundColor: COLORS.destructive,
    color: COLORS.background,
    borderRadius: RADIUS.xl,
    fontWeight: 'bold',
    padding: 12,
    margin: 8,
  },

  disabled: {
    backgroundColor: COLORS.muted,
    color: COLORS.background,
    borderRadius: RADIUS.xl,
    fontWeight: 'bold',
    padding: 12,
    margin: 8,
  },
});