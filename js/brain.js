

var cookies = [
    "If you're looking to a cookie for help, you should probably reevaluate your life choices.",
    "You will now eat a stale cookie.",
    "Sorry Mario, your fortune is in another cookie!",
    "You will spend time reading these fortunes to those close to you.",
    "Maybe not fortunes, but coupons for your next Asian meal. They're more useful.",
    "life is meaningless and we all die alone.",
    "Do not be discouraged, everyone begins in ignorance.",
    "You will remember this fortune cookie.",
    "Ignore previous cookie.",
    "You will soon be going on an adventure.",
    "Some fortune cookies have no fortune.",
    "Bad luck and extreme misfortune will infest your soul for all eternity.",
    "Help! I'm trapped in a fortune cookie factory!",
    
    ]

var FortuneSeen = 0;

function CookiesEaten(val) {
    FortuneSeen += val
    document.getElementById('stats').innerHTML = "You've made " + FortuneSeen + " Fortunes";
}

var list = document.getElementById('oldCookies');

function shuffle(arr) {
    //dat fisher-yates shuffle 
    for (var i=arr.length-1; i>=0; i--) {
		var temp = Math.floor(Math.random()*arr.length);
		var tempValue = arr[temp]
		arr[temp] = arr[i]
		arr[i] = tempValue
    }
    return arr
}


var counter = 0
function nextCookie(arr) {
    var currentCookie = arr[counter];
    counter++;
    CookiesEaten(1);
    document.getElementById('quote').innerHTML = arr[counter];
    var itm = document.getElementById('fortune-cookie-text');
    var entry = itm.cloneNode(true);
    entry.classList.add("scale");
    itm.classList.add("fade-in");

    if (counter>1) {
		entry.innerHTML = currentCookie; //old cookies goes to trasholdCookies
		entry.style.marginTop = "20px";
		entry.style.borderColor = "#808F85";
		list.insertBefore(entry, list.firstChild); //pushes to top instead bottom
    }
    

    //when all cookies are read, shuffle them again and start from the beginning
    if (counter === arr.length-1) {
		itm.classList.remove("fade-in");
		shuffle(arr);
		counter = 0;
    }
}


function viewAllCookies(arr) {
    CookiesEaten(arr.length)
    var quoteBox = document.getElementById('quote');
    quoteBox.innerHTML = "";
    shuffle(arr)
    for (var i=0; i<=arr.length-1; i++) {
		var quoteBox = document.getElementById('quote');
		var line = document.createElement("p");
		line.innerHTML = arr[i];
		quoteBox.appendChild(line);
		var itm = document.getElementById('fortune-cookie-text');
		var entry = itm.cloneNode(true);
		entry.innerHTML = arr[i]
		list.appendChild(entry);
	
    }
}



	
	

