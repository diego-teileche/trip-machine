import "./App.css"

function App() {
	const getBoxes = () => {
		const boxes = [0, 1, 2].map((i) => {
			return [0, 1, 2].map((j) => {
				const key = `${i}-${j}`

				if (!(i === 1 && j > 0)) {
					return <div key={key} className="box"></div>
				}

				return <div key={key}></div>
			})
		})

		return boxes
	}

	return (
		<div className="App">
			<div className="box-container">{getBoxes()}</div>
		</div>
	)
}

export default App
