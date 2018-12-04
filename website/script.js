const text = document.querySelector("#status")
const url = 'https://test.blahdns.com'
fetch(url, {
        credentials: 'same-origin',
        method: "HEAD",
        mode: "no-cors",
        cache: "no-cache",
    })
    .then(function (response) {
        // console.log(response.status)
        // console.log(text)
        if (response.status == 0 || response.status == 403) {
            text.innerHTML = "You're <strong> using </strong> Blahdns"
        } else {
            text.innerHTML = "You're <strong> not </strong> using Blahdns"
        }
    })
    .catch(error => console.log(error));

function handleErrors(response) {
    console.log('Resopone here')
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


// const domainRegex = /^([a-zA-Z0-9]+(([\-]?[a-zA-Z0-9]+)*\.)+)*[a-zA-Z]{2,}$/
const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/
const domainInput = document.querySelector('#domainName')
const btnCheck = document.querySelector('#btnCheck')
const returnStat = document.querySelector('#returnStatus')
btnCheck.addEventListener('click', queryStatus)

function queryStatus() {
    // console.log(domainInput.value)
    const url = `https://blahdns.com/api/${domainInput.value}`
    if (domainRegex.test(domainInput.value)) {
        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                let data = JSON.stringify(res.status)
                console.log(data)
                if (data === '"passed"') {
                    returnStat.innerHTML = `Domain: <strong>${domainInput.value}</strong> is not block`
                } else if (data === '"failed"') {
                    returnStat.innerHTML = `Domain: <strong>${domainInput.value}</strong> is blocked`
                }
            })
    }
    return returnStat.innerHTML = `Please input valid URL`
}


(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-10405417-12', 'auto');
ga('send', 'pageview');


function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openCity(evt, cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var activebtn = document.getElementsByClassName("testbtn");
    for (i = 0; i < x.length; i++) {
        activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-dark-grey";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

// Accordions
function myAccFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}