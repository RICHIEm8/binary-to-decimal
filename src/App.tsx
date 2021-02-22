import {
  Button,
  Flex,
  Heading,
  HStack,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const binToDec = parseInt(query.toString(), 2);
    const checkForBinary = query.match(/^[0-1]+$/);
    if (!checkForBinary) {
      setResult('Please make sure you only enter digits 0 or 1!');
    } else {
      setResult(`${query} = ${binToDec.toString()}`);
      setQuery('');
    }
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bgColor="blue.500"
      minHeight="100vh"
      justifyContent="center"
    >
      <Heading as="h1" size="4xl" color="white">
        Binary to Decimal
      </Heading>
      <Flex justifyContent="center" mt={50} mb={25}>
        <HStack spacing={0}>
          <form onSubmit={handleSubmit}>
            <Flex>
              <NumberInput
                w={412}
                placeholder="Enter binary code..."
                bgColor="white"
                onChange={setQuery}
                value={query}
              >
                <NumberInputField maxLength={8} />
              </NumberInput>
              <Button type="submit">Submit</Button>
            </Flex>
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
