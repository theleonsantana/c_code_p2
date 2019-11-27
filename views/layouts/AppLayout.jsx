const React = require('react');

class AppLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width" />
					<title>{this.props.title}</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css"
						integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt"
						crossorigin="anonymous"
					/>
					<script
						src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/js/bootstrap.min.js"
						integrity="sha384-3qaqj0lc6sV/qpzrc1N5DC6i1VRn/HyX4qdPaiEFbn54VjQBEU341pvjz7Dv3n6P"
						crossorigin="anonymous"
					></script>
					<link rel="stylesheet" href="/css/style.css" type="text/css" />
				</head>
				<body>
					<div className="container">
						<header>
							<h1>{this.props.title}</h1>
							{/* contional to render nav based on the url ? */}
							<nav className="nav">
								<a className="nav-link active" href="/">
									Home
								</a>
								<a
									className="nav-link"
									href="nav-link"
									href={this.props.addNewLink}
								>
									{this.props.addNewText}
								</a>
							</nav>
						</header>
						<main>
							<div className="container">{this.props.children}</div>
						</main>
					</div>
					<script
						src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
						integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
						crossorigin="anonymous"
					></script>
					<script
						src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
						integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
						crossorigin="anonymous"
					></script>
				</body>
			</html>
		);
	}
}
module.exports = AppLayout;
