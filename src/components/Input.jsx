import {useEffect, useRef, useState} from "react";

export default function Input({label, type = 'text', ...props}) {

	const inputRef = useRef()
	const [show, setShow] = useState(false)
	const [inputType, setType] = useState(type)

	useEffect(() => {
		if (show) {
			setType('text')
			inputRef.current.focus()
		} else if (type === 'password') {
			setType('password')
			inputRef.current.focus()
		}
	}, [show])

	return (
		<label className="relative dark:font-medium transition-all w-72 text-white dark:text-black flex bg-transparent border border-linear-default dark:border-primary-200 rounded-sm focus-within:border-primary-200 dark:focus-within:border-linear-200">
			<input ref={inputRef} required={true} type={inputType} className="px-2 bg-transparent outline-none text-xs w-full h-[38px] valid:pt-[10px] peer" {...props}/>
			<small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-linear-default dark:text-primary-200 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
			{type === 'password' && props?.value && (
				<button type="button" onClick={() => setShow(show => !show)} className="h-full flex items-center text-sm font-semibold pr-2">
					{show ? 'Hide' : 'Show'}
				</button>
			)}
		</label>
	)
}