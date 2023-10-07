<template>
	<div class="style-10">
		<div class="style-11">
			<ul class="style-12">
				<li class="style-13">
					<a no-prefetch="" href="#" class="style-14">
						<AImg
							src="https://api-new.slototop.ua/public/downloads/60b0d9a7d86ff-617fc0895ee8b.png"
							:attributes="imgSettings.DC"
						/>
					</a>
				</li>
				<li class="style-13">
					<a no-prefetch="" href="#" class="style-14">
						<AImg
							src="https://api-new.slototop.ua/public/downloads/60b0d9a7d86ff-617fc0895ee8b.png"
							:attributes="imgSettings.DC"
						/>
					</a>
				</li>
				<li class="style-13">
					<a no-prefetch="" href="#" class="style-14">
						<AImg
							src="https://api-new.slototop.ua/public/downloads/60b0d9a7d86ff-617fc0895ee8b.png"
							:attributes="imgSettings.DC"
						/>
					</a>
				</li>
				<li class="style-13">
					<a no-prefetch="" href="#" class="style-14">
						<AImg
							src="https://api-new.slototop.ua/public/downloads/60b0d9a7d86ff-617fc0895ee8b.png"
							:attributes="imgSettings.DC"
						/>
					</a>
				</li>
				<li class="style-13">
					<a no-prefetch="" href="#" class="style-14">
						<AImg
							src="https://api-new.slototop.ua/public/downloads/60b0d9a7d86ff-617fc0895ee8b.png"
							:attributes="imgSettings.DC"
						/>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import AImg from '~/components/ui/atoms/img'
export default {
	name: 'app-partners',
	components: { AImg },
	data: () => {
		return {
			imgSettings: {
				DC: { width: '85px', height: '40px', class: 'object_fit_cover custom_class' },
				TABLET: {},
				MOB: {}
			}
		}
	}
}
</script>
<style scoped>
.style-10 {
	box-sizing: border-box;
	padding-top: 35px;
	padding-bottom: 39px;
}
.style-11 {
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
	max-width: 1230px;
	box-sizing: border-box;
}

.style-12 {
	margin-top: 0px;
	margin-bottom: 0px;
	padding-left: 0px;
	list-style: outside none none;
	box-sizing: border-box;
	padding: 0px;
	display: flex;
	flex-wrap: wrap;
}

.style-13 {
	box-sizing: border-box;
	margin-left: 25px;
	margin-right: 25px;
}

.style-14 {
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: underline solid rgb(63, 125, 246);
	color: rgb(63, 125, 246);
	box-sizing: border-box;
}

.style-15 {
	max-width: 100%;
	height: auto;
	vertical-align: top;
	box-sizing: border-box;
}

.style-16 {
	box-sizing: border-box;
	margin-left: 25px;
	margin-right: 25px;
}
</style>
