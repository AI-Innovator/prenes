import React from "react";
import './index.css'

export default () => {
return (
	<div className="container" id="contact">
		<div className="row">
			<div className="col-md-3 offset-md-10">
				<a href="https://prenes.slack.com/team/U02LTKCF4TW" className="text-success">
					<i id="social-fb" className="fab fa-slack fa-3x social"></i>
				</a>
				<a href="https://discordapp.com/users/prenes#5716" className="text-success">
					<i id="social-fb" className="fab fa-discord fa-3x social"></i>
				</a>
				<a href="skype:live:.cid.12025921c037735c?chat" className="text-success">
					<i id="social-tw" className="fab fa-skype fa-3x social"></i>
				</a>
				<a href="mailto:prenes.contact@gmail.com" className="text-success">
					<i id="social-em" className="fa fa-envelope-square fa-3x social"></i>
				</a>
			</div>
		</div>
	</div>
);
};

