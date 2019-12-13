
const asteroidData = (gatherAsteroids = () => {
  fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-12-18&end_date=2019-12-25&detailed=true&api_key=gftVqtJ1Aoj46G4XQO9Jq41fKMypL1PvCUFFfdEf')
    .then(res => res.json())
    .then(data => {
      const asteroids = data['near_earth_objects']['2019-12-25'].map(asteroid => {
        let value = asteroid['estimated_diameter'].feet['estimated_diameter_max']
        console.log(value)
      return `<div class='card'>
                <h2>Name: ${asteroid.name}</h2>
                <p>Diameter: ${value} ft</p>
              </div>`
      });
      return asteroids;
    })
    .then(asteroids => {
      console.log(asteroids)
      return $('#asteroids-container-section').html(asteroids)
    })

      
})();






// populateAsteroids = (array) => {
//   $('#stars-ideas-container').innerHTML(
//   )
// }