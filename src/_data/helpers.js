const renderer = require("@exportarts/prismic-span-renderer");
const Prismic = require('prismic-javascript');

const apiEndpoint = "https://carolineboseley.cdn.prismic.io/api/v2";
const apiToken = "MC5YU1M4OEJBQUFDQUE2clJr.Pwrvv718L3wl77-977-9Ee-_ve-_vTDvv73vv70fb--_vXQAe--_vSDvv70k77-9RjJR77-9Ku-_vQ";

module.exports = {
  /**
     * Returns back some attributes based on whether the
     * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = '';
    
    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }
    
    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }
    
    return response;
  },
  /** 
   * Uses prismic-span-render https://github.com/exportarts/prismic-span-renderer
   * Returns back some paragraphs with the spans spliced into them
   * from an array of data from prismic.io
   *
   * @param {array} textArray The array of content from prismic.io
   * @returns {String} The html to create the content as a string output on the page using the safe filter
   */
  fixPrismic(textArray) {
    return renderer.renderText(textArray);
  },
  /**
   * Uses prismic client to make a call to the endpoint to return the data
   * 
   * @param {string} query the query that you want to run to get the data
   */
  
  
  getPrismicResults(query = ""){
      const typeQuery = Prismic.Predicates.at('document.type', query);
      const options = {
        accessToken: apiToken
      }; // In Node.js, pass the request as 'req' to read the reference from the cookies
      const client = Prismic.client(apiEndpoint, options)
      return client.query(typeQuery, {}, function(err, response) { // An empty query will return all the documents
        if (err) {
          console.log("Something went wrong: ", err);
        }
        // console.log("Documents: ", response);
        return response.documents||response.results||[];
      });
    }
  };

