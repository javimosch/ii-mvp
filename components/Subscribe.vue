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
import { call } from '@/plugins/rpcApi';
export default {
  name: 'Subscribe',
  props: [],
  fetch() {},
  data() {
    return {
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
        // let d = await call('saveRecord', Object.assign({}, this.$data, {
        // model: 'project'
        // }))
        // console.info(d)

        this.$noty.info('Muchisimas gracias, nos pondremos en contacto contigo los mas pronto posible!', {
          killer: true,
          timeout: null,
          layout: 'bottomLeft'
        })
        return
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
  created() {},
  mounted() {}
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
