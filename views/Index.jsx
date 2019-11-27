const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');
// Code Lib
import SyntaxHighlighter from 'react-syntax-highlighter';

class Index extends React.Component {
	// constructor() {
	// 	super();
	// 	const initialCodeString = `function createChildren(style, useInlineStyles) {
	//   let childrenCount = 0;
	//   return children => {
	//     childrenCount += 1;
	//     return children.map((child, i) => createElement({
	//       node: child,
	//       style,
	//       useInlineStyles,
	//       key:\`code-segment-$\{childrenCount}-$\{i}\`
	//     }));
	//   }
	// }`;
	// 	this.state = {
	// 		code: initialCodeString,
	// 	};
	// }
	render() {
		return (
			<AppLayout
				title="Code Challenges"
				addNewLink="/challenges/new"
				addNewText="Add to the Library"
			>
				<h2>JavaScript Library</h2>
				<div className="row row-cols-1 row-cols-md-2">
					{this.props.challenges.map((challenge, index) => {
						return (
							<div className="col-4 mb-4">
								<div className="card">
									<div className="card-header">
										<b>{challenge.title}</b>
									</div>
									{/* code snippet */}
									<SyntaxHighlighter
										language="javascript"
										wrapLines={true}
										showLineNumbers={true}
									>
										{/* For loop to get each line inside the array of stings */}
										{challenge.solution}
									</SyntaxHighlighter>
									<div className="card-body">
										<h6>
											<b>Author: </b>
											{challenge.author}
										</h6>
										<h6>
											<b>Source: </b>
											{challenge.source}
										</h6>
										<h6>
											<b>Language: </b>
											{challenge.language}
										</h6>
										<hr />
										<h5>Problem:</h5>
										<p className="card-text">{challenge.problem}</p>
										<hr />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</AppLayout>
		);
	}
}
module.exports = Index;
