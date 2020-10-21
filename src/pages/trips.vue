<template>
	<div class="w-48">
		<the-button
			text="Hey"
			type="button"
			iconClass="sign-out-alt"
			@click="say('Heeey!')"
		>
		</the-button>
	</div>
</template>

<script>
	export default {
		setup() {
			function say(words) {
				alert(words);
			}

			return { say };
		},
	};
</script>
