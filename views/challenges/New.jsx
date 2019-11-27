const React = require('react');
const AppLayout = require('../layouts/AppLayout.jsx');

class New extends React.Component {
	render() {
		return (
			<AppLayout title="Add New Challenge">
				<form action={`/`} method="post">
					<div className="row">
						<div className="col-6">
							<div class="form-group">
								<label>Title</label>
								<input type="text" className="form-control" name="title" />
								{/* <small id="emailHelp" className="form-text text-muted">
									We'll never share your email with anyone else.
								</small> */}
							</div>
							<div class="form-group">
								<label>Author</label>
								<input type="text" className="form-control" name="author" />
							</div>
							<div class="form-group">
								<label>Source</label>
								<input type="text" className="form-control" name="source" />
							</div>
							<div class="form-group">
								<label>Language</label>
								<input type="text" className="form-control" name="language" />
							</div>
						</div>
						<div className="col-6">
							<div class="form-group">
								<label>Problem</label>
								<textarea
									className="form-control"
									rows="3"
									name="problem"
								></textarea>
							</div>
							<div class="form-group">
								<label>Solution</label>
								<textarea
									className="form-control"
									rows="5"
									name="solution"
								></textarea>
							</div>
							<div class="form-group">
								<label>Tags</label>
								<input type="text" className="form-control" name="tags" />
							</div>
						</div>
						<button type="submit" class="btn btn-primary btn-lg btn-block">
							Create New
						</button>
					</div>
				</form>
			</AppLayout>
		);
	}
}
module.exports = New;
