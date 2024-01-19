import { Box, Grid, Heading, Table, TableCaption, TableContainer, Thead, Tr, Th, Tbody, Td, HStack, Button, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import cursorr from '../../../assets/images/icons8-cursor-small.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'


function AdminCourses() {

  const animes = [{
    _id: 'fsdssdfddsa',
    title: 'Zom-100',
    category: 'horror',
    poster: {
      url: 'https://img.freepik.com/free-photo/silhouetted-couple-sit-bench-autumn-tree-generative-ai_188544-12574.jpg?w=1380&t=st=1689912251~exp=1689912851~hmac=2a48603842125a54332f52250bd2d05fc1331bcc368c0aa4bccc283d8d021529'
    },
    createdBy: 'Mangaka',
    views: 123,
    numOfEpisodes: 12,

  }]
  const { isOpen, onClose, onOpen } = useDisclosure()


  const animeDetailHandler = (id) => {
    onOpen()
    console.log(id)
  }

  const deleteButtonHandler = (id) => {
    console.log(id)
  }

  const deleteAnimeButtonHandler = (courseId, lectureId) => {
    console.log(courseId)
    console.log(lectureId)
  }
  const addLectureHandler = (e, animeId, title, description, video) => {
   e.preventDefault()

  }


  return (
    <Grid style={{ cursor: `url(${cursorr}), auto` }}
      minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>

      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading textTransform={'uppercase'} children='All Animes' my={'16'} textAlign={['center', 'left']} />


        <TableContainer w={['100vw', 'full']}>

          <Table variant={'simple'} size={'lg'}>

            <TableCaption>All available Animes in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Episodes</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {
                animes.map(item => (
                  <Row animeDetailHandler={animeDetailHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
                ))
              }
            </Tbody>

          </Table>

        </TableContainer>
        <CourseModal isOpen={isOpen} onClose={onClose} id={animes._id} deleteAnimeButtonHandler={deleteAnimeButtonHandler} addLectureHandler={addLectureHandler} animeTitle = 'zom-100' />

      </Box>

      <Sidebar />

    </Grid>
  )
}




function Row({ item, animeDetailHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td><Image src={item.poster.url} /></Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfEpisodes}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>

          <Button onClick={() => animeDetailHandler(item._id)} variant={'outline'} color={'purple.500'}> View Trailer</Button>

          <Button color={'purple.600'} onClick={() => deleteButtonHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>

        </HStack>
      </Td>
    </Tr>
  )
}


export default AdminCourses
