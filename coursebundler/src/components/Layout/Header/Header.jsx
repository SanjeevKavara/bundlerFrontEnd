import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, VStack, useDisclosure, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
    <Link onClick={onClose} to={url}>
        <Button variant={'ghost'} >{title}</Button>
    </Link>
);

function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure() 
    const isAuth = true
    const user = {
        role: 'admin'
    }



    const logoutHandler = () => {
        console.log('logout')
        onClose();
    }



    return (
        <div>
            <ColorModeSwitcher>
            </ColorModeSwitcher>

            <Button
                onClick={onOpen}
                colorScheme={'yellow'}
                width='12'
                height='12'
                rounded='full'
                position={'fixed'}
                zIndex={'overlay'}
                top='6'
                left='6'
            >
                <RiMenu5Fill />
            </Button>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(5px)'} />
                <DrawerContent>
                    <DrawerHeader borderBottom={'1px'}>ANIFO</DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={'4'} alignItems={'flex-start'}>
                            <LinkButton onClose={onClose} url='/' title='Home' />
                            <LinkButton onClose={onClose} url='/courses' title='Browse' />
                            <LinkButton onClose={onClose} url='/request' title='Request Anime' />
                            <LinkButton onClose={onClose} url='/about' title='About' />
                            <LinkButton onClose={onClose} url='/contact' title='Contact Us' />



                            <HStack justifyContent={'space-evenly'} position='absolute' bottom={'2rem'} width='80%'>
                                {isAuth ? (<>
                                    <VStack>
                                        <HStack> {/* HStack is used to align the buttons horizontally */}
                                            <Link onClick={onClose} to='/profile'>
                                                <Button varient={'ghost'} colorScheme={'yellow'}>Profile</Button>
                                            </Link>


                                            <Button varient={'ghost'} onClick={logoutHandler} >
                                                <RiLogoutBoxLine style={{ margin: '4px' }} />
                                                Logout
                                            </Button>


                                        </HStack>


                                        {
                                            user && user.role === 'admin' && <Link onClick={onClose} to='/admin/dashboard'>
                                                <Button colorScheme='purple' varient={'ghost'} >
                                                    <RiDashboardFill style={{ margin: '4px' }} />
                                                    Dashboard
                                                </Button>
                                            </Link>
                                        }
                                    </VStack>

                                </>) : (<>
                                    <Link onClick={onClose} to='/login'>
                                        <Button colorScheme={'yellow'}>Login</Button>
                                    </Link>

                                    <p>OR</p>
                                    <Link onClick={onClose} to='/register'>
                                        <Button colorScheme={'yellow'}>Sign Up</Button>
                                    </Link>
                                </>)}

                            </HStack>
                        </VStack>

                    </DrawerBody>
                </DrawerContent>


            </Drawer>
        </div>
    )
}

export default Header
