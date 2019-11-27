const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class Index extends React.Component {
	render() {
		return (
			<AppLayout title="Code Challenges">
				<h2>Challenges Library</h2>
				<ul>
					{this.props.challenges.map((challenge, index) => {
						return (
							<li>
								<a href={`/challenges/${challenge.id}`}>{challenge.name}</a>
							</li>
						);
					})}
				</ul>
				<p>
					<a href="/challenges/new">Add to the library</a>
				</p>
			</AppLayout>
		);
	}
}
module.exports = Index;
