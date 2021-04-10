const Cache = require('@11ty/eleventy-cache-assets');
/**
 * Grabs the remote data for studio images and returns back
 * an array of objects
 *
 * @returns {Array} Empty or array of objects
 */
module.exports = async () => {
  try {
    // Grabs either the fresh remote data or cached data (will always be fresh live)
    const {results} = await Cache(        
      'https://carolineboseley.cdn.prismic.io/api/v2/documents/search?ref=YFTApRMAACEAGc-Q&q=[[%3Ad+%3D+at(document.type%2C+%22home%22)+]]',
      {
        duration: '1d', // 1 day
        type: 'json'
      }
    );

    return results;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [];
  }
};
