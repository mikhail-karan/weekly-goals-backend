module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendmail',
    settings: {
      defaultFrom: 'info@digitaldynasty.ca',
      defaultReplyTo: 'info@digitaldynasty.ca',
    },
  },
  // ...
});