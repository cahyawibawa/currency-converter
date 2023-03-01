import React from 'react';
import { Box, Text } from '@chakra-ui/react';
const ConverterDisplay = ({
  amount,
  currencyOne,
  currencyTwo,
  convertedAmount,
  date,
  time,
}) => {
  return (
    <Box textAlign='right'>
      <Text fontSize='2xl' fontWeight='bold'>
        {amount} {currencyOne}
      </Text>
      <Text fontSize='2xl' fontWeight='bold' color='purple.500'>
        {convertedAmount} {currencyTwo}
      </Text>
      <Text fontSize='xs' fontWeight='bold' color='gray.400'>
        Market rates collected - {date} {time}
      </Text>
    </Box>
  );
};

export default ConverterDisplay;
