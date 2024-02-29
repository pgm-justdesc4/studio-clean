module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("input/assets/css/reset.css");
  eleventyConfig.addPassthroughCopy("input/assets/css/main.css");
  eleventyConfig.addPassthroughCopy("input/assets/images");

  eleventyConfig.addFilter("sortByOrder", (list) => {
    return list.sort((a, b) => a.data.order - b.data.order);
  });

  return {
    dir: {
      input: "input",
      output: "output",
    },
  };
};
