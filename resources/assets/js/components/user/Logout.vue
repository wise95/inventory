<template>

</template>


<script>
import axios from 'axios'

export default {


created(){
    this.$store.dispatch('action_logout')
}

}

</script>