module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("input/assets/css/reset.css");
  eleventyConfig.addPassthroughCopy("input/assets/css/main.css");
  eleventyConfig.addPassthroughCopy("input/assets/images");

  return {
    dir: {
      input: "input",
      output: "output",
    },
  };
};
