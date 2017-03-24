/* 
 * Simple javascript file to get the current language from the browser
 * and display the proper welcome in that language if posssible.
 */
document.write('<scr'+'ipt type="text/javascript" src="js/jquery.js" ></scr'+'ipt>');
var lang;

function getWelcome() {
    lang = getLanguage();
    if (!lang || !phrases[lang]) {
        lang = 'nl';
    }
    document.getElementById('welcome').innerHTML = phrases[lang];
    
}

 function getLanguage() {

         if (navigator.language) {
             lang = navigator.language;
         } else if (navigator.userLanguage) {
             lang = navigator.userLanguage;
         }

         if (lang && lang.length > 2) {
             lang = lang.substring(0, 2);
         }

         return lang;
     }

var phrases = { /* translation table for page */
    en: ["<h1>Welcome!</h1><p> This Is Leon Hazard Majestic Websites!</p><p><a href='about.html' class='btn btn-primary btn-large'>Learn more &raquo;</a></p>"]
};