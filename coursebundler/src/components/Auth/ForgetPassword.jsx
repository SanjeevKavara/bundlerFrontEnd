import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function ForgetPassword() {
const [email, setEmail] = useState('')

    return (
        <Container py='16' h='90vh'>

            <form>
                <Heading children='forget password' my='16' textTransform={'uppercase'} textAlign={['center', 'left']} />

                <VStack spacing={'8'}>


                    <Input
                        required
                       
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email address'
                        type='email'
                        focusBorderColor='yellow.500'
                    />


                    <Button type='submit' w={'full'} colorScheme='yellow'>
                        Send Reset Link

                    </Button>

                </VStack>
            </form>
        </Container>
    )
}

export default ForgetPassword
