export default class Question {
  statement = "";
  goodAnswer = "";
  badAnswer = "";

  constructor(stmt, gdAsw, bdAsw) {
    this.statement = stmt;
    this.goodAnswer = gdAsw;
    this.badAnswer = bdAsw;
  }
  getStatement() {
    return this.statement;
  }
  getGoodAnswer() {
    return this.goodAnswer;
  }
  getBadAwswer() {
    return this.badAnswer;
  }
}
