import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function ResetPassword() {
    const [password, setPassword] = useState('')

    const params = useParams()

    

    return (
        <Container py='16' h='90vh'>

            <form>
                <Heading children='Reset password' my='16' textTransform={'uppercase'} textAlign={['center', 'left']} />

                <VStack spacing={'8'}>


                    <Input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter new Password'
                        type={'password'}
                        focusBorderColor='yellow.500'
                    />


                    <Button type='submit' w={'full'} colorScheme='yellow'>
                        Reset Password
                    </Button>

                </VStack>
            </form>
        </Container>
    )
}



export default ResetPassword
