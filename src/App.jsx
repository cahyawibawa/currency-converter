import Converter from '../features/common/Converter';
import { Flex } from '@chakra-ui/react';
function App() {
  return (
    <>
      <Flex
        // bgGradient='linear(to-t, #ae085c, #2e0656)'
        backgroundColor='blackAlpha.900'
        height='100vh'
        justifyContent='center'
      >
        <Converter />
      </Flex>
    </>
  );
}

export default App;
