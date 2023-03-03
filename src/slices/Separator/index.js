import React from 'react'
import { Divider } from '@chakra-ui/react'

/**
 * @typedef {import("@prismicio/client").Content.SeparatorSlice} SeparatorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SeparatorSlice>} SeparatorProps
 * @param { SeparatorProps }
 */
export default function Separator({ slice }) {
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
