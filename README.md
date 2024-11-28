# Rubber Ducks Bookshelf

Website: https://rubber-ducks-book-club.netlify.app/

This is a static site built with [Astro](https://astro.build/) that displays the books we've read for the [Rubber Ducks](https://www.linkedin.com/company/rubber-ducks-nm) Book Club. It fetches the data at build time from [a Google Sheet](https://docs.google.com/spreadsheets/d/1xZfBupIyI0MezvG-8iACqHrzTrlNt4jqRYGuUZdrp-A/edit?usp=sharing) that we maintain to keep track of the books we've read in the past or are going to read in the future.

The site deploys to Netlify automatically when changes are pushed to the `main` branch.

## Contributing

Contributions are welcome! Please open an issue or submit a PR. To build locally with the Google Sheet data, you'll need read access to the Google Sheet as well as a Google Cloud account and service account key. 

You can also fork the repo and run the site on your own domain (or locally) with your custom Google Sheet data: Set up a Google Cloud account and service account key that has access to your Google Sheet, and change the `GOOGLE_SHEET_ID` and any other values to fit your use case in `./utils/googleSheets.ts`.

## About Rubber Ducks NM 

Rubber Ducks is a networking, social, & educational group centered around female-identifying and non-binary adults in STEM. [Join our LinkedIn group](https://www.linkedin.com/groups/13884181/) to support our mission of empowering more diversity in STEM.

Want to join the Rubber Ducks Book Club? If you're in the Albuquerque area, you can join the [Meetup group](https://www.meetup.com/rubber-ducks) to stay in the loop about upcoming book club meetings and other events.