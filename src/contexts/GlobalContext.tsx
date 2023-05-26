import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface UserData {
  name: string
  bio: string
  company: string
  followers: string
  html_url: string
  avatar_url: string
  login: string
}

interface PostRequisition {
  title: string
  body: string
  created_at: Date
  comments: number
  id: number
}

export interface PostType {
  title: string
  body: string
  createdAt: Date
  numberOfComments: number
  id: number
}

interface GlobalContextType {
  userData: UserData
  postsData: PostType[]
  fetchUserData: () => void
  fetchPostsData: () => void
  fetchSearchPostsData: (query?: string) => void
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

  const [postsData, setPostsData] = useState<PostType[]>([
    {
      title: '',
      body: '',
      numberOfComments: 0,
      createdAt: new Date(),
      id: 0,
    },
  ])

  async function fetchUserData() {
    const response = await api.get('users/andreserafin')
    const { name, bio, company, followers, html_url, avatar_url, login } =
      response.data
    setUserData({ name, bio, company, followers, html_url, avatar_url, login })
  }

  async function fetchPostsData() {
    const response = await api.get(
      'repos/AndreSerafin/ignite-github-blog/issues',
    )

    const posts = response.data.map((post: PostRequisition) => ({
      title: post.title,
      body: post.body,
      createdAt: post.created_at,
      numberOfComments: post.comments,
      id: post.id,
    }))
    setPostsData(posts)
  }

  async function fetchSearchPostsData(query?: string) {
    const userName = 'AndreSerafin'
    const repo = 'ignite-github-blog'
    const response = await api.get(
      `search/issues?q=${query}%20repo:${userName}/${repo}`,
    )
    const { items } = response.data

    const posts = items.map((post: PostRequisition) => ({
      title: post.title,
      body: post.body,
      createdAt: post.created_at,
      numberOfComments: post.comments,
      id: post.id,
    }))
    setPostsData(posts)
  }

  useEffect(() => {
    fetchUserData()
    fetchPostsData()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        userData,
        postsData,
        fetchUserData,
        fetchPostsData,
        fetchSearchPostsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
