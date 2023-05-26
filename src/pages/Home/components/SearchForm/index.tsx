import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { GlobalContext } from '../../../../contexts/GlobalContext'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchSearchPostsData } = useContext(GlobalContext)
  const { handleSubmit, register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    fetchSearchPostsData(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <input {...register('query')} type="text" placeholder="Buscar Conteúdo" />
    </SearchFormContainer>
  )
}
