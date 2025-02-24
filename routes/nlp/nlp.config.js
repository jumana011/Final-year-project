const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
//adding different keywords and intents
manager.addDocument('en','hello','greeting');
manager.addDocument('en','hi','greeting');
manager.addDocument('en','hey there','greeting');
manager.addDocument('en','good morning','greeting');
manager.addDocument('en','good afternoon','greeting');
manager.addDocument('en','greeting');
manager.addDocument('en', 'give me a motivational message', 'motivational');
manager.addDocument('en', 'i need some motivation', 'motivational');
manager.addDocument('en', 'show me your dishes', 'menu');
manager.addDocument('en', 'do you have vegetarian options?', 'menu');
manager.addDocument('en', 'what are your specials?', 'menu');
manager.addDocument('en', 'make a reservation for tomorrow', 'reservation');
manager.addDocument('en', 'book a table for two on Friday', 'reservation');
manager.addDocument('en', 'reserve a spot for dinner', 'reservation');
manager.addDocument('en', 'can I book a table?', 'reservation');
manager.addDocument('en', 'what are your opening hours?', 'hours');
manager.addDocument('en', 'when do you open and close?', 'hours');
manager.addDocument('en', 'tell me your business hours', 'hours');
manager.addDocument('en', 'when can I visit?', 'hours');

// Answers for different intents
manager.addAnswer('en','greeting','hi, good day !');
manager.addAnswer('en', 'motivational', 'you can do it, believe in yourself');
manager.addAnswer('en', 'motivational', 'The pain you feel today will be the strength you feel tomorrow');
manager.addAnswer('en', 'hours', 'We are open from 7 am to 11 pm every day. Come and visit us!');

module.exports = manager;