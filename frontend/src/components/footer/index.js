import React from "react";
import './index.css'

export default () => {
return (
	<div className="container">
		<div className="row">
			<div className="col-md-3 offset-md-10">
				<a href="https://www.facebook.com/bootsnipp" className="text-success">
					<i id="social-fb" className="fa fa-facebook-square fa-3x social"></i>
				</a>
				<a href="https://twitter.com/bootsnipp" className="text-success">
					<i id="social-tw" className="fa fa-twitter-square fa-3x social"></i>
				</a>
				<a href="https://plus.google.com/+Bootsnipp-page" className="text-success">
					<i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i>
				</a>
				<a href="mailto:bootsnipp@gmail.com" className="text-success">
					<i id="social-em" className="fa fa-envelope-square fa-3x social"></i>
				</a>
			</div>
		</div>
	</div>
);
};

