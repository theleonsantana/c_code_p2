const React = require('react');
const AppLayout = require('../layouts/AppLayout.jsx');

import SyntaxHighlighter from 'react-syntax-highlighter';

class Show extends React.Component {
	render() {
		return (
			<AppLayout
				title={this.props.title}
				addNewLink="/new"
				addNewText="Add to the Library"
			>
				<div className="row">
					<div className="col">
						<hr />
						<a className="btn btn-success" href={`/edit/${this.props._id}`}>
							Edit
						</a>
						<form action={`/${this.props._id}?_method=DELETE`} method="POST">
							<button
								type="submit"
								className="btn btn-danger"
								style={{ float: 'right', marginTop: '-38px' }}
							>
								Delete
							</button>
						</form>

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
