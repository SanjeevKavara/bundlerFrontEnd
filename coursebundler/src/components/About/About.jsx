import React from 'react'
import { Avatar, Button, Container, Heading, Stack, Text, VStack, Box, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import dp from '../../assets/images/sanju.jpg'
import csmIntro from "../../assets/videos/CSM.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri'
import  termsAndCondition  from '../../assets/docs/termsAndCondition'

const Founder = () => (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>


        <VStack>
            <Avatar src={dp} boxSize={['40', '48']} />

            <Text children='Developer' opacity={'0.7'} />
        </VStack>


        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>

            <Heading children='Sanjeev Kavara' size={['md', 'xl']} />
            <Text textAlign={['center', 'left']} children={`Hi, I am a Full Stack Developer and a Final Year CSE UnderGraduate student.`} />
        </VStack>

    </Stack>
)



const VideoPlayer = () => (
    <Box>
        <video
            controls controlsList='nodownload nofullscreen noremoteplayback'

            src={csmIntro}
            disablePictureInPicture
            disableRemotePlayback
        >

        </video>

    </Box>
)

const TandC = ({ termsAndCondition }) => (
    <Box>
        <Heading size={'md'} children={'Terms and Conditions'} textAlign={['center', 'left']}
            my={'4'}
        />
        <Box h={'sm'} p={'4'} overflowY={'scroll'}>
            <Text children={termsAndCondition} textAlign={['center','left']} letterSpacing={'widest'} fontFamily={'heading'}/>

            <Heading my='4' size={'xs'} children={`It's a Non Profit website, not intend to copy content` }/>
        </Box>
    </Box>
)

function About() {
    return (
        <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>


            <Heading textAlign={['center', 'left']}>About Us</Heading>

            <Founder />

            <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>

                <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
                    ANIFO - (ANIme inFo) Provides Information on any available anime, so you can decide what to watch, where to watch. You can also request for any anime you want to know about.
                </Text>


                <Link to='/donate'>
                    <Button colorScheme={'yellow'} variant={'ghost'}>Donate</Button>
                </Link>

            </Stack>

            <VideoPlayer />

            <TandC termsAndCondition={termsAndCondition} />
            


            <HStack my='4' p='4'>
                <RiSecurePaymentFill />
                <Heading size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'} children={'Payment is secured by RazorPay'} />
            </HStack>



        </Container>
    )
}

export default About







