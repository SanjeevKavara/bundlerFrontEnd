import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from '../../Auth/Register'

function CourseModal({ isOpen, onClose, id, deleteButtonHandler, lectures = [1, 2, 3, 4, 5, 6], addLecturehandler, animeTitle }) {
    const [title, setTitle] = useState('')
    const [description, setDiscription] = useState('')
    const [video, setVideo] = useState('')
    const [videoPrev, setVideoPrev] = useState('')


    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {  //when the file is loaded
            setVideoPrev(reader.result); //we will set the image preview to the result of the reader //reader.result is the base64 encoded string of the image that we have selected from the input type file 
            setVideo(file);  //file is the image file that we have selected from the input type file  //we will send this file to the backend
        }
    }
    const handleClose = () => {
        setTitle('')
        setDiscription('')
        setVideo('')
        setVideoPrev('')
        onClose();

    }

    return (
        <Modal isOpen={isOpen} size={'full'} onClose={handleClose} scrollBehavior='inside'>

            <ModalOverlay />

            <ModalContent>

                <ModalHeader backgroundColor={'blackAlpha.300'}>{animeTitle}</ModalHeader>
                <ModalCloseButton />

                <ModalBody p='16'>

                    <Grid templateColumns={['1fr', '3fr 1fr']}>
                        <Box px={['0', '16']}>


                            <Box my='5'>
                                <Heading children={animeTitle} />
                                <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
                            </Box>


                            <Heading children={'Episodes'} size='lg' />

                            {lectures.map((item, i) => {
                                return <VideoCard
                                    key={i}
                                    title='Zom'
                                    description='wededcs'
                                    num={i+1}
                                    lectureId='rfevcdfvfd'
                                    courseId={id}
                                    deleteButtonHandler={deleteButtonHandler}
                                />
                            })}


                        </Box>

                        <Box>
                            <form onSubmit={e => addLecturehandler(e, id, title, description, video)}>
                                <VStack spacing={'4'}>

                                    <Heading children='Add video' size={'md'} textTransform={'uppercase'} />

                                    <Input focusBorderColor='purple.300' placeholder='title' value={title} onChange={e => setTitle(e.target.value)} />

                                    <Input focusBorderColor='purple.300' placeholder='description' value={description} onChange={e => setDiscription(e.target.value)} />

                                    <Input
                                        accept='video/mp4'
                                        required
                                        type='file'
                                        focusBorderColor='purple.300'
                                        css={{
                                            '&::file-selector-button': {
                                                ...fileUploadCss, color: 'purple',
                                            },
                                        }}
                                        onChange={changeVideoHandler}
                                    />

                                    {
                                        videoPrev && (
                                            <video controlsList='nodownload' controls src={videoPrev}
                                            ></video>

                                        )
                                    }

                                    <Button w='full' colorScheme='purple' type='submit'>Upload</Button>

                                </VStack>

                            </form>


                        </Box>

                    </Grid>

                </ModalBody>

                <ModalFooter backgroundColor={'blackAlpha.300'}>
                    <Button onClick={handleClose}>Close</Button>
                </ModalFooter>

            </ModalContent>

        </Modal>
    )
}

export default CourseModal



function VideoCard({ title, description, num, lectureId, courseId, deleteButtonHandler }) {

    return <Stack direction={['column', 'row']} my={'8'} borderRadius={'lg'} boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
        justifyContent={['flex-start', 'space-between']} p={['4', '8']}>

        <Box>
            <Heading size={'sm'} children={`#${num} ${title}`} />
            <Text children={description} />
        </Box>

        <Button color={'purple.600'} onClick={() => deleteButtonHandler(courseId, lectureId)}>
            <RiDeleteBin7Fill />
        </Button>

    </Stack>
}
