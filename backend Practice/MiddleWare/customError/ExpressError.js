class ExpressError extends Error {
  constructor(status, messaage) {
    super();
    this.status = status;
    this.message = messaage;
  }
}
module.exports = ExpressError;

//we can add many things like-header etc
