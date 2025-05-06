
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react"
import {AiFillLinkedin, AiFillMail, AiOutlineDownload} from "react-icons/ai"
import WebDevCarosel from "@/components/website-development"
import Projects from "@/components/projects"

export default async function Page() {
  return (
    <Box p="10%">
      {/* Section 1: Intro */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        mb={10}
        px="10%"
      >
        <Box flex="2" mb={{ base: 8, md: 0 }}>
          <Heading textStyle="" as="h1" size="7xl" mb={4} color="purple.900">
            Kia Ora, I&apos;m Zoe
          </Heading>
          <Text fontSize="lg" color={"purple.700"}>
           A Mechatronics Engineer with a passion for Software.
          </Text>
        </Box>
        <Box flex="1" textAlign="center">
          <Image
            src="/images/headshot.jpg"
            alt="Headshot"
            boxSize="300px"       
            borderRadius="full"    
            objectFit="cover"      
            mx="auto"
          />
        </Box>
      </Flex>

      {/* Section 2: Languages */}
      <Box textAlign="center" my="5%">
        <Heading as="h2" size="5xl" mb={6} color="purple.900">
          Technical Skills
        </Heading>

        <Flex direction="column" align="center" gap={10}>
          {/* Professional Experience */}
          <Box bg="white" w="600px" p={10} borderRadius="xl" boxShadow="sm">
            <Heading as="h2" size="3xl" mb={6} color="purple.900">
              Professional Experience
            </Heading>
            <Flex justify="center" wrap="wrap" gap={10}>
              <Image src="/images/python.png" alt="Python" height="100px" />
            </Flex>
          </Box>

          {/* University Experience */}
          <Box bg="white" w="600px" maxW="1000px" p={10} borderRadius="xl" boxShadow="sm">
            <Heading as="h2" size="3xl" mb={6} color="purple.900">
              University Experience
            </Heading>
            <Flex justify="center" wrap="wrap" gap={10}>
              <Image src="/images/nextjs.svg" alt="Next.js" height="100px" />
              <Image src="/images/c.png" alt="C" height="100px" />
              <Image src="/images/firebase.png" alt="Firebase" height="100px" />
              <Image src="/images/typescript.png" alt="Typescript" height="100px" />
              <Image src="/images/javascript.webp" alt="Javascript" height="100px" />
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Section 3: Website Development */}
      <Box textAlign="center" my="5%" >
        <Heading as="h2" size="5xl" mb={6} color="purple.900">
          Website Development
        </Heading>
        <Text fontSize="lg" color={"purple.700"} mb={0}>
           Experience creating websites for clients as well as podcast editing and newsletter design.
        </Text>
        <WebDevCarosel />
      </Box>

      {/* Section 4: Website Development */}
      <Box textAlign="center" my="5%" >
        <Heading as="h2" size="5xl" mb={6} color="purple.900">
          Projects
        </Heading>
        <Projects />
      
      </Box>

      {/* Section 5: Contact */}
      <Box textAlign="center">
        <Heading as="h2" size="5xl" mb={6} color="purple.900">
          Get In Touch
        </Heading>
        <Flex
          justify="center"
          wrap="wrap"
          gap={10}
        >
          <Button size="xl" variant="solid" bg="purple.200" asChild>
            <a href="https://www.linkedin.com/in/zoesharp01" target="_blank" rel="noopener noreferrer"><AiFillLinkedin />LinkedIn</a>
          </Button>
          <Button size="xl" variant="solid" bg="purple.200" asChild>
            <a href="mailto:zoesharpp@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail />Email</a>
          </Button>
          <Button size="xl" variant="solid" bg="purple.200" asChild>
            <a href="./files/Zoe Sharp - CV.pdf " download target="_blank" rel="noopener noreferrer"><AiOutlineDownload />Download CV</a>
          </Button>
        </Flex>
      </Box>
    </Box>

  )
}
