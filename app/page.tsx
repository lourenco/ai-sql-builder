import {fetchDatabaseSchema} from '@/services'
import AiSql from './components/AiSql'

export const dynamic = 'force-dynamic';

const Home = async () => {
  const {tableNames, data} = await fetchDatabaseSchema()

  return (
    <div className="w-full">
      <div className="fixed inset-y-0 left-0 w-60 items-start overflow-y-auto border-r border-neutral-800 hidden sm:block">
        <div className="w-full h-[100vh]">
          <h3 className="text-sm text-neutral-500 font-bold pl-8 pt-8">DATABASE SCHEMA</h3>

          {tableNames.map(tableName => (
            <li key={tableName} className="pt-4 pb-6 block border-b last:border-none border-neutral-800">
              <h5 className="font-bold text-sm py-2 pl-8">{tableName}</h5>

              <ul>
                {data[tableName].map(({columnName}) => (
                  <li key={`${tableName}-${columnName}`} className="py-1 text-sm pl-8">{columnName}</li>
                ))}
              </ul>
            </li>
          ))}
        </div>
      </div>

      <div className="lg:relative sm:ml-60">
        <h1 className="text-5xl text-center py-10 px-20 sm:py-20 sm:px-20 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Crie SQL Queries com IA
        </h1>

        <AiSql />
      </div>
    </div>
  )
}

export default Home
