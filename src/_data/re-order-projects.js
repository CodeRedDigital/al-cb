const helpers = require('./helpers')
 
module.exports = async () => {
  try {
    // Grabs either the fresh remote data or cached data (will always be fresh live)
    const results = await helpers.getPrismicResults("projects_slice");

    return results;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [];
  }
};