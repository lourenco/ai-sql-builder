import clsx from 'clsx'

const Feedback = ({title, description, className, colorScheme = 'default'}: Props) => {
  const classNameBox = clsx(
    'max-w-lg mx-auto mt-4 p-6 rounded-2xl border border-zinc-700 shadow-lg flex items-start gap-3',
    colorScheme === 'default' && 'bg-zinc-900 text-zinc-100',
    colorScheme === 'danger' && 'bg-red-900 text-red-100',
    className
  )

  const classNameText = clsx(
    'text-sm',
    colorScheme === 'default' && 'text-zinc-300',
    colorScheme === 'danger' && 'text-red-300'
  )

  return (
    <div className={classNameBox}>
      <div>
        <h5 className="font-semibold">{title}</h5>
        <p className={classNameText}>{description}</p>
      </div>
    </div>
  )
}

interface Props {
	title: string
	description: string
	colorScheme?: string
	className?: string
}

export default Feedback
