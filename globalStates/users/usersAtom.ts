import { atom } from 'recoil'
import { User } from '@/types'

// keyにアプリケーション全体で一意なキー、defaultに状態管理したい値の初期値を設定します。
// 状態管理したい値一つごとにAtomを一つ作っていく。

export const usersState = atom<User[]>({
  key: 'users',  // 一意のキー
  default: [ // 初期値
    {
      id: 1,
      name: "maruyama1",
      job: "frontend",
      avatar: 'https://avatars.githubusercontent.com/u/76277215?v=4',
      unavailable: false
    },
    {
      id: 2,
      name: "maruyama2",
      job: "backend",
      avatar: 'https://avatars.githubusercontent.com/u/76277215?v=4',
      unavailable: true
    }
  ]
})