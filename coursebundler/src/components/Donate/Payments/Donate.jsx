import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Donate() {
  return (
    <Container h='90vh' p='16'>


      <Heading children='Welcome' my={'8'} textAlign={'center'} />


      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >

        <Box bg='yellow.400' p='4' css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color='black' children={'Any amount of Contribution is Appreciated'} />
        </Box>
        <Box p={'4'}>

          <Button my={'4'} w='full' colorScheme='yellow'>Donate</Button>
        </Box>



      </VStack>

    </Container>
  )
}

export default Donate
