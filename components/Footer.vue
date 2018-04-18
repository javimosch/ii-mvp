<template>
	<div class="Footer mt-5">
		<div class="FooterSocial row no-gutters justify-content-md-center">
			<div class="col-12 m-0 align-self-center">
					<a href="https://www.facebook.com/incubadoraitinerante/" target="_blank" class="d-block text-center p-5">
						Contactanos atraves de facebook &nbsp;<i class="fab fa-facebook-square"></i>
					</a>
			</div>
		</div>
		<div class="FooterBottom">
			<p class="m-0 p-3 pr-md-5 text-center text-md-right">Incubadora Itinerante © <a href="https://www.misitioba.com" target="_blank">MisitioBA</a> / 2018</p>
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
	color:$color1;
}
a,a:hover{
	text-decoration: none;
}
a:hover{
	opacity: 0.5;
}
.FooterSocial{
	background-color:$color1;
	color:white;
}
.FooterSocial a{
	color:white;
}
.FooterBottom{
	background: #FFFFFF;

}
.FooterBottom p {
	font-size:14px;
}
</style>