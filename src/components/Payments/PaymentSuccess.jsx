import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link,useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {

  const reference =useSearchParams()[0].get("reference");
//by suing it refrence id magayi yha rkh di

  return (
    <Container h={'90vh'} p='16'>
       <Heading my='8'textAlign ={'center'}> You have Pro Pack </Heading>
       <VStack boxShadow={"lg"} pb="16" alignItems={'center'} borderRadius="lg">
{/* //padding bottom==pb */}
<Box   w='full' bg='yellow.400' p='4' css={{borderRadius: '8px 8px 0 0 '}}>


<Text color ={"black"}>Payment Success</Text>

</Box>
<Box p="4">
  {/* //mt=margin top */}
<VStack textAlign={'center'} px='8'mt='4' spacing={'8'}>

<Text>
  Congratulation you're a pro member. You have access to premium content.
</Text>
<Heading size={'4xl'}>
<RiCheckboxCircleFill/>
{/* //jo sahi katick aya h isis se */}
</Heading>

</VStack>
</Box>
<Link to="/profile">
<Button variant={'ghost'}>
  Go to profile
</Button>
</Link>
<Heading   size={'xs'} > Reference:{reference} </Heading>
       </VStack>
    </Container>
  )
}

export default PaymentSuccess
