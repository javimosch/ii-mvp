<template>
<div class="Subscribe container">
  <div class="row">
    <div class="col-12 col-lg-7 IntroBlock align-self-center">
      <p class="IntroText p-3">Si tienes un proyecto de emprendimiento, si estas empezando tu negocio o tu asociación, si tienes una startup y necesitas estar aconsejado, estas en la buena pagina ! Trabajamos en el acompañamiento de startups y te vamos a visitar en donde te encuentres para ayudarte con tu proyecto. No dudes en ponerte en contacto con nosotros !</p>
    </div>
    <div class="col-12 col-lg-5">
      <div class="card">
        <div class="card-body">
          <div class="row no-gutters">
            <div class="col-12 mt-2">
              <label>Contanos sobre tu proyecto! (*)</label>
              <textarea v-model="description"
                        placeholder="Nombre, descripcion, etapa de desarrollo, ..."
                        class="form-control"></textarea>
            </div>
            <div class="col-12 mt-2">
              <label>Lugar (*)</label>
              <no-ssr>
                <VueGoogleAutocomplete ref="addressCmp"
                                       id="map"
                                       classname="form-control"
                                       placeholder="Donde te encuentras"
                                       v-on:placechanged="getAddressData">
                </VueGoogleAutocomplete>
              </no-ssr>
            </div>
            <div class="col-12 mt-2">
              <label>Tipo de ayuda</label>
              <textarea v-model="helpDescription"
                        placeholder="Ya tenes una idea de como te gustaria que te ayudemos?"
                        class="form-control"></textarea>
            </div>
            <div class="col-12 mt-2">
              <label>Duración</label>
              <textarea v-model="helpDuration"
                        placeholder="Ya tenes una idea de como te gustaria que te ayudemos?"
                        class="form-control"></textarea>
            </div>
            <div class="col-12 mt-2">
              <label>Contacto (*)</label>
              <textarea v-model="contactText"
                        placeholder="Tu email, whatsapp o otra forma conveniente para comunicarnos."
                        class="form-control"></textarea>
            </div>
            <div class="col-12 mt-2">
              <b-btn :disabled="!canSend"
                     @click="Send"
                     class="SendButton"
                     variant="success"
                     size="lg">Enviar</b-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import NoSSR from 'vue-no-ssr';
import { call, wrapkendCall } from '@/plugins/rpcApi';

export default {
  name: 'Subscribe',
  props: [],
  fetch() {},
  data() {
    return {
      description: '',
      address: '',
      contactText: '',
      helpDescription: '',
      helpDuration:''
    }
  },
  async asyncData() {
    return {}
  },
  computed: {
    canSend() {
      return this.description && this.address && this.contactText
    }
  },
  methods: {

    getAddressData: function(addressData, placeResultData, id) {
      this.address = addressData
    },
    async Send() {
      try {

        window.analytics.track("ProjectSubscribed", this.$data);

        let r = await call('saveRecord',Object.assign({},this.$data,{
          model:'project'
        }))

        this.$noty.info('Muchisimas gracias, nos pondremos en contacto contigo los mas pronto posible!', {
          killer: true,
          timeout: null,
          layout: 'bottomLeft'
        })
        
        console.info(r)

        var self = this
        Object.keys(self.$data).forEach(k => {
          self.$data[k] = ''
        })
        this.$refs.addressCmp.clear()

      } catch (err) {
        console.warn(err)
        return this.$noty.warning('Try later')
      }
    }
  },
  components: {
    'no-ssr': NoSSR
  },
  created() {
      if(process.server){
        return;
      }
         !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
      analytics.load("QcKPB5Ii4dz94EQ9YtzJaO5oHE33PcF6");
      analytics.page();
      }}();
  },
  mounted() {

      try{
        call('wakeup-heroku',{}) // to take up heroku
      }catch(err){}

  }
}

</script>

<style lang="scss" scoped="">
.Subscribe {}
.IntroText{
  font-family: $font1;
  color:$color6;
  background-color:$color1;
  text-align:justify;
  border-radius: 20px;
}
.IntroBlock{
  
}
.card {
  border-radius: 20px;
  max-width: 500px;
  @media only screen and (min-width: 992px) {
    float:right;
  }
}

.SendButton {
  background-color: $color3;
  border-color: $color3;
  color: $color1;
}

.SendButton:hover {
  background-color: $color2;
  border-color: $color2;
  color: $color6;
}
</style>
