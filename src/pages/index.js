import React from "react"
import { Button } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

const IndexPage = () => {
  return (
    <div style={{ marginLeft: 25 }}>
      <Text fontSize="4xl">GatsbyJs Starter With ChakraUI</Text>
      <Text fontSize="2xl">sky is limit, stop wasting time and start coding like a hacker <StarIcon /></Text>
      <Button colorScheme="red">Start Building Apps</Button>
    </div>
  )
}


export default IndexPage