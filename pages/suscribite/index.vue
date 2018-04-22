<template>
<div class="SubscribePage container">
    <Subscribe></Subscribe>
    <Section title="" :inverted="true" data-rellax-speed="-1.5" class="Recursos Parallax mt-5" :css="'background-color:white;'">
      <img class="SectionImage img-fluid" :src="OurResourcesImage"/>
    </Section>

    <Section title="" :inverted="true" class="ParallaxBlock mt-5 mb-5 d-none d-md-block" :css="'background-color:transparent;'">
    </Section>

</div>

</template>

<script>
import { startParallax } from '@/plugins/parallax';
import Subscribe from '@/components/Subscribe';
import Section from '@/components/Section';
import OurResourcesImage from '@/assets/our_resources.png'
export default {
  layout: 'app-guess',
  name: 'SubscribePage',
  props: [],
  head() {
    return {
      title: 'Entrar en Incubadora - Subscripcion - Incubadora Itinerante',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  fetch() {},
  data() {
    return {
      OurResourcesImage,
      description: '',
      address: '',
      contactText: '',
      helpDescription: ''
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
    
  },
  components: {
    Subscribe,
    Section
  },
  created() {},
  mounted() {
    startParallax('.Parallax')
  }
}

</script>

<style lang="scss" scoped="">
.Recursos{
  position: relative;
  
  @media only screen and (min-width: 992px) {
    top:50px;
  }
}
.ParallaxBlock{
  
  @media only screen and (min-width: 992px) {
    height: 200px;
  }
}
.SubscribePage {}
.SectionImage{
  
  margin:0 auto;
  display:block;
}
</style>
