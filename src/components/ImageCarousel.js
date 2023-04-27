import React from 'react';
import './image.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px',
	height: '200px'
  };
  
function ImageCarousel() {
  return (
	<div style={styles}>
		<h1 style={{textAlign:"center"}}>Image-Carousel</h1>
		<Carousel>
			<div>
				<img src="https://www.unigreet.com/wp-content/uploads/2022/09/beautiful-flowers-images-for-dp.jpg" alt="Flower" />
				<p className="legend">Flower</p>
			</div>
			<div>
				<img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="Flower"/>
				<p className="legend">Flower</p>
			</div>
			<div>
				<img src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg" alt="Flower"/>
				<p className="legend">Flower</p>
			</div>
			<div>
				<img src="https://www.all-my-favourite-flower-names.com/images/x800px-Amaryllis_hippeastrum_-_Candy_floss.jpg.pagespeed.ic.mM0duZk0tZ.jpg" alt="Flower"/>
				<p className="legend">Flower</p>
			</div>
			<div>
				<img src="https://www.thespruce.com/thmb/bvFDsEdQAyk3HViBBf-lstHYpV0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-flowers-for-late-spring-1402253-hero-e167f0685dc14981a77d8842993961e2.jpg" alt="Flower"/>
				<p className="legend">Flower</p>
			</div>
			<div>
				<img src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/wedding-party-true-love-hellebore-purple-flower-shade-flower-proven-winners_14997.jpg" alt="Flower"/>
				<p className="legend">Flower</p>
			</div>
		</Carousel>
	</div>
  );
}

export default ImageCarousel;