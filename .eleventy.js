module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("input/assets/main.css");
  eleventyConfig.addPassthroughCopy("input/assets/images");

  return {
    dir: {
      input: "input",
      output: "output",
    },
  };
};
