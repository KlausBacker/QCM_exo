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
        <v-radio name="choice" value="1">
          <template v-slot:label>
            <div>
              {{ question.goodAnswer }}
            </div>
          </template>
        </v-radio>
        <v-radio ame="choice" value="0">
          <template v-slot:label>
            <div>
              {{ question.badAnswer }}
            </div>
          </template>
        </v-radio>
      </v-radio-group>
    </v-card>
    <v-btn rounded color="primary" @click="submitAnswer">submit</v-btn>
    <v-dialog v-model="resultDialog">
      Tu a {{ goodAswrCountr }} bonne reponse(s) sur {{ qcm.qstnTab.length }}
    </v-dialog>
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
    resultDialog: false,
  }),
  created() {
    this.qcm = this.$route.query.q;
    console.log(this.qcm);
  },

  methods: {
    submitAnswer() {
      const rbs = document.querySelectorAll('input[name="choice"]');
      for (const rb of rbs) {
        if (rb.checked) {
          if (rb.value == 1) {
            this.goodAswrCountr += 1;
          }
        }
      }
      this.resultDialog = true;
      console.log(this.goodAswrCountr + " bonne(s) réponses");
    },
  },
};
</script>

