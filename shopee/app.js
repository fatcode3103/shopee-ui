const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const registerElement = $$('.navbar__list-item--strong')
const modalElement = $('.modal')
const authFormElement1 = $('.auth-form-1')
const authFormElement2 = $('.auth-form-2')
const backBtn = $$('.auth-form__control--back')
const btnForward = $$('.auth-form__switch-btn')
const cartNoti = $('.header__cart-noti')
const cartItem = $$('.header__cart-item')
const heartElement = $$('.home-product-item__like')
const sortElement = $$('.header__sort-item')
const tabActive = $('.header__sort-item.active')
const line = $('.header__sort-bar .line')

//dang ky, dang nhap
function registerFunction(){
    modalElement.style.display = 'flex';
    authFormElement1.style.display = 'block';
    authFormElement2.style.display = 'none';
}

function loginFunction(){
    modalElement.style.display = 'flex';
    authFormElement1.style.display = 'none';
    authFormElement2.style.display = 'block';
}

for(var i=0; i<registerElement.length; i++){
    if(i==0){
        backBtn[i].onclick = function(){
            modalElement.style.display = 'none';
        }
        btnForward[i].onclick = function(){
            // my function
            loginFunction();
        }
        registerElement[i].onclick = function(){
            registerFunction();
        }
    }
    if(i==1){
        backBtn[i].onclick = function(){
            modalElement.style.display = 'none';
        }
        btnForward[i].onclick = function(){
            registerFunction();
        }
        registerElement[i].onclick = function(){
            loginFunction();
        }
    }
}
// so luong san pham trong gio
cartNoti.innerHTML = cartItem.length;

// like
for(let i=0; i<heartElement.length; i++){
    heartElement[i].onclick = function(){
        this.classList.toggle('home-product-item__like--liked')
    }
}

// header sort
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

sortElement.forEach(function(tab){
    tab.onclick = function(){
        document.querySelector('.header__sort-item.active').classList.remove('active');
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
        this.classList.add('active')
    }
})