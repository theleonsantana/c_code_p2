const React = require('react');
const AppLayout = require('../layouts/AppLayout.jsx');

class Edit extends React.Component {
	render() {
		return (
			<AppLayout title="Edit Challenge">
				<form
					action={`/challenges/${this.props._id}?_method=put`}
					method="post"
				>
					<div className="row">
						<div className="col-6">
							<div class="form-group">
								<label>Title</label>
								<input
									type="text"
									className="form-control"
									value={this.props.title}
									name="title"
								/>
								{/* <small id="emailHelp" className="form-text text-muted">
									We'll never share your email with anyone else.
								</small> */}
							</div>
							<div class="form-group">
								<label>Author</label>
								<input
									type="text"
									className="form-control"
									value={this.props.author}
									name="author"
								/>
							</div>
							<div class="form-group">
								<label>Source</label>
								<input
									type="text"
									className="form-control"
									value={this.props.source}
									name="source"
								/>
							</div>
							<div class="form-group">
								<label>Language</label>
								<input
									type="text"
									className="form-control"
									value={this.props.language}
									name="language"
								/>
							</div>
						</div>
						<div className="col-6">
							<div class="form-group">
								<label>Problem</label>
								<textarea
									className="form-control"
									rows="3"
									value={this.props.problem}
									name="problem"
								></textarea>
							</div>
							<div class="form-group">
								<label>Solution</label>
								<textarea
									className="form-control"
									rows="5"
									value={this.props.solution}
									name="solution"
								></textarea>
							</div>
							<div class="form-group">
								<label>Tags</label>
								<input
									type="text"
									className="form-control"
									value={this.props.tags}
									name="tags"
								/>
							</div>
						</div>
						<button type="submit" class="btn btn-primary btn-lg btn-block">
							Update
						</button>
					</div>
				</form>
			</AppLayout>
		);
	}
}
module.exports = Edit;
