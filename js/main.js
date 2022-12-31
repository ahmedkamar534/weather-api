const apiKey = "c54984daa00a4835b07135758211209";
const row = document.querySelector(".content .row");
const week = [
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];
const findInput = document.querySelector(".content input");

async function getData(city = "cairo") {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  display(data);
}
function display(data) {
  row.innerHTML = `
<div class="col-lg-4  card mb-3" style="max-width: 18rem;">
            <div class="card-header bg-transparent border-light d-flex justify-content-between pb-4">
              <div class="day">${week[data.current.is_day]}</div>
              <div class="date">${data.forecast.forecastday[0].date}</div>
            </div>
            <div class="card-body text-light">
              <h5 class="card-title">${data.location.name}</h5>
              <div class="card-text">
              <h2>${data.current.temp_c}<sup>o</sup>C</h2>
                <img src="${data.current.condition.icon}" alt="" />
                
              </div>
              <span>${data.current.condition.text}</span>
         

            </div>
            <div class="card-footer bg-transparent border-light">
            <div>
            <i class="fas fa-umbrella fa-1x me-3">%</i>
            <span> ${
              data.forecast.forecastday[0].day.daily_chance_of_rain
            }%</span>
            </div>
            <div>
            <i class="fas fa-wind fa-1x me-3"> </i>
            <span>${data.current.wind_kph}km/h</span>
            </div>
            <div><i class="fas fa-compass fa-1x me-3"> </i>
            <span>${data.current.wind_dir}</span></div>
            </div>
          </div>
          
          




          <div class="col-lg-4  card mb-3 " style="max-width: 18rem;" >
          <div class="card-header bg-transparent border-light d-flex justify-content-between pb-4">
            <div class="day">${week[data.current.is_day + 1]}</div>
            <div class="date">${data.forecast.forecastday[1].date}</div>
          </div>
          <div class="coco card-body text-light">
          <img src="${
            data.forecast.forecastday[1].day.condition.icon
          }" alt="" />
          <h2>${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
          <p>${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
          <span>${data.forecast.forecastday[1].day.condition.text}</span>
          </div>
          
        </div>
        
        
        <div class="col-lg-4  card mb-3"  style="max-width: 18rem;">
        <div class="card-header bg-transparent border-light d-flex justify-content-between pb-4">
          <div class="day">${week[data.current.is_day + 2]}</div>
          <div class="date">${data.forecast.forecastday[2].date}</div>
        </div>
        <div class=" coco card-body text-light">
        <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="" />
        <h2>${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
        <p>${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
        <span>${data.forecast.forecastday[2].day.condition.text}</span>
        
          
        </div>
       
      </div>`;
}
getData();

///////////
async function searchReq() {
  let firstUrl = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${findInput.value}&days=3`;
  let res = await fetch(firstUrl);
  SearchData = await res.json();
  console.log(SearchData);
  getDataAfterSearch(SearchData);
  // displayAll()
}
async function getDataAfterSearch(dataAfterSearch) {
  let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${dataAfterSearch[0].name}&days=3`;
  let res = await fetch(url);
  data = await res.json();
  console.log(data);

  display(data);
}
findInput.addEventListener("keyup", searchReq);
