<template>
    <div>
    {{ bookingDetails }}
    <a href="/" >Go back</a>
    </div>
</template>

<script>
export default {
  name: 'ConfBooking',
  data () {
    return {
      bookingDetails: 'data from server'
    }
  }
}
</script>