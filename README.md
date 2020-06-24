# Google Natural Language Processing API for Deep Connect

## Development

- Get `GOOGLE_CLOUD_KEYFILE`:
  1. In the Cloud Console, enable **Cloud Natural Language API**.
  2. Go to the **Create service account key** page.
  3. From the **Service account** list, select **New service account**.
  4. In the **Service account name** field, enter a name.
  5. From the **Role** list, select **Project** > **Owner**.
  6. Click **Create**. Download the JSON file to **src** folder. Update filename in **constants.js** or in env.
- Run `yarn && yarn dev`.

## Demo

```shell
curl --location --request POST 'http://localhost:7819/v1/analyze' \
--header 'Content-Type: application/json' \
--data-raw '{
    "text": "Hello I'\''m Hiep, I live in district 4th, Ho Chi Minh City. I work at Inapps Technology Company"
}'
```
