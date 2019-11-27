const React = require('react');
const AppLayout = require('../layouts/AppLayout.jsx');

import SyntaxHighlighter from 'react-syntax-highlighter';

class Show extends React.Component {
	render() {
		return (
			<AppLayout
				title={this.props.title}
				addNewLink="/challenges/new"
				addNewText="Add to the Library"
			>
				<div className="row">
					<div className="col">
						<hr />
						<a
							className="btn btn-success"
							href={`/challenges/edit/${this.props._id}`}
						>
							Edit
						</a>
						<button
							type="button"
							className="btn btn-danger"
							style={{ float: 'right' }}
						>
							Delete
						</button>
						<hr />
						<h3>Problem</h3>
						<p>{this.props.problem}</p>

						<h3>Solution</h3>
						<SyntaxHighlighter
							language="javascript"
							wrapLines={true}
							showLineNumbers={true}
						>
							{/* For loop to get each line inside the array of stings */}
							{this.props.solution}
						</SyntaxHighlighter>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h3>Author</h3>
						<p>{this.props.author}</p>
						<h3>Source</h3>
						<p>{this.props.source}</p>
					</div>
					<div className="col">
						<h3>Language</h3>
						<p>{this.props.language}</p>
						<h3>Tags</h3>
						<p>{this.props.tags}</p>
					</div>
				</div>
			</AppLayout>
		);
	}
}
module.exports = Show;