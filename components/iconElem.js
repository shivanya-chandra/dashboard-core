import home from "../public/home.svg";

export default function IconElem() {
	return (
		<div className="icon-main">
			<a href="/" className="icon__home icon">
				<img src="./home.svg" alt="" />
			</a>
			<a className="icon__settings icon">
				<img src="./settings.svg" alt="" />
			</a>
			<a href="/map" className="icon__maps icon">
				<img src="./map.svg" alt="" />
			</a>
			<a className="icon__burger icon">
				<img src="./menu.svg" alt="" />
			</a>
		</div>
	);
}
