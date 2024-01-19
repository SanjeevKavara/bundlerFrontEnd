import { Box, Button, Container, FormLabel, Heading, Input, VStack, Avatar } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const fileUploadCss = {
   // & is used to select the parent element  // :: is used to select the pseudo element  // file-selector-button is the pseudo element  // file-selector-button is the default pseudo element for the input type file
        cursor:'pointer',
        marginLeft:'-5%',
        width:'110%',
        border:'none',
        height:'100%',
        color:'#ECC94B',
        backgroundColor:'white',
    };

const fileUploadStyle = {          //css in js object format 
    '&::file-selector-button': fileUploadCss,
};

function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [imagePrev, SetImagePrev] = useState('')
    const [image,setImage] = useState('')

const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {  //when the file is loaded
        SetImagePrev(reader.result);
        setImage(file);
    }   
}

    return (
        <Container h={['120vh','95vh']}>
            <VStack h={'full'} justifyContent={'center'} spacing={'16'}>


                <Heading textTransform={'uppercase'} children={'Registration'} mt={'4'} />

                <form style={{ width: '100%' }}>

                    <Box my={'4'} display={'flex'} justifyContent={'center'}>
                        <Avatar src={imagePrev} size={'2xl'} />

                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children='Name' />  {/* htmlFor is same as for in html */}
                        <Input
                            required
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter your Name'
                            type='text'
                            focusBorderColor='yellow.500'
                        />

                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children='Email Address' />  {/* htmlFor is same as for in html */}
                        <Input
                            required
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email address'
                            type='email'
                            focusBorderColor='yellow.500'
                        />

                    </Box>


                    <Box my={'4'}>
                        <FormLabel htmlFor='password' children='Password' />  {/* htmlFor is same as for in html */}
                        <Input
                            required
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your Password'
                            type='password'
                            focusBorderColor='yellow.500'
                        />

                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor='chooseAvatar' children='Choose Avatar' />  {/* htmlFor is same as for in html */}
                        <Input
                            accept='image/*'
                            required
                            id='chooseAvatar'


                            type='file'
                            focusBorderColor='yellow.500'
                            css={fileUploadStyle}
                            onChange={changeImageHandler}
                        />

                    </Box>

                    <Button colorScheme='yellow' my={'4'} type='submit'>
                        Sign Up
                    </Button>


                    <Box my={'4'}>
                        Already Signed Up?{' '}
                        <Link to='/login'>
                            <Button colorScheme='yellow' variant={'link'}>
                                Login
                            </Button>{' '}
                            here
                        </Link>

                    </Box>



                </form>

            </VStack>
        </Container>
    )
}


export default Register
