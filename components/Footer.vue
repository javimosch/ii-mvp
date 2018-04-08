<template>
	<div class="Footer mt-5">
		<div class="FooterSocial row no-gutters justify-content-md-center">
			<div class="col-12 m-0 align-self-center">
					<a href="#" class="d-block text-center p-5">
						Contactanos atraves de facebook &nbsp;<i class="fab fa-facebook-square"></i>
					</a>
			</div>
		</div>
		<div class="FooterLogo">
			<img class="mx-auto d-block mt-0" :src="logo" />
		</div>
	</div>
</template>
<script>
import Logo from '@/assets/logo.png'
	export default {
		name: 'Footer',
		props:[],
		fetch(){

		},
		data(){
			return{
				logo:Logo
			}
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
img{
		max-width:100px;
	}
a{
	color:white;
}
a,a:hover{
	text-decoration: none;
}
a:hover{
	opacity: 0.8;
}
.FooterSocial{
	background: #314A5E;
	color:white;
}
.FooterLogo{
	background: #FFF7F0;
}
</style>