import React from "react";

const Quote = (props) => (
	<div>
		<p>{props.quote.quoteToday}</p>
		<p>{props.quote.quoteAuthor}</p>
	</div>
	)

export default Quote;