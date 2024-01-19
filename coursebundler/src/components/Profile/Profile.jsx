import { Avatar, Button, Container, Heading, Stack, VStack, HStack, Text, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Input, ModalFooter, useDisclosure, ModalHeader } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import gojo from '../../assets/images/gojo.jpg'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from '../Auth/Register'




function Profile() {


  const user = {
    name: 'Sanjeev',
    email: 'sanjeevkav52@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: undefined,
    },
    watchlist: [
      {
        title: 'dsddfds',
        poster: gojo,

      },
    ],
  }

  const removeWatchList = (title) => {
    console.log(title)
  }


  const changeImageSubmit = (e, image) => {
    e.preventDefault();
  }


  const { isOpen, onClose, onOpen } = useDisclosure() //useDisclosure is a hook which returns an object with isOpen, onClose, onOpen properties which are used to open and close the modal box 


  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>

      <Heading children='Profile' m={'8'} textTransform={'uppercase'} />

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >


        <VStack>
          <Avatar boxSize='48' />

          <Button onClick={onOpen} colorScheme='yellow' variant='ghost'>Change Photo</Button>
        </VStack>

        <VStack spacing='4' alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children='Name:' fontWeight={'bold'} />
            <Text children={user.name} />

          </HStack>
          <HStack>
            <Text children='Email:' fontWeight={'bold'} />
            <Text children={user.email} />

          </HStack>
          <HStack>
            <Text children='createdAt' fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />

          </HStack>

          {/* {user.role !== 'admin' &&
            <HStack>
              <Text children='Subscription' fontWeight={'bold'} />
              {
                user.subscription.status === 'active' ? (
                  <Button>Cancel Subscription</Button>
                ):(
                 <Link to='/donate'>
                  <Button colorScheme='yellow'>subscribe</Button>
                 </Link>
                )

              }

            </HStack>
          } */}

          <Stack
            direction={['column', 'row']}
            alignItems={'center'}
          >
            <Link to='/updateprofile'>
              <Button>Update Profile</Button>
            </Link>
            <Link to='/changepassword'>
              <Button>Change Password</Button>
            </Link>
          </Stack>



        </VStack>


      </Stack>

      <Heading children='Watchlist' size={'md'} my='8' />


      {user.watchlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap='wrap'
          p='4'
        >

          {user.watchlist.map((element) => (
            <VStack w='48' m='2' key={element.title}>
              <Image boxSize={'full'} objectFit={'contain'} src={element.poster} />

              <HStack>
                <Link to={`/courses/${element.title}`}>
                  <Button variant={'ghost'} colorScheme='yellow' >
                    Watch Now
                  </Button>
                </Link>


                <Button onClick={() => removeWatchList(element.title)}>
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>

            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox changeImageSubmit={changeImageSubmit} isOpen={isOpen} onClose={onClose} />

    </Container>
  )
}

export default Profile


function ChangePhotoBox({ isOpen, onClose, changeImageSubmit }) {


  const [imagePrev, SetImagePrev] = useState('')
  const [image, setImage] = useState('')
  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {  //when the file is loaded
      SetImagePrev(reader.result);
      setImage(file);
    }
  }

  const closeHandler = () => {
    SetImagePrev('');
    onClose();
    setImage('')
  }
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e) => changeImageSubmit(e, image)}>
              <VStack spacing='8'>

                {imagePrev && <Avatar src={imagePrev} boxSize='48' />}

                <Input type='file' css={{ "&::file-selector-button": fileUploadCss }}
                  onChange={changeImage}
                />


                <Button w='full' colorScheme='yellow' type='submit'>Change</Button>

              </VStack>
            </form>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button mr='3' onClick={closeHandler} >Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}