<!-- TEMPLATE -->

<template>
	<a href="#" @click="onClick">
		<div>
			{{ title }}
		</div>
	</a>
</template>

<!-- SCRIPT -->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ButtonPrimary',
	components: {},
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	methods: {
		onClick() {
			this.$emit('onClick');
		},
	},
});
</script>

<!-- STYLE -->

<style lang="stylus" scoped>
div {
	background-color: theme.colors.button.bg;
	color: theme.colors.button.fg;
}
</style>
