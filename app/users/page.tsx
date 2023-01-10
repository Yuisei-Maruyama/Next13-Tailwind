'use client';

import React from 'react'
import {
  RecoilRoot,
} from 'recoil';
import Users from '@/components/Domain/Users'

const page = () => {
  return (
    <RecoilRoot>
      <Users />
    </RecoilRoot>
  )
}

export default page