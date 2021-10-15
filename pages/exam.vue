<template>
  <div>
    <h1>QCM exam</h1>
    <v-card
      v-for="question in qcm.qstnTab"
      :key="question.goodAnswer"
      max-with="400px"
      style="margin: 25px; padding: 25px"
      justify="center"
      align="center"
    >
      <v-radio-group>
        <template v-slot:label>
          <div>
            <strong>{{ question.statement }}</strong>
          </div>
        </template>
        <v-radio name="good" value="1">
          <template v-slot:label>
            <div>
              {{ question.goodAnswer }}
            </div>
          </template>
        </v-radio>
        <v-radio ame="bad" value="0">
          <template v-slot:label>
            <div>
              {{ question.badAnswer }}
            </div>
          </template>
        </v-radio>
      </v-radio-group>
    </v-card>
    <v-btn rounded color="primary" @click="submitAnswer">submit</v-btn>
  </div>
</template>

  

<script>
import Question from "/classes/Question.js";
import Qcm from "/classes/Qcm.js";

export default {
  data: () => ({
    qcm: {},
    question: {},
    goodAswrCountr: 0,
  }),
  created() {
    this.qcm = this.$route.query.q;
    console.log(this.qcm);
  },

  methods: {
    submitAnswer() {
      const rbs = document.querySelectorAll('input[name="choice"]');
      for (const rb of rbs) {
        if (rb.value == 1) {
          this.goodAswrCountr += 1;
        }
      }
      console.log(this.goodAswrCountr);
    },
  },
};
</script>

