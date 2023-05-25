import { formatDistanceToNow } from 'date-fns'
import { PostType } from '../../../../contexts/GlobalContext'
import { CardContainer } from './styles'
import { ptBR } from 'date-fns/locale'

interface Post {
  post: PostType
}

export function Card({ post }: Post) {
  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(post.createdAt),
    {
      locale: ptBR,
      addSuffix: true,
    },
  )
  return (
    <CardContainer to={`post/${post.id}`}>
      <div>
        <h3>{post.title}</h3>
        <time></time>
        <span>
          {publishedDateRelativeToNow.toString().replace('há cerca de ', 'Há ')}
        </span>
      </div>
      <p>{post.body}</p>
    </CardContainer>
  )
}
