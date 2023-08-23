const nav = document.querySelector('.navbar')
fetch('navbar.html').then(res=>{res.text(),nav.innerHTML = res}
).then(data=>{
    nav.innerHTML = data;
})
