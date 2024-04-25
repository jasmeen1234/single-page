import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Flex, Stack } from '@chakra-ui/react'
import PageContent from '../Layout/PageContent'
import PlacementLinkLeft from '../components/PlacementLinkLeft'
import MainContent from '../components/MainContent'
import RichTextEditor from '../components/RichTextEditor'
import Counter from '../components/Counter.jsx'
import UserDataForm from '../components/UserDataForm'
import UserDataPage from './UserDataPage.jsx'
import { useEffect, useRef, useState } from 'react'
import UserdataDisplay from '../components/UserdataDisplay.jsx'
import useIsLoggedInStore from './Zustand/Authentication.js'
import guestUserSignUp from '../Zustand/GuestUserLogin.js'

const Home = () => {
  const [selectedColor, setSelectedColor] = useState("#FFFF00");
  const [count, setCount] = useState(0);
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedInStore();




  const backgroundColor = `linear-gradient(to right, ${selectedColor} ${count}%, #FFFFFF ${count}%)`

  return (
    <Flex width={{ base: "100%" }} overflow="hidden" justify="center">
      <PageContent>
        <>
          {isLoggedIn ? <> <Flex justify={{md: 'space-between', base: 'center'}} flexWrap="wrap" gap={10} >
            <Flex width={{ base: "90vw", md: "600px" }}><Counter background={backgroundColor} selectedColor={selectedColor} setSelectedColor={setSelectedColor} count={count} setCount={setCount} /></Flex>
            <Flex width={{ base: "90vw", md: "600px" }} height={{ base: "400px", md: "340px" }}><RichTextEditor /></Flex>

            <Flex  mt={12} width={{ base: "90vw", md: "600px" }}><UserDataForm /></Flex>
            <Flex mt={12} width={{ base: "90vw", md: "600px" }}><UserdataDisplay /></Flex>

          </Flex>

            <Stack mt="10px" width={"100%"} height="auto" >
              <Flex mt={6} padding={10} background={backgroundColor} height="30px" ></Flex>

            </Stack></> : <Flex width="100vw" mr={{ md: 20, base: 14 }} height="100vh" justify="center" align="center">
            <Text fontSize="xx-large" color="orange.400">Login First</Text>
          </Flex>}


        </>

        <>
        </>
      </PageContent>
    </Flex>
  )
}

export default Home