const renderer = require("@exportarts/prismic-span-renderer");
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
    }
  };
  