import React from 'react'
import Block from './block'

export const Example = ({ children }) => (
  <Block color='gray' prepend='Example'>
    {children}
  </Block>
)

export default Example
