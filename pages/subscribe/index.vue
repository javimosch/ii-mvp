<template>
<div class="Subscribe container">
  <div class="card">
    <div class="card-body">
      <div class="row no-gutters">
        <div class="col-12 mt-2">
          <label>Contanos sobre tu proyecto!</label>
          <textarea v-model="description"
          placeholder="Nombre, descripcion, etapa de desarrollo, ..." 
                    class="form-control"></textarea>
        </div>
        <div class="col-12 mt-2">
          <label>Lugar</label>
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
          <label>Contacto</label>
          <textarea v-model="contactText"
          placeholder="Tu email, whatsapp o otra forma conveniente para comunicarnos." 
                    class="form-control"></textarea>
        </div>
        <div class="col-12 mt-2">
          <b-btn @click="Send"
                 class="SendButton"
                 variant="success"
                 size="lg">Enviar</b-btn>
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
  layout: 'app-guess',
  name: 'Subscribe',
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
    getAddressData: function(addressData, placeResultData, id) {
      this.address = addressData
    },
    async Send() {
      try {
        let d = await call('saveRecord', Object.assign({}, this.$data, {
          model: 'project'
        }))
        console.info(d)

        this.$noty.info('Thanks!')

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

.SendButton {
  background-color: $color2;
}
</style>
