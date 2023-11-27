import translateMixin from '~/mixins/translate'
import Content from '~/components/content'
import AText from '~/components/ui/atoms/text'
import AButton from '~/components/ui/atoms/buttons'
import AImg from '~/components/ui/atoms/img'
export default {
	mixins: [translateMixin],
	components: {
		Content, AText, AButton, AImg
	},
}
