import { Container, Heading, VStack, Box, FormLabel, Input, Button } from '@chakra-ui/react'

import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'


function Request() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [anime, setAnime] = useState('')


    return (
        <Container h='92vh'>

            <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
                <Heading children='Request Anime' />



                <form style={{ width: '100%' }}>


                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children='Name' />  {/* htmlFor is same as for in html */}
                        <Input
                            required
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter your Name'
                            type='text'
                            focusBorderColor='yellow.500'
                        />

                    </Box>


                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children='Email Address' />  {/* htmlFor is same as for in html */}
                        <Input
                            required
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email address'
                            type='email'
                            focusBorderColor='yellow.500'
                        />

                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor='anime' children='Anime' />  {/* htmlFor is same as for in html */}
                        <Input
                            required
                            id='anime'
                            value={anime}
                            onChange={(e) => setAnime(e.target.value)}
                            placeholder='Name of the Anime'
                            type='text'

                            focusBorderColor='yellow.500'
                        />

                    </Box>






                    <Button my={'4'} colorScheme='yellow' type='submit'>Send Mail</Button>

                    <Box my={'4'}>
                        See Available Anime!{' '}
                        <Link to='/courses'>
                            <Button colorScheme='yellow' variant={'link'}>
                                Click
                            </Button>{' '}
                            here
                        </Link>

                    </Box>






                </form>
            </VStack>

        </Container>
    )
}

export default Request
