<template>
  <div class="d-flex justify-space-between">
    <div
      v-for="(value, index) in job.stages"
      :key="index"
      class="d-inline cursor-pointer"
      :class="Object.keys(job.stages).length == index ? '' : 'me-2'"
      @click="changeActiveness(index)"
    >
      <div class="position-relative text-center">
        <v-icon :color="activeClass(index)" size="100"
          >mdi-circle-slice-8
        </v-icon>
        <v-icon class="triangle" size="15" :color="activeClass(index)"
          >mdi-triangle</v-icon
        >
      </div>

      <v-icon
        class="d-block text-center mt-2"
        size="20"
        :color="activeClass(index)"
      >
        mdi-record-circle
      </v-icon>
      <p>
        {{ value }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobDetail",

  props: {
    job: {
      type: Object,
      required: true,
      default: {},
    },
  },

  methods: {
    changeActiveness(index) {
      this.job.active = index;
    },

    activeClass(index) {
      if (this.job.active >= index) return "green";
      else return "grey";
    },
  },
};
</script>

<style lang="scss" scoped>
.position-relative {
  position: relative;
}
.triangle {
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  transform: rotate(180deg);
}
.cursor-pointer {
  cursor: pointer;
}
</style>
