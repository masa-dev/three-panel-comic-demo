<template>
  <div v-if="isAdmin"></div>
</template>

<script>
export default {
  computed: {
    isAdmin() {
      return this.$store.state.user.isAdmin;
    },
  },
};
</script>
