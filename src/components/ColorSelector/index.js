import React from 'react';
import {colorsData} from '../../data';
import { useSettings } from '../../setting-context';

const ColorSelector = () => {

	const {color, changeColor} = useSettings()


	return (
		<div className="items">
			{colorsData.map((colorItem, index) =>
				<div
					className= {color === index + 1 ? 'item active' : 'item'}
					key={colorItem.id}
					style={{ backgroundColor: colorItem.value}}
					onClick={() => { changeColor(colorItem.id) }}
					/>
			)}
		</div>
	);
}

export default ColorSelector;