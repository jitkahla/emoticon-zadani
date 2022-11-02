import React from 'react';
import { useSettings } from '../../setting-context'
import {eyesData} from '../../data';

const EyesSelector = () => {

	const {eyes, changeEyes} = useSettings();

	return (
		<div className="items">
			{eyesData.map((eyesItem, index) =>
				<img
					className= {eyes === index+1 ? 'item active' : 'item'}
					key={eyesItem.id}
					src={eyesItem.image}
					onClick={() => { changeEyes(eyesItem.id) }}
					/>
			)}
		</div>
	);
}

export default EyesSelector;