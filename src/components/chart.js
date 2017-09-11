import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props)=> {
	return(
		<div>
		<Sparklines height={120} data={props.data}>
  		<SparklinesLine color={props.color}/>
  		<SparklinesReferenceLine type="mean"/>
		</Sparklines>
		<div>
		{props.current}
		</div>
		</div>
		);
}