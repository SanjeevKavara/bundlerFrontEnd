import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

import { TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti'
import { DiGithubBadge } from 'react-icons/di'

function Footer() {
    return (
        <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
            <Stack direction={['column', 'row']}>

                <VStack alignItems={['center', 'flex-start']} width={'full'}>
                    <Heading children='All Right Reserved' color={'white'} />

                    <Heading children='@SanjeevKavara' color={'yellow.400'} fontFamily={'body'} size={'sm'} />


                </VStack>


                <HStack spacing={['2', '10']} justifyContent={'center'}
                color={'white'}
                fontSize={'45'} 
                >
                    <a href='https://instagram.com/user_id___error_404' target='blank'>

                        <TiSocialInstagram />
                    </a>

                    <a href='https://www.linkedin.com/in/sanjeev-kavara-t-767483214' target='blank'>
                        <TiSocialLinkedin />
                    </a>
                    <a href='https://github.com/SanjeevKavara' target='blank'>
                        <DiGithubBadge />
                    </a>

                </HStack>
            </Stack>

        </Box>
    )
}

export default Footer
