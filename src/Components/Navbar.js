import { Outlet, Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="NavBar">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/AboutUs">About Us</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}

export default NavBar;
