/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // oklch(0.5393 0.2713 286.7462)
        "primary-foreground": "#FFFFFF", // oklch(1.0000 0 0)
        secondary: "#F1F5F9", // oklch(0.9540 0.0063 255.4755)
        "secondary-foreground": "#0F172A", // oklch(0.1344 0 0)
        muted: "#F8FAFC", // oklch(0.9702 0 0)
        "muted-foreground": "#64748B", // oklch(0.4386 0 0)
        accent: "#cdb8ff", // oklch(0.9393 0.0288 266.3680)
        "accent-foreground": "#475569", // oklch(0.5445 0.1903 259.4848)
        destructive: "#DC2626", // oklch(0.6290 0.1902 23.0704)
        "destructive-foreground": "#FFFFFF", // oklch(1.0000 0 0)
        background: "#FFFFFF", // oklch(0.9940 0 0)
        foreground: "#000000", // oklch(0 0 0)
        card: "#FFFFFF", // oklch(0.9940 0 0)
        "card-foreground": "#000000", // oklch(0 0 0)
        popover: "#FFFFFF", // oklch(0.9911 0 0)
        "popover-foreground": "#000000", // oklch(0 0 0)
        border: "#cdb8ff", // oklch(0.9300 0.0094 286.2156)
        input: "#F1F5F9", // oklch(0.9401 0 0)
        ring: "#000000", // oklch(0 0 0)
      },
      fontFamily: {
        sans: ["PlusJakartaSans", "sans-serif"],
        serif: "serif",
        mono: "monospace",
      },
      borderRadius: {
        sm: "18px",
        md: "20px",
        lg: "22.4px",
        xl: "26.4px",
      },
    },
  },
  plugins: [],
}