<template>
<div class="Subscribe container">
  <div class="card">
    <div class="card-body">
      <div class="row no-gutters">
        <div class="col-12 mt-2">
          <label>Descripcion del proyecto</label>
          <textarea class="form-control"></textarea>
        </div>
        <div class="col-12 mt-2">
          <label>Lugar</label>
          <input class="form-control" />
        </div>
        <div class="col-12 mt-2">
          <label>Tipo de ayuda</label>
          <textarea class="form-control"></textarea>
        </div>
        <div class="col-12 mt-2">
          <label>Contacto</label>
          <textarea class="form-control"></textarea>
        </div>
        <div class="col-12 mt-2">
          <b-btn class="SendButton" variant="success"
                 size="lg">Enviar</b-btn>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  layout: 'app-guess',
  name: 'Subscribe',
  props: [],
  head () {
    return {
      title: 'Entrar en Incubadora - Subscripcion - Incubadora Itinerante',
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  fetch() {},
  data() {
    return {}
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {

  },
  components: {

  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Subscribe {}
	.SendButton{
		background-color:$color2;
	}
</style>
