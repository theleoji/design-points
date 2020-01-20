import React from 'react'

export const Block = ({
  children,
  color = '#999999',
  prepend = '',
  append = ''
}) => (
  <aside
    style={{
      display: 'block',
      backgroundColor: color,
      padding: '2em'
    }}
  >
    {prepend ? (
      <strong>
        {prepend}
        {'. '}
      </strong>
    ) : null}
    {children}
    {append ? <strong>${append}</strong> : null}
  </aside>
)
export default Block
