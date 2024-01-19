import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiCheckboxCircleFill } from 'react-icons/ri'

function PaymentSuccess() {
    return (
        <Container vh='90vh' p='16'>

            <Heading my='8' textAlign={'center'}>
                "Arigatou"
            </Heading>

            <VStack
                boxShadow={'lg'}
                pb='16'
                alignItems={'center'}
                borderRadius={'lg'}
            >

                <Box
                    w='full'
                    bg='yellow.400'
                    p='4'
                    css={{ borderRadius: '8px 8px 0 0' }}
                >
                    <Text color={'black'}>Payment Success</Text>
                </Box>



                <Box p='4'>

                    <VStack textAlign={'center'} px='8' mt='4' spacing='8'>

                      <Text fontSize='xl' fontWeight='bold' children='Thank you for your Contribution!' />  

                      <Heading size={'4xl'}>
                        <RiCheckboxCircleFill />
                      </Heading>

                    </VStack>

                </Box>


                <Link to='/profile'>
                    <Button variant='ghost'>Go to Profile</Button>
                </Link>


            <Heading size={'xs'}>
                Reference: sdsddsadcvgbgfs
            </Heading>



            </VStack>

        </Container>
    )
}

export default PaymentSuccess
