const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An HTTP endpoint that acts as a webhook for New Relic incident.closed event
* @param {object} event
* @returns {object} result Your return value
*/
module.exports = async (event) => {

  // Store API Responses
  const result = {};

  console.log(event);
  
  await lib.microsoftteams.messages['@0.0.2'].create({
    channel: `Test Incidents`,
    body: `New Relic Incident [**${event.incident_id}**](${event.incident_url}) was **CLOSED**!`
  });
  

  return result;

};