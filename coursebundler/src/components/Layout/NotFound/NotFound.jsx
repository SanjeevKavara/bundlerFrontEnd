import React from 'react'
import { Container, Heading, VStack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiErrorWarningFill } from 'react-icons/ri'

function NotFound() {
    return (
        <Container h='90vh'>



            <VStack
                justifyContent={'center'}
                h='full'
                spacing={'4'}
            >
                <RiErrorWarningFill size={'5rem'} />

                <Heading>
                    Page Not Found
                </Heading>






                <Link to='/'>
                    <Button variant='ghost'>Go to Home</Button>
                </Link>





            </VStack>

        </Container>
    )
}

export default NotFound
