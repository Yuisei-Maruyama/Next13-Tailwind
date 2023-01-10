'use client';

import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { usersState } from '@/globalStates/users/usersAtom'
import Listbox from '@/components/Base/Listbox'
import Card from '../Base/Card';

const Users: React.FC = () => {

  const [users, setUsers] = useRecoilState(usersState)

  const [selected, setSelected] = useState(users[0])

  const img = {
    src: 'https://avatars.githubusercontent.com/u/76277215?v=4',
    alt: 'Maruyama Avater'
  }

  const tags = [
    'github',
    'instagram'
  ]

  return (
    <>
      <Card title='タイトル' description='sample' img={img} tags={tags}></Card>
      <Listbox dataList={users} selected={selected} setSelected={setSelected} />
    </>
  )
}

export default Users