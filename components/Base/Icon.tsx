import React from 'react'

type Props = {
  src: string
}

const Icon: React.FC<Props> = ({src}) => {
  return (
    <img src={src} alt="" className="h-2 w-2 rounded-full" />
  )
}

export default Icon