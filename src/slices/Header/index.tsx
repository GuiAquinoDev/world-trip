import React from 'react'
import { Flex, Image, Box, Icon, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiChevronLeft } from 'react-icons/fi'
import { HeaderProps } from '@/@types/types'

export default function Header({ slice }: HeaderProps) {
  const { asPath, push } = useRouter()

  const handleBackHome = () => {
    push('/')
  }

  return (
    <Box as={'header'} px={'1rem'}>
      <Flex
        maxW={'72.5rem'}
        mx={'auto'}
        py={['0.938rem', '1.688rem']}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box>
          {asPath !== '/' && (
            <IconButton
              icon={<Icon as={FiChevronLeft} />}
              fontSize="32"
              aria-label="return"
              variant="outline"
              border="none"
              onClick={handleBackHome}
              _hover={{
                backgroundColor: 'transparent',
                color: 'yellow.900',
              }}
            />
          )}
        </Box>

        <Box>
          <Link href={'/'}>
            <Box>
              <Image
                w={['5rem', '11.5rem']}
                src={slice.primary.logo.url!}
                alt={slice.primary.logo.alt!}
              />
            </Box>
          </Link>
        </Box>

        <Box></Box>
      </Flex>
    </Box>
  )
}
