<template>
	<div class="TwoSidesDiv">

		<div class="row justify-content-center m-0 p-0">
			<div class="col-lg-6 col-sm-12 left m-0 p-0">
				<slot name="left"></slot>
			</div>
			<div class="col-lg-6 col-sm-12 right m-0 p-0">
				<slot name="right"></slot>
			</div>
		</div>
    

	</div>
</template>
<script>
	export default {
		name: 'TwoSidesDiv',
		props:[],
		fetch(){

		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{

		},
		components:{

		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
	.left{
		background: transparent;
	}
	.right{
		background: $color1;
	}
	.left,.right{
		@media only screen and (min-height: 480px) {
	    	min-height: 300px;
	 	}
		@media only screen and (min-height: 768px) {
	    	min-height: 600px;
	 	}
	}

</style>