const express = require('express');
const axios = require('axios').default;
const frsqr = require('../../bin/config/foursquare');

const router = express.Router();
const Simplifier = require('./simplify');


router.get('/getpic', async (req, res) => {
  const { id } = req.query;
   
  try
  {
     const result = await axios.get(`https://api.foursquare.com/v2/venues/${id}/photos?limit=1&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&v=20180323`);
     const findata = result.data.response.photos.items[0].prefix+"300x500"+result.data.response.photos.items[0].suffix;
     res.send(findata);
  }
  catch(error)
  {
    res.send("https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg")
  }
})

router.get('/nearby', async (req, res) => {

  const { lat, long, query } = req.query;  
  const useAPI = new frsqr(query, lat, long);


  try {
    const result = await useAPI.sendRequest();
    console.log(result);
    const finalData = Simplifier.simplifyPlaces(result.data.response.groups[0].items);

    

    res.json({
      status: {
        code: 200,
        message: 'OK',
      },
      results: finalData
    });


  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
