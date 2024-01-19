import {Container, Grid, Heading, VStack, Input, Select, Image, Button } from '@chakra-ui/react'
import React from 'react'
import cursorr from '../../../assets/images/icons8-cursor-small.png'
import Sidebar from '../Sidebar'
import { useState } from 'react'
import { fileUploadCss } from '../../Auth/Register'

function Addanime() {

  const [title, setTitle] = useState('')
  const [description, setDiscription] = useState('')
  const [createdby, setCreatedBy] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [imagePrev, setImagePrev] = useState('')

  const categories = ["horror", "romance", 'action', 'comedy']

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {  //when the file is loaded
      setImagePrev(reader.result); //we will set the image preview to the result of the reader //reader.result is the base64 encoded string of the image that we have selected from the input type file 
      setImage(file);  //file is the image file that we have selected from the input type file  //we will send this file to the backend
    }
  }


  return (
    <Grid style={{ cursor: `url(${cursorr}), auto` }}
      minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>

      <Container py='16'>
        <form>
          <Heading textTransform={'uppercase'} children='Add Anime' my={'16'} textAlign={['center', 'left']} />
          <VStack m={'auto'} spacing={'8'}>

            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Title'
              type='text'
              focusBorderColor='purple.300'
            />

            <Input
              value={description}
              onChange={(e) => setDiscription(e.target.value)}
              placeholder='Discription'
              type='text'
              focusBorderColor='purple.300'
            />

            <Input
              value={createdby}
              onChange={(e) => setCreatedBy(e.target.value)}
              placeholder='Creator Name'
              type='text'
              focusBorderColor='purple.300'
            />


            <Select focusBorderColor='purple.300' value={category} onChange={e => setCategory(e.target.value)} >

              <option value=''>Genre</option>

              {categories.map((genre, i) => <option key={i} value={genre}>{genre}</option>)}
            </Select>

            <Input
              accept='image/*'
              required
              type='file'
              focusBorderColor='purple.300'
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss, color: 'purple',
                },
              }}
              onChange={changeImageHandler}
            />

            {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}

            <Button w={'full'} colorScheme='purple' type='submit'>Create</Button>

          </VStack>
        </form>
      </Container>

      <Sidebar />

    </Grid>
  )
}

export default Addanime
