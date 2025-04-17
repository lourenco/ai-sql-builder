const AiSqlSuggestion = ({onClick}: {onClick: (prompt: string) => void}) => (
  <>
    <h3 className="text-sm text-neutral-600 font-bold pb-4">SUGESTÕES</h3>

    <AiSqlSuggestionItem
      title="Produtos mais Vendidos"
      description="pode ser feito promoções cruzadas"
      onClick={() => onClick('Liste os produtos mais vendidos')}
    />
    <AiSqlSuggestionItem
      title="Vendas baixas"
      description="talvez mereçam promoção ou anúncio"
      onClick={() => onClick('Liste vendas baixas')}
    />
    <AiSqlSuggestionItem
      title="Clientes que mais compraram"
      description="oferecer cupons de desconto"
      onClick={() => onClick('Liste clientes que mais compraram')}
    />
  </>
)

const AiSqlSuggestionItem = ({title, description, onClick}: {title: string, description: string, onClick: () => void}) => (
  <button className="border border-neutral-700 rounded-xl mb-3 text-sm p-4 cursor-pointer block w-full text-left" onClick={onClick}>
    <span className="font-bold">{title}</span> ({description})
  </button>
)

export default AiSqlSuggestion
