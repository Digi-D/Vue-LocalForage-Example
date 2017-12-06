<template>
  <h1>LocalForage Example</h1>

</template>


<script>
export default {
  data () {
    return {

    }
  },
  mounted: function(){

    // Look at https://github.com/dmlzj/vlf
    // and https://localforage.github.io/localForage/#localforage

    console.log("Begin the demo")

    this.$vlf.setItem('new_key', 'my_test_value')
      .then((result) => {
          console.log("set value:",result)
      })
      //can add catch to properly catch errors

    this.$vlf.getItem('new_key')
      .then((result) => {
          console.log("got value:",result)
      })

    this.$vlf.setItem('new_key_to_array', ['some','value','here'])
      .then((result) => {
          console.log("set array value:",result)
      })

    this.$vlf.setItem('new_key_to_object', {example: "object", works: "too"})
      .then((result) => {
          console.log("set array value:",result)
      })

  }
}


</script>
