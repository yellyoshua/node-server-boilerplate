export default (requestHandler) => {
  return async (req, res) => {
    try {
      const response = await requestHandler(req, res);
      res.status(200).json({response, errors: []});
    } catch (error) {
      res.status(500).json({errors: [error.message]});
    }
  };
};
