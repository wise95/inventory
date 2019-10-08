<template>

  <select  name="days">
   
  </select>

</template>

<script>

export default {
 name:"select2box",
 data () {
  return {
    options :[
    { id: "sun", text: 'Sunday' },
    { id: "mon", text: 'Monday' },
    { id: "tue", text: 'Tuesday' },
    { id: "wed", text: 'Wednesday' },
    { id: "thu", text: 'Thursday' },
    { id: "fri", text: 'Friday' },
    { id: "sat", text: 'Saturday' },

    ],
    value: "mon"
  }


},

mounted: function () {
  var vm = this
  $(this.$el)
      // init select2
      .select2({ data: this.options })
      .val(this.value)
      .trigger('change')
      // emit event on change.
      .on('change', function () {
        //vm.$emit('input', this.value)
        alert(this.value)
      })
    },


  }

  </script>