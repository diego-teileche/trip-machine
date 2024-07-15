import { useState } from "react"
import "./App.css"

let order = 0

function App() {
	const getBoxes = (type) => {
		const boxesData = []

		const boxes = [0, 1, 2].map((i) => {
			return [0, 1, 2].map((j) => {
				const key = `${i}-${j}`

				if (!(i === 1 && j > 0)) {
					if (type === "initial")
						return boxesData.push({ i, j, isClicked: false, order: null })

					return (
						<div
							key={key}
							className="box"
							style={{
								background:
									boxState?.find((item) => item.i === i && item.j === j)
										?.isClicked && "green",
							}}
							onClick={() => changeColor(i, j)}
						></div>
					)
				}

				return <div key={key}></div>
			})
		})

		if (type === "initial") return boxesData

		return boxes
	}

	const [boxState, setBoxState] = useState(getBoxes("initial"))

	const changeColor = (i, j) => {
		let temp = [...boxState]
		const selectedBox = temp.find((item) => item.i === i && item.j === j)
		selectedBox.isClicked = true
		selectedBox.order = ++order
		setBoxState(temp)
	}

	return (
		<div className="App">
			<div className="box-container">{getBoxes()}</div>
		</div>
	)
}

export default App
