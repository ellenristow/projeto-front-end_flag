import { register } from 'swiper/element/bundle';
register();

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
	return (
		<section className='hero'>
			<div>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					loop={true}
					autoplay={{
						delay: 4500,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					speed={500}
					modules={[Autoplay, Pagination]}
					className='hero__image'
				>
					{' '}
					<SwiperSlide>
						<img className='img-fluid' src='/foto-slider1.jpeg' alt='slide1' />
					</SwiperSlide>
					<SwiperSlide>
						<img className='img-fluid' src='/fotos-slider2.jpeg' alt='slide2' />
					</SwiperSlide>
					<SwiperSlide>
						<img className='img-fluid' src='/fotos-slider3.jpeg' alt='slide3' />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='container'>
				<div className='hero__text'></div>
				<h1>Lorem ipsum</h1>
				<h2>consectetur adipisicing </h2>
			</div>
		</section>
	);
};

export default Hero;

