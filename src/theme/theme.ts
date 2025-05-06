// theme.ts
import { defaultConfig, defineConfig, createSystem  } from '@chakra-ui/react';
import { textStyles } from './text-styles';

const config = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
    body: {
      bg: 'yellow.100', 
      color: 'grey.950', 
    },

  }, 
  theme: {
    textStyles: {
      textStyles
    },
    
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
})

export default createSystem(defaultConfig, config)