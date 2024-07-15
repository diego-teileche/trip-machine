import { useState } from "react"
import "./App.css"
import { useEffect } from "react"

let order = 0
let isAllClicked = false

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

	useEffect(() => {
		if (boxState.some((box) => !box.isClicked)) {
			isAllClicked = false
		} else {
			isAllClicked = true
		}

		if (isAllClicked) {
			boxState.forEach((item, index) => {
				return setTimeout(() => {
					let tempBox = [...boxState]
					tempBox[index].isClicked = false
					setBoxState(tempBox)
				}, 1000 * (index + 1))
			})
		}
	}, [boxState])

	const changeColor = (i, j) => {
		let temp = [...boxState]
		const selectedBox = temp.find((item) => item.i === i && item.j === j)
		selectedBox.isClicked = true
		selectedBox.order = ++order
		temp.sort((a, b) => (a.order > b.order ? 1 : -1))
		setBoxState(temp)
	}

	return (
		<div className="App">
			<div className="box-container">{getBoxes()}</div>
		</div>
	)
}

export default App
