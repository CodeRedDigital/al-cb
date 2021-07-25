const helpers = require('./helpers')
 
module.exports = async () => {
  try {
    // Grabs either the fresh remote data or cached data (will always be fresh live)
    const slice = await helpers.getPrismicResults("projects_slice");
    const projects = slice.results[0].data.body;
    return projects;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [1,2,3,4];
  }
};