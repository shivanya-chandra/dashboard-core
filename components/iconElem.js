import home from "../public/home.svg";

export default function IconElem() {
	return (
		<div className="icon-main">
			<span className="icon__home icon">
				<img src="./home.svg" alt="" />
			</span>
			<span className="icon__settings icon">
				<img src="./settings.svg" alt="" />
			</span>
			<span className="icon__maps icon">
				<img src="./map.svg" alt="" />
			</span>
			<span className="icon__burger icon">
				<img src="./menu.svg" alt="" />
			</span>
		</div>
	);
}
