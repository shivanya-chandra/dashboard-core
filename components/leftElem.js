export default function LeftElements() {
	return (
		<div className="leftElements">
			<span className="leftElements__time">4:20pm</span>
			<span className="leftElements__auto">Auto</span>
			<span className="leftElements__battery box">69% Battery</span>
			<span className="leftElements__speed box">100km/hr</span>
			<iframe className='map'
				src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56071.83802276225!2d77.3176630599809!3d28.555048975843174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stesla%20supercharger!5e0!3m2!1sen!2sin!4v1629058876308!5m2!1sen!2sin"
				// width="600"
				style={{ height: "200" }}
				// style="border:0;"
				allowfullscreen=""
				loading="lazy"></iframe>
			<span className="leftElements__maps box-2">Head south west <br/> ETA: 29.78</span>
		</div>
	);
}
