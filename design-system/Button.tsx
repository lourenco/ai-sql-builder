import clsx from 'clsx'
import {ButtonHTMLAttributes} from 'react'

const Button = ({children, className = '', ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={clsx('p-2 text-sm bg-neutral-50 font-semibold text-black rounded-sm hover:bg-neutral-200 cursor-pointer disabled:opacity-50 disabled:cursor-default', className)}
			{...props}
		>
			{children}
		</button>
	)
}


export default Button
