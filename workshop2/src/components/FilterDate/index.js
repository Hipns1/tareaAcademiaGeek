import { InputDate, SelectContainer } from "../../styles/styles"

export function FilterDate() {
	const date = ['Mon, Mar 21', 'Mon, Mar 21', 'Mon, Mar 21', 'Mon, Mar 21', 'Mon, Mar 21']

	return (
		<SelectContainer >
			<InputDate >
				<input className="Iselect" id="tag" type='radio' name='tag'/>
				<label htmlFor="tag">All data</label>
			</InputDate>
			{date.map((item, index) => (
				<InputDate key={index}>
					<input className="Iselect" type='radio' id={index} name='tag' value={item} />
					<label htmlFor={index}>{item}</label>
				</InputDate>
			))}
		</SelectContainer>
	)
}
