<template>
	<footer class="footer">
		<FooterTop />
		<FooterPartners />
		<FooterDescription />
		<FooterText />
		<a href="#top" class="style-41">▲</a>
		<!---->
	</footer>
</template>
<script>
import AText from '~/components/ui/atoms/text'
import FooterDescription from './footer-description'
import FooterText from './footer-text'
import FooterPartners from './partners'
import FooterTop from './top'
export default {
	name: 'dev-footer',
	components: { AText, FooterText, FooterDescription, FooterPartners, FooterTop }
}
</script>
<style scoped>
.footer {
	background: var(--cucuta);
}

.style-1 {
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
	max-width: 1230px;
	box-sizing: border-box;
}

.style-2 {
	box-sizing: border-box;
	padding-top: 43px;
	display: flex;
	flex-wrap: wrap;
}

.style-3 {
	padding: 2px 16px 4px;
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: none solid rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	box-sizing: border-box;
	font-size: 15px;
	line-height: 18px;
	font-weight: 500;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	margin-right: 4px;
	margin-bottom: 12px;
}

.style-4 {
	padding: 2px 16px 4px;
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: none solid rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	box-sizing: border-box;
	font-size: 15px;
	line-height: 18px;
	font-weight: 500;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	margin-right: 4px;
	margin-bottom: 12px;
}

.style-5 {
	padding: 2px 16px 4px;
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: none solid rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	box-sizing: border-box;
	font-size: 15px;
	line-height: 18px;
	font-weight: 500;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	margin-right: 4px;
	margin-bottom: 12px;
}

.style-6 {
	padding: 2px 16px 4px;
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: none solid rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	box-sizing: border-box;
	font-size: 15px;
	line-height: 18px;
	font-weight: 500;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	margin-right: 4px;
	margin-bottom: 12px;
}

.style-7 {
	padding: 2px 16px 4px;
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: none solid rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	box-sizing: border-box;
	font-size: 15px;
	line-height: 18px;
	font-weight: 500;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	margin-right: 4px;
	margin-bottom: 12px;
}

.style-8 {
	padding: 2px 16px 4px;
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: none solid rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	box-sizing: border-box;
	font-size: 15px;
	line-height: 18px;
	font-weight: 500;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	margin-right: 4px;
	margin-bottom: 12px;
}

.style-9 {
	padding: 2px 16px 4px;
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: none solid rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	box-sizing: border-box;
	font-size: 15px;
	line-height: 18px;
	font-weight: 500;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	margin-right: 4px;
	margin-bottom: 12px;
}

.style-17 {
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: underline solid rgb(63, 125, 246);
	color: rgb(63, 125, 246);
	box-sizing: border-box;
}

.style-18 {
	max-width: 100%;
	height: auto;
	vertical-align: top;
	box-sizing: border-box;
}

.style-19 {
	box-sizing: border-box;
	margin-left: 25px;
	margin-right: 25px;
}

.style-20 {
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: underline solid rgb(63, 125, 246);
	color: rgb(63, 125, 246);
	box-sizing: border-box;
}

.style-21 {
	max-width: 100%;
	height: auto;
	vertical-align: top;
	box-sizing: border-box;
}

.style-22 {
	box-sizing: border-box;
	margin-left: 25px;
	margin-right: 25px;
}

.style-23 {
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: underline solid rgb(63, 125, 246);
	color: rgb(63, 125, 246);
	box-sizing: border-box;
}

.style-24 {
	max-width: 100%;
	height: auto;
	vertical-align: top;
	box-sizing: border-box;
}

.style-25 {
	box-sizing: border-box;
	margin-left: 25px;
	margin-right: 25px;
}

.style-26 {
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: underline solid rgb(63, 125, 246);
	color: rgb(63, 125, 246);
	box-sizing: border-box;
}

.style-27 {
	max-width: 100%;
	height: auto;
	vertical-align: top;
	box-sizing: border-box;
}

.style-28 {
	box-sizing: border-box;
	margin-left: 25px;
	margin-right: 25px;
}

.style-29 {
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: underline solid rgb(63, 125, 246);
	color: rgb(63, 125, 246);
	box-sizing: border-box;
}

.style-30 {
	max-width: 100%;
	height: auto;
	vertical-align: top;
	box-sizing: border-box;
}

.style-31 {
	box-sizing: border-box;
	margin-left: 25px;
	margin-right: 25px;
}

.style-32 {
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: underline solid rgb(63, 125, 246);
	color: rgb(63, 125, 246);
	box-sizing: border-box;
}

.style-33 {
	max-width: 100%;
	height: auto;
	vertical-align: top;
	box-sizing: border-box;
}

.style-34 {
	padding-top: 40px;
	padding-bottom: 40px;
	text-align: left;
	box-sizing: border-box;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	font-size: 14px;
	color: rgba(255, 255, 255, 0.5);
}

.style-35 {
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
	max-width: 1230px;
	box-sizing: border-box;
}

.style-36 {
	margin-top: 0px;
	margin-bottom: 0px;
	box-sizing: border-box;
}

.style-37 {
	box-sizing: border-box;
}

.style-38 {
	box-sizing: border-box;
}

.style-39 {
	box-sizing: border-box;
}

.style-40 {
	box-sizing: border-box;
}

.style-41 {
	transition: all 0.27s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	text-decoration: none solid rgb(63, 125, 246);
	color: rgb(63, 125, 246);
	box-sizing: border-box;
	width: 50px;
	height: 50px;
	background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
	border: 3px solid rgb(63, 125, 246);
	position: fixed;
	right: 0px;
	bottom: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	z-index: 5;
}
</style>
