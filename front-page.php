<?php get_header(); ?>

<section class="stock">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="stock__top">
					<h2 class="stock__top--title">Акции и скидки</h2>
					<a href="" class="stock__top--btn btn btn-primary">Все акции и скидки <img src="img/right-arrow.svg" alt="" class="stock__top--btn-arrow"></a>
				</div>
			</div>
		</div>
		<div class="stock__items">
		<?php 
				// параметры по умолчанию
				$posts = get_posts( array(
					'numberposts' => -1,
					'orderby'     => 'date',
					'order'       => 'DESC',
					'post_type'   => 'stock',
					'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
				) );

				$lengthStock = count($posts);
				$countPosts = 0;

				for ($i = 0; $i <  ceil($lengthStock / 2); $i++) {?>
					<div class="row stock__items--row">
						<? 
						$stockItem = $lengthStock === ($countPosts + 1) && $lengthStock % 2 !== 0 ? 1 : 2;

						for ($k = 0; $k < $stockItem; $k++) { 
							$post = $posts[$countPosts];
							setup_postdata($post);
							$countPosts++;?>
							<?if($k === 0) {?>
								<div class="col-md-12 col-lg-5 col-xl-5">
									<a href="<?php the_permalink(); ?>" class="stock__item">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/img/stock-1.png" alt="" class="stock__item--img">
										<div class="stock__item--content">
											<p class="stock__item--action">Акция</p>
											<h3 class="stock__item--title"><?php the_title(); ?></h3>
											<p class="stock__item--old-price"><? echo get_field( "old_price" ); ?> руб</p>
											<p class="stock__item--new-price"><? echo get_field( "new_price" ); ?> <span class="stock__item--price-text">руб</span></p>
										</div>
									</a>
								</div>
							<?} elseif($k === 1) {?>
								<div class="col-md-12 col-lg-7 col-xl-7">
									<a href="<?php the_permalink(); ?>" class="stock__item">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/img/stock-2.png" alt="" class="stock__item--img">
										<div class="stock__item--content">
											<p class="stock__item--action">Акция</p>
											<h3 class="stock__item--title"><?php the_title(); ?></h3>
											<p class="stock__item--old-price"><? echo get_field( "old_price" ); ?> руб</p>
											<p class="stock__item--new-price"><? echo get_field( "new_price" ); ?> <span class="stock__item--price-text">руб</span></p>
										</div>
									</a>
								</div>
							<?}
						}?>
						</div>
					<?} wp_reset_postdata(); // сброс?>
		</div>
	</div>	
</section>

<?php
get_footer();