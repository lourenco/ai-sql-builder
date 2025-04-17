import Highlight from 'react-highlight'
import './code-highlight.css'

const CodeHighlight = ({content}: {content: string}) => (
  <div className="h-55 overflow-y-auto">
    <Highlight className="sql">
      {content}
    </Highlight>
  </div>
)

export default CodeHighlight
