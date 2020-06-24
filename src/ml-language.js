import language from '@google-cloud/language';

import constants from './constants';

export async function processText(text) {
  const languageClient = new language.LanguageServiceClient({
    keyFilename: constants.GOOGLE_CLOUD_KEYFILE,
  });
  const languageResults = await languageClient.analyzeEntities({
    document: {
      content: text,
      type: 'PLAIN_TEXT',
    },
  });
  const {entities} = languageResults[0];
  return entities.filter(entity => constants.ACCEPT_ENTITIES.includes(entity.type));
}
