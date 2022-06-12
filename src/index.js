import './css/styles.css'; 
import FETCH from './fetchCountries.js' 
import debounce from 'lodash.debounce' 
 
const DEBOUNCE_DELAY = 300; 
 
 
 const refs = { 
    input:document.querySelector('#search-box'), 
    countryList:document.querySelector('.country-list'), 
    countryInfo:document.querySelector('.country-info'), 
 }   
    
 
 
  
// const arrayCountry = refs.input.addEventListener('input', debounce(FETCH,DEBOUNCE_DELAY)); 
   
 
 console.log(arrayCountry); 
 
 
 function countryListMarkup(arrayCountry) { 
    refs.countryList.innerHTML = arrayCountry 
     .map(({ name, flags }) => { 
       return `<li class="country-list__item"><img src="${flags.svg}" alt="${name.official}" class="country-list_img"><span class="country-list__name">${name.official}</span></li>; 
     `}) 
     .join(''); 
      
   }