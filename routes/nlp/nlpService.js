const nlpManager = require('./nlp.config');

exports.processMessage = async (message) => {
  const responseObj = await nlpManager.process('en', message);
  return responseObj.answer || 'Sorry! I could not understand that, requesting you to rephrase!';
};