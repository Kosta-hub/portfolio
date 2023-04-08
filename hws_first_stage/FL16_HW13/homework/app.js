const appRoot = document.getElementById('app-root');
// write your code here
appRoot.insertAdjacentHTML(
   'beforeend',
   `<div class="header">
      <h1>Countries Search</h1>
      <form class="form">
         <p>Please choose type of search:</p>
         <label class="radio-inp">
            <input type="radio" name="search" id="reg" />By Region
            <br />
            <input type="radio" name="search" id="lang" >By Language
         </label>
         <br />
         <label>Please choose search query:
            <select id="reg-select"></select>
         </label>
         <div class="wrapper">
            <table class="table"></table>
         </div>
      </form>
   </div>`
);

let form = document.getElementsByClassName('form');
const tableElement = document.getElementsByClassName('table');

let select = document.getElementById('reg-select');
const radioInputReg = document.getElementById('reg');
const radioInputLang = document.getElementById('lang');

// list of all regions
const regions = externalService.getRegionsList();
// list of all languages
const languages = externalService.getLanguagesList();
// get countries list by language
const countryListLanguage = externalService.getCountryListByLanguage()

reg.form.addEventListener('change', event => {
   if (event.target.id === radioInputReg.id) {
      select.innerHTML = '';
      regions.map(el =>
         select.insertAdjacentHTML(
            'beforeend',
            `<option>${el}</option>`
         )
      );
   } else if (event.target.id === radioInputLang.id) {
      select.innerHTML = '';
      languages.map(el =>
         select.insertAdjacentHTML(
            'beforeend',
            `<option>${el}</option>`
         )
      );
   }
})


const rTable = countryListLanguage.map((country) => {
   return `
      <tr>
         <td>${country.name}</td>
         <td>${country.capital}</td>
         <td>${country.region}</td>
         <td>${country.lanuigeFunc(country.languages)}</td>
         <td>${country.area}</td>
         <td><img src=${country.flagURL} alt=${country.name}></td>
      </tr>`
}).join('');




// function fun1() {
//    console.log(select.childElementCount);
//    debugger
//    if (select.childElementCount > 0) {
//       for (let i = select.childElementCount; i >= 0; i--) {
//          select.removeChild(select.firstChild);
//       }
//    }
//    console.log(select.childElementCount);
//    let rad = document.getElementsByName('search');
//    for (let i = 0; i < rad.length; i++) {
//       if (rad[i].checked) {
//          console.log(rad.id);
//          chooseSearchOption(rad[i].id);
//       }
//    }
// }

// function chooseSearchOption(option) {
//    switch (option) {
//       case radioInputReg.id:
//          console.log(regions);
//          regions.forEach(function (region) {
//             let option = document.createElement('option');
//             option.innerHTML = region;
//             select.appendChild(option);
//          });
//          break;
//       case radioInputLang.id:
//          console.log(languages);
//          languages.forEach(function (language) {
//             let option = document.createElement('option');
//             option.innerHTML = language;
//             select.appendChild(option);
//          });
//          break;

//       default:
//          break;
//    }
// }

// get countries list by language
// externalService.getCountryListByLanguage()
// get countries list by region
// externalService.getCountryListByRegion()
