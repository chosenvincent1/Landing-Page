// SERVICES
const arrowDown1 = document.getElementById('arrowDown1');
const arrowUp1 = document.getElementById('arrowUp1');
const showServices = document.getElementById('show1');
arrowDown1.addEventListener('click', ()=>{
    arrowDown1.classList.remove('block');
    arrowDown1.classList.add('hidden');
    arrowUp1.classList.add('block');
    arrowUp1.classList.remove('hidden');
    showServices.classList.remove('hidden');
});
arrowUp1.addEventListener('click', ()=>{
    arrowUp1.classList.remove('block');
    arrowUp1.classList.add('hidden');
    arrowDown1.classList.add('block');
    arrowDown1.classList.remove('hidden');
    showServices.classList.add('hidden');
});

// CONTACT US
const arrowDown2 = document.getElementById('arrowDown2');
const arrowUp2 = document.getElementById('arrowUp2');
const showContact = document.getElementById('show2');
arrowDown2.addEventListener('click', ()=>{
    arrowDown2.classList.remove('block');
    arrowDown2.classList.add('hidden');
    arrowUp2.classList.add('block');
    arrowUp2.classList.remove('hidden');
    showContact.classList.remove('hidden');
});
arrowUp2.addEventListener('click', ()=>{
    arrowUp2.classList.remove('block');
    arrowUp2.classList.add('hidden');
    arrowDown2.classList.add('block');
    arrowDown2.classList.remove('hidden');
    showContact.classList.add('hidden');
});

// FAQ
const arrowDown3 = document.getElementById('arrowDown3');
const arrowUp3 = document.getElementById('arrowUp3');
const showFAQ = document.getElementById('show3');
arrowDown3.addEventListener('click', ()=>{
    arrowDown3.classList.remove('block');
    arrowDown3.classList.add('hidden');
    arrowUp3.classList.add('block');
    arrowUp3.classList.remove('hidden');
    showFAQ.classList.remove('hidden');
});
arrowUp3.addEventListener('click', ()=>{
    arrowUp3.classList.remove('block');
    arrowUp3.classList.add('hidden');
    arrowDown3.classList.add('block');
    arrowDown3.classList.remove('hidden');
    showFAQ.classList.add('hidden');
});


// QUESTION AND ANSWER
const plus1 = document.getElementById('plus1');
const minus1 = document.getElementById('minus1');
const ans1 = document.getElementById('ans1');
plus1.addEventListener('click', ()=>{
    plus1.classList.remove('block');
    plus1.classList.add('hidden');
    minus1.classList.remove('hidden');
    minus1.classList.add('block');
    ans1.classList.remove('hidden');
});
minus1.addEventListener('click', ()=>{
    minus1.classList.remove('block');
    minus1.classList.add('hidden');
    plus1.classList.remove('hidden');
    plus1.classList.add('block');
    ans1.classList.add('hidden');
});

const plus2 = document.getElementById('plus2');
const minus2 = document.getElementById('minus2');
const ans2 = document.getElementById('ans2');
plus2.addEventListener('click', ()=>{
    plus2.classList.remove('block');
    plus2.classList.add('hidden');
    minus2.classList.remove('hidden');
    minus2.classList.add('block');
    ans2.classList.remove('hidden');
});
minus2.addEventListener('click', ()=>{
    minus2.classList.remove('block');
    minus2.classList.add('hidden');
    plus2.classList.remove('hidden');
    plus2.classList.add('block');
    ans2.classList.add('hidden');
});