<template>
  <div>
    <v-select
      :items="jobs"
      item-text="title"
      item-value="id"
      @change="findJob"
      v-model="selectedJob"
      label="لیست مشاغل"
      outlined
    ></v-select>
    <v-divider></v-divider>

    <h4 class="mt-3">جزئیات شغل:</h4>

    <JobDetail v-if="selectedJob" :job="job" />

    <p v-else class="text-center grey--text text--lighten-1">
      هیچ شغلی انتخاب نکرده اید
    </p>
  </div>
</template>

<script>
export default {
  name: "Jobs",

  components: {
    JobDetail: () => import("@/components/Jobs/Job.vue"),
  },
  data() {
    return {
      selectedJob: null,
      job: {},
      jobs: [],
    };
  },

  mounted() {
    this.getAllJobs();
  },

  methods: {
    async getAllJobs() {
      await this.$store.dispatch("getAllJobs").then(() => {
        this.jobs = this.$store.state.jobs;
      });
    },
    findJob() {
      this.job = this.jobs.find((job) => job.id == this.selectedJob);
    },
  },
};
</script>
