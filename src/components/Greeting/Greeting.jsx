import { Flex } from "@chakra-ui/react";

export const Greeting = ({message}) => {
	return <Flex
	alignItems={'center'}
	width={'100%'}
	height={'90vh'}
	justifyContent={'center'}
	fontSize={30}
	fontWeight={'bold'}
	>
		{message}
	</Flex>
};