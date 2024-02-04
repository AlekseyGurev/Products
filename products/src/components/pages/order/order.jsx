import styles from './order.module.css';
import Title, { TitleSize } from '../../ui/title/title';
import Button from '/src/components/ui/button/button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Order = ({ products }) => {
	console.log(products);
	return (
		<form className={styles.mainContainer}>
			<div className={styles.leftContainer}>
				<section className={styles.products}>
					<Title size={TitleSize.EXTRA_SMALL}>Выберете продукты</Title>
					чекбокс со списком
				</section>
				<section className={styles.order}>
					<Title size={TitleSize.EXTRA_SMALL}>Сделать заказ</Title>
					<input
						className={styles.orderAddress}
						placeholder="введите адрес доставки"
					/>
					<span className={styles.orderPriceTitle}>Цена</span>
					<span className={styles.orderPrice}>400</span>
					<Button type="button">Купить</Button>
				</section>
			</div>
			<Swiper className={styles.swiper} slidesPerView={1}>
				{products.map((product) => (
					<SwiperSlide key={product.id} className={styles.swiperSlide}>
						<div className={styles.containerProduct}>
							<img className={styles.imageProduct} src={product.image} />
							<Title size={TitleSize.EXTRA_SMALL}>{product.name}</Title>
							<p>
								{product.price} руб. / {product.weight} гр.
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</form>
	);
};
