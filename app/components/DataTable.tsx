const DataTable = ({rows, columns}: {rows: Record<string, string>[], columns: string[]}) => {
  return (
    <table className="table-auto mt-20 w-full border-neutral-700 border-t">
      <thead>
        <tr className="border-b border-b border-neutral-800">
          {columns.map((column, index) => (
            <th key={column} className={`text-left p-5 ${index ? '' : 'pl-10'}`}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((columnName, rowIndex) => (
              <td key={rowIndex} className={`p-5 ${rowIndex ? '' : 'pl-10'}`}>{row[columnName]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable
