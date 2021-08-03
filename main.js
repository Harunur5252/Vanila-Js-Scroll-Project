const navbar_fixed = document.querySelector('.navbar-fixed')
const a = document.querySelector('#a')

window.addEventListener('scroll',function(){
    if(this.scrollY>200){
        navbar_fixed.classList.add('main')
        a.classList.add('color')
    }else{
        navbar_fixed.classList.remove('main')
        a.classList.remove('color')
    }
})


