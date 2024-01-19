import { Box, Grid, Heading, Table, TableCaption, TableContainer, Thead, Tr, Th, Tbody, Td, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import cursorr from '../../../assets/images/icons8-cursor-small.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'

function Users() {

  const users = [{
    _id: 'fsdssdfddsa',
    name: 'Sanjeev',
    role: 'admin',
    email: 'sanjeevkav42@gmail.com',
  }]

  const updateHandler = (id) => {
    console.log(id)
  }

  const deleteButtonHandler = (id) => {
    console.log(id)
  }

  return (
    <Grid style={{ cursor: `url(${cursorr}), auto` }}
      minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>

      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading textTransform={'uppercase'} children='All Users' my={'16'} textAlign={['center', 'left']} />


        <TableContainer w={['100vw', 'full']}>

          <Table variant={'simple'} size={'lg'}>

            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {
                users.map(item => (
                  <Row updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
                ))
              }
            </Tbody>

          </Table>

        </TableContainer>

      </Box>

      <Sidebar />

    </Grid>
  )
}

export default Users


function Row({ item, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>

          <Button onClick={() => updateHandler(item._id)} variant={'outline'} color={'purple.500'}> Change Role</Button>

          <Button color={'purple.600'} onClick={() => deleteButtonHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>

        </HStack>
      </Td>
    </Tr>
  )
}
