const moment = require('moment');
moment.locale('en');

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('dateIso', date => {
        return moment(date).toISOString();
    });

    eleventyConfig.addFilter('dateReadable', date => {
        return moment(date).utc().format('LL'); // E.g. May 31, 2019
    });

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true
    });
    
    eleventyConfig.addPassthroughCopy("src/static");


    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
}

