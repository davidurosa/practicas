/* Sidebar */
const menuItems = document.querySelectorAll('.menu-item');
var root = document.querySelector(':root');
/* ================activa y desactiva el menu de notificaciones ============== */
const changeActiveItem = ()=>{
    menuItems.forEach(item =>{
            item.classList.remove('active');
    })
}


menuItems.forEach(item =>{
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display='none';
        }
        else{
            document.querySelector('.notifications-popup').style.display='block';
            document.querySelector('#notifications .notifications-count').style.display='none'

        }
    })
})

/* ====================mesagges======================== */

const menssgesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
/* search mensaje*/

const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
/*     console.log(val);
 */    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }else{
            user.style.display = 'none';
        }
    })
    }
messageSearch.addEventListener('keyup',searchMessage);


/* menu de mensajes */

menssgesNotifications.addEventListener('click',()=>{
    messages.style.boxShadow ='0 0 1rem var(--color-primary)';
    menssgesNotifications.querySelector('.notifications-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000)
})


/* ====================tema======================= */

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.cuztomize-theme');
/* Open modal */
const openThemeModal =()=>{
    themeModal.style.display='grid';
}

/* close modal */

const closeThemeModal =(e)=>{
    if(e.target.classList.contains('cuztomize-theme')){
        themeModal.style.display='none';

    }
}

themeModal.addEventListener('click',closeThemeModal);
theme.addEventListener('click',openThemeModal);

/* Remover la activacion del funtes  */



/* =============cambiar fuentes ================*/
const fontSizes = document.querySelectorAll('.choose-size span');

const removeSizeSelector =()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');

    })
}

fontSizes.forEach(size=>{
   
    size.addEventListener('click',()=>{
        let fontsize;
        removeSizeSelector();
             size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontsize = '10px';
            root.style.setProperty('--sticky--top-left','5.4rem')
            root.style.setProperty('--sticky--top-rigth','5.4rem')
    
        } else if(size.classList.contains('font-size-2')){
            fontsize = '13px';
            root.style.setProperty('--sticky--top-left','5.4rem')
            root.style.setProperty('--sticky--top-rigth','-7rem')
        }
        else if(size.classList.contains('font-size-3')){
            fontsize = '16px';
            root.style.setProperty('--sticky--top-left','-2rem')
            root.style.setProperty('--sticky--top-rigth','-17rem')
        }
        else if(size.classList.contains('font-size-4')){
            fontsize = '19px';
            root.style.setProperty('--sticky--top-left','-5rem')
            root.style.setProperty('--sticky--top-rigth','-25rem')
        }
        else if(size.classList.contains('font-size-5')){
            fontsize = '22px';
            root.style.setProperty('--sticky--top-left','-12rem')
            root.style.setProperty('--sticky--top-rigth','-35rem')
        }
        document.querySelector('html').style.fontSize=fontsize;
    })

  
})

/* ================cambiar Paleta de colores ===================== */

const colorPalette = document.querySelectorAll('.choose-color span');


colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
            let primary;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
    
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;

        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;

        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;

        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;

        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);

    })
})

/* FOndo */

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

let lightColorlightness;
let darkColorlightness;
let whiteColorlightness;

const changeBg=()=>{

    root.style.setProperty('--light-color-lightness',lightColorlightness);
    root.style.setProperty('--white-color-lightness',whiteColorlightness);
    root.style.setProperty('--dark-color-lightness',darkColorlightness);

}

Bg1.addEventListener('click',()=>{
    

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();
});

Bg2.addEventListener('click',()=>{
    darkColorlightness='95%';
    whiteColorlightness='20%';
    lightColorlightness ='15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();

});

Bg3.addEventListener('click',()=>{
    darkColorlightness='95%';
    whiteColorlightness='10%';
    lightColorlightness ='0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();

})