import { Stack, VStack, Heading, Text, Button, Image, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import vg from "../../assets/images/bg22.png"
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";

import { DiMongodb } from "react-icons/di"

import csmIntro from "../../assets/videos/CSM.mp4"

export default function Home() {
    return (
        <section className='home'>
            <div className="container">

                <Stack
                    direction={["column", "row"]} //responsive design for mobile and desktop view 
                    height="100%"
                    justifyContent={['center', 'space-between']}
                    alignItems="center"
                    spacing={['16', '56']}
                >
                    <VStack
                        width={"full"}
                        alignItems={['center', 'flex-end']}
                        spacing={'5'}
                    >
                        <Heading children='IT IS A MERN PROJECT ✅' size={"2xl"} />
                        <Text
                            fontSize={'2xl'}
                            fontFamily={'cursive'}
                            textAlign={['center', 'left']}
                            children='Find valuable content'
                        />
                        <Link to='/courses'>
                            <Button size={"lg"} colorScheme='yellow'>
                                Explore Now
                            </Button>
                        </Link>
                    </VStack>

                    <Image className='vector-graphics' boxSize={['150px', 'sm']} src={vg} objectFit='contain'></Image>

                </Stack>
            </div>

            <Box padding={'8'} bg='blackAlpha.800'>
                <Heading
                    textAlign={'center'}
                    children='Tech Stack'
                    color={'yellow.400'}
                />
                <HStack className='tstackBanner' justifyContent={'space-evenly'} marginTop='4'>
                    <FaReact></FaReact>
                    <FaNodeJs></FaNodeJs>
                    <FaJs></FaJs>
                    <DiMongodb></DiMongodb>
                </HStack>
            </Box>


            <div className="container2">
                <video
                    controls controlsList='nodownload nofullscreen noremoteplayback'
                    src={csmIntro}
                    disablePictureInPicture
                    disableRemotePlayback
                >

                </video>
            </div>

        </section>
    )
}
