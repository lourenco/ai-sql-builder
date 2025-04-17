import clsx from 'clsx'
import {TextareaHTMLAttributes} from 'react'

const TextArea = ({className = '', ...props}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className={clsx('w-full resize-none border border-neutral-700 outline-none rounded-xl text-base placeholder-neutral-400 py-4 px-6', className)}
    ></textarea>
  )
}


export default TextArea
