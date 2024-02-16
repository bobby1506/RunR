
// Controller function to send a URL
exports.sendurl = async (req, res) => {
    try {
      const datatosend = {
        url: process.env.INSTA_URL || 'Default_URL_If_Not_Set',
      };
  
      res.json(datatosend);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  