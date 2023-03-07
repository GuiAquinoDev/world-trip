import React from 'react'
import { Divider } from '@chakra-ui/react'
import { SeparatorProps } from '@/@types/types'

export default function Separator({ slice }: SeparatorProps) {
  return (
    <>
      {slice.primary.isSeparator === true && (
        <Divider
          orientation="horizontal"
          border="2px"
          borderColor="gray.900"
          maxWidth={['60px', '90px']}
          mx="auto "
          backgroundClip="gray.900"
        />
      )}
    </>
  )
}
