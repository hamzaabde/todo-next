"use client"
import { useState } from "react"

export default function Home() {
	const [input, setInput] = useState("")
	const [todos, setTodos] = useState<string[]>([])

	return (
		<div className="">
			<form
				onSubmit={(e) => {
					e.preventDefault()

					setTodos([...todos, input])
					setInput("")
				}}
			>
				<input
					className="border border-gray-300 rounded p-2"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>

			<button
				className="block self-stretch w-full py-4 hover:bg-red-50 my-2 cursor-pointer font-semibold text-lg"
				onClick={() => {
					setTodos([])
				}}
			>
				clear all
			</button>

			<div className="flex flex-col gap-2">
				{todos.map((todo, index) => (
					<div
						key={index}
						className="flex flex-row justify-between items-center hover:bg-slate-50 p-2 rounded"
					>
						<span className="font-semibold ">{todo}</span>
						<button
							onClick={(e) => {
								const newTodos = [...todos]
								newTodos.splice(index, 1)
								setTodos(newTodos)
							}}
							className="bg-rose-50 text-white rounded p-1 hover:scale-110"
						>
							🥱
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
