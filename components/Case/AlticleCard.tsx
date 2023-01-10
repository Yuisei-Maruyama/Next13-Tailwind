import React from 'react'
import Card from '@/components/Base/Card';

type Props = {
  img?: {
    src: string
    alt: string
  }
  tags?: string[]
}

const AlticleCard: React.FC<Props> = ({img, tags}) => {
  return (
    <Card title='タイトル' description='sample' img={img}>
      <>
        {
          tags?.length ? tags.map((tag, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>) : <></>
        }
      </>
    </Card>
  )
}

export default AlticleCard