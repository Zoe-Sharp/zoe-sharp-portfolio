"use client"

import {
  Box,
  Grid,
  Heading,
  Text,
  Link,
  Image,
  Badge,
  Stack,
  AspectRatio,
} from "@chakra-ui/react"

interface Project {
  src: string
  title: string
  languages: string
  desc: string
  link: string
  date: string
}

const projects: Project[] = [
    {
        src: "/images/evoscore.png",
        title: "EVolocity",
        languages: "NextJS, Firebase, TypeScript",
        desc: "Final Year Project for EVolocity. Implemented database using Firebase to existing NextJS app.",
        link: "https://evoscore-web.vercel.app/",
        date: "2023",
      },
    {
        src: "/images/computervision.jpg",
        title: "Computer Vision Project - UWH Flick Tracking",
        desc: "University project for COSC428 using cv2 and MediaPipe libraries to analyse an underwater hockey skill called a 'flick'.",
        languages: "Python, cv2, MediaPipe",
        link: "https://github.com/Zoe-Sharp/underwater-hockey-joint-tracking",
        date: "2023",
    },{
        src: "/images/finance.png",
        title: "Personal Finance tracker",
        languages: "Python, TKInter",
        desc: "Personal project using Python and TTKInter to create a personal finance tracker.",
        link: "https://github.com/Zoe-Sharp/Finance-Tracker-Python",
        date: "Still under development",
    },
]

export default function Projects() {
  return (
    <Box px={{ base: 4, md: 12 }} py={10}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>
        {projects.map((project, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            overflow="hidden"
            _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
          >
            {project.src.endsWith(".mp4") ? (
            <AspectRatio ratio={16 / 9}>
                <video 
                src={project.src} 
                autoPlay 
                loop 
                controls
                muted 
                playsInline 
                style={{ width: "100%", height: "100%" }} // Optional: Make sure the video covers the space properly
                />
            </AspectRatio>
            ) : (
            <Image src={project.src} alt={project.title} objectFit="cover" />
            )}

            <Box p={6}>
              <Heading as="h3" size="lg" mb={2} color="purple.900" textAlign="left">
                {project.title}
              </Heading>

              <Stack direction="row" p={2} wrap="wrap" mb={3}>
                {project.languages.split(",").map((lang, i) => (
                  <Badge
                    key={i}
                    colorScheme="purple"
                    bg="purple.100"
                    color="purple.800"
                    borderRadius="md"
                    px={2}
                    py={1}
                    fontSize="xs"
                  >
                    {lang.trim()}
                  </Badge>
                ))}
              </Stack>

              <Text fontSize="sm" color="gray.600" mb={4} textAlign="left">
                {project.desc}
              </Text>

              <Stack direction="row" justify="space-between" align="center">
                <Link
                  href={project.link}
                  color="yellow.500"
                  fontWeight="bold"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project ↗
                </Link>
                <Text fontSize="xs" color="gray.500">
                  Year Completed: {project.date}
                </Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}
