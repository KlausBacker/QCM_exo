<template>
  <div>
    <h1>Create a QCM</h1>
    <v-card max-with="900" style="padding: 25px">
      <v-form style="margin-top: 25px">
        <v-row>
          <v-col cols="12" md="4">
            <v-slider
              v-model="qcm.qstnNumber"
              color="orange"
              label="Question number"
              min="1"
              max="10"
              thumb-label
            ></v-slider>
          </v-col>
        </v-row>
      </v-form>
      <h2>{{ nbrQstnRest() }} question(s) to add</h2>
      <v-card> </v-card>
      <v-form id="qstnform">
        <v-text-field
          v-model="question.statement"
          label="Question Statement"
          required
        ></v-text-field>

        <v-text-field
          v-model="question.goodAnswer"
          label="Good answer"
          required
        ></v-text-field>

        <v-text-field
          v-model="question.badAnswer"
          label="Bad answer"
          required
        ></v-text-field>
        <v-btn color="success" class="mr-4" @click="addQestionToQcm()">
          Add question
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

  

<script>
import Question from "/classes/Question.js";
import Qcm from "/classes/Qcm.js";

export default {
  data: () => ({
    qcm: {},
    question: {},
    editQcmCard: false,
  }),
  created() {
    this.monted();
  },

  methods: {
    monted() {
      this.newQcm();
    },

    newQcm() {
      this.qcm = new Qcm();
    },

    newQestion(statement, goodAnswer, badAnswer) {
      this.question = new Question(statement, goodAnswer, badAnswer);
    },

    addQestionToQcm() {
      let nwQstnToAdd = this.question;
      this.qcm.qstnTab.push(nwQstnToAdd);

      this.question = new Question();
      if (this.nbrQstnRest() == 0) {
        this.$router.push({ name: "exam", query: { q: this.qcm } });
      }
    },

    nbrQstnRest() {
      return this.qcm.qstnNumber - this.qcm.qstnTab.length;
    },
  },
};
</script>