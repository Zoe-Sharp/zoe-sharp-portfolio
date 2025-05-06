import { defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  heading: {
    description: "The heading text style - used in paragraphs",
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "30",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  title: {
    description: "The tile text style - used in paragraphs",
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "30px",
      lineHeight: "33",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  }
})