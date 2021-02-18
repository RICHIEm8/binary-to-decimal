import {
  Button,
  Flex,
  Heading,
  HStack,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const binToDec = parseInt(query.toString(), 2);
    setResult(binToDec.toString());
    setQuery('');
  };

  return (
    <Flex flexDirection="column" alignItems="center" bgColor="green.500" minHeight="100vh">
      <Heading as="h1" color="white">
        Binary to Decimal
      </Heading>
      <Flex justifyContent="center">
        <HStack spacing={0}>
          <form onSubmit={handleSubmit}>
            <NumberInput>
              <NumberInputField
                w={412}
                maxlength="8"
                placeholder="Enter binary code..."
                bgColor="white"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
            </NumberInput>
            <Button type="submit">Submit</Button>
          </form>
        </HStack>
      </Flex>
      <Text fontSize="4xl" color="white">
        {result}
      </Text>
    </Flex>
  );
}

export default App;
