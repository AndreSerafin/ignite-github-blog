import { NavLink, useParams } from 'react-router-dom'
import { PostBody, PostContainer, PostInfo } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext, PostType } from '../../contexts/GlobalContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post() {
  const [post, setPost] = useState<PostType>({
    title: '',
    body: '',
    numberOfComments: 0,
    createdAt: new Date(),
    id: 0,
  })
  const { postsData, userData } = useContext(GlobalContext)
  const { id } = useParams()

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(post.createdAt),
    {
      locale: ptBR,
      addSuffix: true,
    },
  )
    .toString()
    .replace('há cerca de', 'Há')

  console.log(post.createdAt)

  useEffect(() => {
    postsData.forEach((post) => {
      if (post.id.toString() === id) {
        setPost(post)
      }
    })
  }, [id, postsData])

  return (
    <PostContainer>
      <PostInfo>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </NavLink>
          <NavLink to={userData.html_url}>
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </div>
        <h1>{post.title}</h1>
        <div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userData.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{publishedDateRelativeToNow}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {post.numberOfComments}{' '}
              {post.numberOfComments === 1 ? 'comentário' : 'comentários'}
            </span>
          </div>
        </div>
      </PostInfo>
      <PostBody>
        <p>{post.body}</p>
      </PostBody>
    </PostContainer>
  )
}
