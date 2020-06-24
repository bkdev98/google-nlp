export default {
  PORT: process.env.PORT || 7819,
  GOOGLE_CLOUD_KEYFILE: process.env.GOOGLE_CLOUD_KEYFILE || __dirname + '/keyfile.json',
  ACCEPT_ENTITIES: ['ORGANIZATION', 'PERSON', 'LOCATION'],
}