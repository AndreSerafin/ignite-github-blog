import { ReactNode, createContext, useEffect, useState } from 'react'
import { issuesApi, userApi } from '../services/api'

interface UserData {
  name: string
  bio: string
  company: string
  followers: string
  html_url: string
  avatar_url: string
  login: string
}

export interface Post {
  title: string
  body: string
  createdAt: string
  numberOfComments: number
  id: number
}

interface GlobalContextType {
  userData: UserData
  postsData: Post[]
  fetchUserData: () => void
  fetchPostsData: () => void
}

interface GlobalProviderProps {
  children: ReactNode
}
export const GlobalContext = createContext({} as GlobalContextType)
export function GlobalProvider({ children }: GlobalProviderProps) {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    bio: '',
    company: '',
    followers: '',
    html_url: '',
    avatar_url: '',
    login: '',
  })

  const [postsData, setPostsData] = useState<Post[]>([
    {
      title: '',
      body: '',
      numberOfComments: 0,
      createdAt: '',
      id: 0,
    },
  ])

  async function fetchUserData() {
    const response = await userApi.get('andreserafin')
    const { name, bio, company, followers, html_url, avatar_url, login } =
      response.data
    setUserData({ name, bio, company, followers, html_url, avatar_url, login })
  }

  async function fetchPostsData() {
    const response = await issuesApi.get(
      'AndreSerafin/ignite-github-blog/issues',
    )
    const posts = response.data.map((post: any) => ({
      title: post.title,
      body: post.body,
      createdAt: post.created_at,
      numberOfComments: post.comments,
      id: post.id,
    }))
    setPostsData(posts)
    console.log(posts)
  }
  useEffect(() => {
    fetchUserData()
    fetchPostsData()
  }, [])

  return (
    <GlobalContext.Provider
      value={{ userData, postsData, fetchUserData, fetchPostsData }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
