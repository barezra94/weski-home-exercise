const getHotelsByCriteria = async (req, res) => {
  const { siteId, fromDate, toDate, groupSize } = req.query;

  let success = true;
  let accommodations = [];
  for (let i = 0; i < 3; i++) {
    if (parseInt(groupSize) + i > 10) {
      break;
    }
    try {
      const request = await fetch(
        "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator",
        {
          method: "POST",
          body: JSON.stringify({
            query: {
              ski_site: parseInt(siteId),
              from_date: fromDate,
              to_date: toDate,
              group_size: parseInt(groupSize) + i,
            },
          }),
        }
      );

      if (request.status === 200) {
        const data = await request.json();
        accommodations = accommodations.concat(data.body?.accommodations);
      } else {
        success = false;
      }
    } catch (e) {
      console.log("Error", e);
      success = false;
    }
  }

  res.send({ success: success, accommodations: accommodations });
};

module.exports = { getHotelsByCriteria };
