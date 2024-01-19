import React from 'react'
import { Input } from '@chakra-ui/input'
import { useState } from 'react'
import { Button, Container, HStack, Heading, Stack, Text, VStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import gojo from '../../assets/images/gojo.jpg'


const Course = ({ views, title, imageSrc, id, addToWatch, creator, description, episodes }) => {
  return (
    <VStack className='course' alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize='60' objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        size={'sm'}
        noOfLines={3}
        children={title}
      />

      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          children={'Creator'}
          textTransform={'uppercase'}
        />

        <Text
          fontFamily={'body'}

          children={creator}
          textTransform={'uppercase'}
        />
      </HStack>

      <Heading textAlign={'center'} size={'xs'} children={`Episodes - ${episodes}`}
        textTransform={'uppercase'} />

      <Heading size={'xs'} children={`Views - ${views}`}
        textTransform={'uppercase'} />

      <Stack direction={['column', 'row']} alignItems={'center'}>
      <Link to={`/courses/${id}`}>
        <Button colorScheme='yellow'>
          Watch Now
        </Button>
      </Link>

      <Button colorScheme='yellow' variant='ghost' onClick={addToWatch} >Add to Watchlist</Button>
      </Stack>
    </VStack>
  )
}

function Courses() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')

  const addToWatch=()=>{
    console.log('Added to watch')
  }

  const categories = ["horror", "romance", 'action', 'comedy']

  return (
    <Container minH={'95vh'} maxW='container.lg' paddingY={'8'}>
      <Heading children='All Genres' m={'8'} />

      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search...'
        type={'text'}
        focusBorderColor='yellow.400'
      />


      <HStack overflowX={'auto'} paddingY='8' css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}>

        {
          categories.map((item, index) => {
            return <Button key={index} onClick={() => setCategory(item)}>
              <Text key={index} minW={'60'}>{item}</Text>
            </Button>
          })
        }
      </HStack>

      <Stack direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Sample'}
          description={'sample'}
          views={'2023'}
          imageSrc={gojo}
          id={'sample'}
          creator={'sample-man'}
          episodes={2}
          addToWatch = {addToWatch}
        />

      </Stack>

    </Container>
  )
}

export default Courses
