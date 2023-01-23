[![Netlify Status](https://api.netlify.com/api/v1/badges/ef95d63b-3f01-49da-9ea4-6da6edd12096/deploy-status)](https://codebridge-test-bs.netlify.app)

You need to build Single Page Application with React.

The following Figma low-fidelity prototype should be used as a basis: link.

Use any open API to get article names and descriptions. For example:

https://spaceflightnewsapi.net/
Home page should contain:

1. Cards with article titles and descriptions for 100 characters. The user can click on the card to go to an article page that contains the title and full description of the selected article.

2. A field to filter by keyword. The user enters keywords into the field and the system displays all articles containing at least one of the keywords in the name or/and description.

The priority of fields: (1) names; and (2) description. The article with one match in the name is higher than the article with one match in the description.

The matched keywords should be highlighted with yellow color.

What do we expect?

Please use TypeScript as the main language.
CSS preprocessors should be used.
Please use Material UI.
Showing an example of a custom hook will be a plus.
Showing an example of state management will be a big plus.
