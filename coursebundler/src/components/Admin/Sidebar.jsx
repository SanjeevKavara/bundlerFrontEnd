import { Button, VStack } from '@chakra-ui/react'

import React from 'react'
import { RiAddCircleFill, RiDashboardFill } from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { Link,useLocation } from 'react-router-dom'

function Sidebar() {

  const location = useLocation();

  return (
    <VStack spacing={'8'} p='16' boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>


      <LinkButton children={'Dashboard'} Icon={RiDashboardFill} url={'dashboard'} active={location.pathname ==='/admin/dashboard'}/>
      <LinkButton children={'Add Anime'} Icon={RiAddCircleFill} url={'addanime'} active={location.pathname==='/admin/addanime'}/>
      <LinkButton children={'Animes'} Icon={BsSearch} url={'admincourses'} active={location.pathname==='/admin/admincourses'} />
      <LinkButton children={'Users'} Icon={FiUser} url={'users'} active={location.pathname==='/admin/users'}/>




    </VStack>
  )
}

export default Sidebar


const LinkButton = ({ url, Icon, children, active }) => {
  return (
    <Link to={`/admin/${url}`}>
      <Button fontSize={'larger'} variant={'ghost'} colorScheme={active?'purple':''}>
        <Icon style={{ margin: '4px' }} />
        {children}
      </Button>
    </Link>
  )

}
