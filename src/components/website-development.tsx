"use client";

import Slider from "react-slick";
import { Box, Image, Text, Link } from "@chakra-ui/react";

const slides = [
  {
    src: "/images/denisewilsonwebsite.png",
    title: "Denise Wilson",
    platform: "SquareSpace",
    link: "https://www.denisewilson.co.nz",
    date: "2024",
  },
  {
    src: "/images/thetreehousewebsite.png",
    title: "The Tree House Early Learning Centre",
    platform: "Wix",
    link: "https://info3917944.wixsite.com/thetreehouse",
    date: "2018",
  },
  {
    src: "/images/ucwie.png",
    title: "UC Women in Engineering",
    platform: "Wix",
    link: "https://www.wie.org.nz/",
    date: "2023",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

export default function WebDevCarosel() {
  return (
    <Box maxW="1000px" mx="auto" my={10} overflow="hidden" px={4}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} px={4}>
            <Box
              bg="purple.100"
              borderRadius="xl"
              p={6}
              textAlign="left"
              h="100%"
            >
              <Image
                src={slide.src}
                alt={slide.title}
                borderRadius="md"
                mb={4}
              />
              <Text fontSize="lg" fontWeight="bold" color="gray.800">
                {slide.title}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Platform: {slide.platform}
              </Text>
              <Text fontSize="sm" color="gray.600" mb={2}>
                Year Created: {slide.date}
              </Text>
              <Link href={slide.link} color="purple.600" isExternal fontSize="sm">
                Visit Site
              </Link>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
