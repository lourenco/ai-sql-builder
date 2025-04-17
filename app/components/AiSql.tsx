'use client'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid';
import {Button, LoadingSpinner, TextArea, CodeHighlight, Feedback} from '@/design-system'
import AiSqlSuggestion from './AiSqlSuggestion';
import DataTable from './DataTable';
import useAiSql from './useAiSql';
import {AiSqlChatResponse} from '@/services';

const AiSql = () => {
  const {data, error, loading, prompt, setPrompt, sendFetchAiSqlChat} = useAiSql()

  return (
    <>
      <div className="flex max-w-[1200px] m-auto flex-col 2xl:flex-row">
        <div className="w-full p-4">
          <div className="relative">
            <form onSubmit={(event) => {
              sendFetchAiSqlChat(prompt)
              event.preventDefault()
            }}>
              <TextArea
                className="h-55"
                placeholder="Faça uma pergunta para obter insights sobre seus dados"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
              />

              <Button className="absolute right-3 bottom-5" disabled={loading || !prompt}>
                <PaperAirplaneIcon className="w-5 h-5 text-neutral-900" />
              </Button>
            </form>
          </div>
        </div>

        <div className="md:min-w-[500px] p-4">
          {loading ? <LoadingSpinner /> : (
            <>
              {data?.sql ? (<CodeHighlight content={data.sql} />) : <AiSqlSuggestion onClick={sendFetchAiSqlChat} />}
            </>
          )}
        </div>
      </div>

      {error ? (
        <Feedback
          className="mt-10"
          title="Erro ao carregar dados"
          description="Não foi possível obter as informações do banco de dados. Tente novamente mais tarde."
          colorScheme="danger"
        />
      ) : (
        <AiSqlContent data={data} />
      )}
    </>
  )
}

const AiSqlContent = ({data}: {data?: AiSqlChatResponse}) => {
  if (!data) {
    return null
  }

  if (!data.rows.length) {
    return <Feedback className="mt-10" title="Nenhum dado encontrado" description="O banco de dados não retornou nenhum dado para esta consulta." />
  }

  return <DataTable rows={data.rows} columns={data.columns} />
}

export default AiSql
