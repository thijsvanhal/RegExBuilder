// JavaScript

// Functie GSC 
function generateRegexGSC(values) {
    function extractBaseUrl(url) {
      let index = url.indexOf('/', 8);
      if (index === -1) {
        index = url.length;
      }
      return url.substring(0, index);
    }
    const domain = extractBaseUrl(values);
    const inputs = values.split('\n').map(input => {
        return input.replace(/^.*\/\/[^\/]+/, '');
        });
    const joined = inputs.join('|');
    if (document.getElementById('bevat').checked == true) {
        return new String(`^${domain}(${joined})`);
    } else if(document.getElementById('exact').checked == true) {
        return new String(`^${domain}(${joined})$`);
    }
  }

// Functie GA
function generateRegexGA(values) {
    const inputs = values.split('\n').map(input => {
        return input.replace(/^.*\/\/[^\/]+/, '');
        });
    const joined = inputs.join('|');
    if (document.getElementById('bevat').checked == true) {
        return new String(`^(${joined})`);
    } else if(document.getElementById('exact').checked == true) {
        return new String(`^(${joined})$`);
    }
}

// Constanten
const button = document.getElementById('generate-button');
const textField = document.getElementById('input-area');
const resultTextareaGSC = document.getElementById('result-gsc');
const resultTextareaGA = document.getElementById('result-ga');

// Button click
button.addEventListener('click', () => {
    const values = textField.value;
    const regexgsc = generateRegexGSC(values);
    const regexga = generateRegexGA(values);
    resultTextareaGSC.value = regexgsc.toString();
    resultTextareaGA.value = regexga.toString();
});

// Zorg dat output geselecteerd wordt
resultTextareaGSC.addEventListener('click', () => {
    resultTextareaGSC.select();
});

resultTextareaGA.addEventListener('click', () => {
    resultTextareaGA.select();
});