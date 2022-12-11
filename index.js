let homeEl = document.getElementById('home-el')
let homecnt = 0
let guestEl = document.getElementById('guest-el')
let guestcnt = 0

// get the buttons to work by creating a function
// the answer to the function should be put inside homeEl and guestEl to display

function add1() {
    homecnt += 1
  homeEl.textContent = homecnt
}

function add2() {
    homecnt += 2
    homeEl.textContent = homecnt
}

function add3() {
    homecnt += 3
    homeEl.textContent = homecnt
}
////
function add4() {
    guestcnt += 1
  guestEl.textContent = guestcnt
}

function add5() {
    guestcnt += 2
    guestEl.textContent = guestcnt
}

function add6() {
    guestcnt += 3
    guestEl.textContent = guestcnt
}
