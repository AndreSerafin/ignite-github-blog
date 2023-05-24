import { formatDistanceToNow } from 'date-fns'
import { Post } from '../../../../contexts/GlobalContext'
import { CardContainer } from './styles'
import { ptBR } from 'date-fns/locale'

export function Card({ title, body, createdAt }: Post) {
  const publishedDateRelativeToNow =
    createdAt !== ''
      ? formatDistanceToNow(new Date(createdAt), {
          locale: ptBR,
          addSuffix: true,
        })
      : ''
  return (
    <CardContainer to={'post'}>
      <div>
        <h3>{title}</h3>
        <time></time>
        <span>
          {publishedDateRelativeToNow.toString().replace('há cerca de ', 'Há ')}
        </span>
      </div>
      <p>{body}</p>
    </CardContainer>
  )
}
