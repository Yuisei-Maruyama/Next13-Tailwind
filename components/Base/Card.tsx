import React from 'react'

type Props = {
  title: string
  description: string
  img?: {
    src: string
    alt: string
  }
  children?: React.ReactNode
}

const Card: React.FC<Props> = ({ title, description, img, children}) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {
          img ? <img className="w-full" src={img.src} alt={img.alt} /> : <></>
        }
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            { description }
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {
            children
          }
        </div>
      </div>
    </>
  )
}

export default Card