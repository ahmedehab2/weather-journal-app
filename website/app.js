/* Global Variables */

// Credentials for OpenWeatherMap API
const url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&zip=';
const apiKey = '&appid=a9cc47392b0e62bc0673d193d333c94b';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();
   
// GETTING Web Api Data 
const getWeather= async (url = '') => {
  try {
      const respond = await fetch(url);
      const data = await respond.json();
      return data;
  } catch (error) {
      console.log(error);
  }
};
//POST DATA FUNCTION
const postData = async ( url = '', data = {})=>{

  const response = await fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin', 
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header        
});
}


//Getting info of weather when btn clicked
const performAction = async () =>  {
const zip = document.getElementById('zip').value;
const feelings = document.getElementById('feelings').value;
const res = await fetch(url+zip+apiKey);
    try {
        const data = await res.json();
        data.feelings = feelings;
        data.date = newDate;
        await postData('/add', data);
        UpdateUI();
    } catch (error) {
        console.error("error", error);
    }
}
// Event listener For generate button
document.getElementById('generate').addEventListener('click', performAction);


 

// UpdateUI function
const UpdateUI = async () => {
  const projectData = await getWeather('/data');
  document.getElementById('date').innerHTML = `Date: ${projectData.date}`;
  document.getElementById('temp').innerHTML = `Weather: ${projectData.temperature} c` ;
  document.getElementById('content').innerHTML = `Feeling: ${projectData.feelings}`;
};

