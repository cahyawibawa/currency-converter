import React from 'react';
import { useCurrency } from '../hooks/useCurrency';
import { Box, Text, Spinner, Grid, GridItem } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import ConverterHeader from './components/ConverterHeader';
import ConverterOption from './components/ConverterOption';
import ConverterInput from './components/ConverterInput';
import ConverterDisplay from './components/ConverterDisplay';
const Converter = () => {
  const {
    isLoading,
    isError,
    amount,
    setAmount,
    currencyOne,
    currencyTwo,
    setCurrencyOne,
    setCurrencyTwo,
    currencyList,
    convertedAmount,
    ratesData,
    symbolsData,
    date,
    time,
  } = useCurrency();
  if (isError)
    return (
      <Text fontWeight='bold' fontSize='3xl' color='white'>
        Something has gone wrong
      </Text>
    );
  if (isLoading)
    return (
      <Spinner
        margin='auto'
        size='3xl'
        thickness='4px'
        color='purple.500'
        speed='0.65s'
        emptyColor='purple.200'
      />
    );
  return (
    <Box width={{ base: '90vw', sm: '45vw' }} margin='0 auto'>
      <ConverterHeader />
      <Grid
        templateColumns='repeat(5, 1fr)'
        templateRows='repeat(2,1fr)'
        padding='1rem'
        backgroundColor='white'
        borderRadius='lg'
      >
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf='center'
          alignSelf='center'
        >
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyOne}
            currency={currencyOne}
          />
        </GridItem>
        <GridItem
          display={{ base: 'none', sm: 'block' }}
          colSpan={1}
          justifySelf='center'
          alignSelf='center'
        >
          <RepeatIcon boxSize='2rem' color='purple.300' />
        </GridItem>
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf='center'
          alignSelf='center'
        >
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyTwo}
            currency={currencyTwo}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <ConverterInput value={amount} onAmountChange={setAmount} />
        </GridItem>
        <GridItem colSpan={3} justifySelf='right' alignSelf='right'>
          <ConverterDisplay
            amount={amount}
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            convertedAmount={convertedAmount}
            date={date}
            time={time}
          />
        </GridItem>
      </Grid>
      <Text
        textAlign='center'
        marginTop='1.5rem'
        color='whiteAlpha.600'
        fontSize='sm'
      >
        Built with 💙 by {`cahya wibawa`}
        <br />
        <a
          href='https://www.cahyawibawa.dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          checkout my portfolio
        </a>
      </Text>
    </Box>
  );
};

export default Converter;
