'use client';

import { selector } from 'recoil'
import { usersState } from './usersAtom'

export const charCountState = selector({
  key: 'charCountState',
  //Atomの値を加工して返す関数を設定
  get: ({get}) => {
    //const 状態変数 = get(Atomのkey)
    const users = get(usersState)
    //加工した値を返す
    return users.length
  }
})