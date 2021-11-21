module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", {
        title: "riqki",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
