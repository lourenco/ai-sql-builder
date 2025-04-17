import {useState} from 'react';
import {fetchAiSqlChat, type AiSqlChatResponse} from '@/services';

const useAiSql = () => {
  const [data, setData] = useState<AiSqlChatResponse | undefined>(undefined)
  const [error, setError] = useState(undefined)
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState<boolean>(false)

  function sendFetchAiSqlChat(newPrompt: string) {
    setPrompt(newPrompt)
    setLoading(true)

    return fetchAiSqlChat(newPrompt)
      .then((value) => setData(value))
      .catch((error) => {
        setData(undefined)
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  return {
    data,
    error,
    loading,
    prompt,
    setPrompt,
    sendFetchAiSqlChat
  }
}


export default useAiSql
