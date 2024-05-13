import { register } from 'swiper/element/bundle';
register();

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Eventos = () => {

	return (
		<section className='eventos'>
			<div className='container'>
				<div className='eventos__wrapper'>
					<div className='eventos__titulo'>
						<h2>Eventos</h2>
					</div>
					<div className='eventos__espaco1'>
						<h3>Espaço 1</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum enim quaerat quas temporibus neque quae, modi perferendis! Repellat, error.</p>
						<br />
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit distinctio fugiat veniam ut libero ab nemo corrupti odit dolor eligendi!</p>
						<br />
						<br />
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, id!</p>
					</div>

					<div className='eventos__imagem1'>
						<img className='img-grid' src='/evento-01.jpeg' alt='' />
					</div>
					<div className='eventos__imagem2'>
						<img className='img-grid' src='/evento-02.jpg' alt='' />
					</div>
					<div className='eventos__espaco2'>
						<h3>Espaço 2</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum enim quaerat quas temporibus neque quae, modi perferendis! Repellat, error.</p>
						<br />
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sed minus maiores ipsa? Consequatur hic voluptas odio repudiandae! Error libero quam, quae unde numquam nostrum quaerat
							quis quo deserunt nisi inventore commodi magni distinctio. Distinctio.
						</p>
					</div>
				</div>
				<div className='testimonials'>
					<Swiper slidesPerView={1} spaceBetween={20} loop={true} centeredSlides={true} navigation={true} modules={[Navigation]} className='testimonials__swiper'>
						<SwiperSlide>
							<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend.”</p>
							<span>Fulana da Silva</span>
						</SwiperSlide>
						<SwiperSlide>
							<p>
								“Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt esse, dicta non placeat odit maxime sint exercitationem natus cupiditate officia cum illum atque fuga asperiores
								nisi. Sint, architecto? Explicabo rem eum autem deserunt voluptates quas temporibus eaque veniam quisquam beatae..”
							</p>
							<span>Beltrana Soares</span>
						</SwiperSlide>
						<SwiperSlide>
							<p>
								“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cumque quo repellat ut vero iste accusantium numquam rem, suscipit iure, accusamus, soluta aliquam sequi ad?”
							</p>
							<span>Sicrana Albuquerque</span>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Eventos;
