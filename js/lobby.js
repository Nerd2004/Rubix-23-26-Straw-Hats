let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sessionStorage.setItem('display_name', e.target.name.value)

    let inviteCode = e.target.room.value
    if(!inviteCode){
        inviteCode = String(Math.floor(Math.random() * 10000))
    }
    window.location = `room.html?room=${inviteCode}`
})


//FRONT END CODE
//sidebar
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
// const message = messages.querySelectorAll('.message');
// const messageSearch = document.querySelector('#message-search');
// let x=document.getElementsByClassName('notifications-popup');
// console.log(x);
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
let x =document.getElementById('popupaaya');
menuItems.forEach(item => {
    item.onclick = () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id== 'community') {
//             document.getElementById('popupaaya').style.visibility="visible";
            document.getElementById('notifications-popup').style.visibility="hidden";
            document.getElementById('form__container').style.visibility="hidden";
        }
        if(item.id== 'notifications') {
            document.getElementById('notifications-popup').style.visibility="visible";
            document.getElementById('form__container').style.visibility="hidden";
            // document.getElementById('popupaaya').style.visibility="hidden";
        }
        else if(item.id=='messages-notifications'){
            window.open('https://demochatapp.onrender.com/', '_self');
        }
        else if(item.id =='videochat'){
            document.getElementById('form__container').style.visibility="visible";
            document.getElementById('notifications-popup').style.visibility="hidden";
            // document.getElementById('popupaaya').style.visibility="hidden";
        }

         else{
            document.getElementById('form__container').style.visibility="hidden";
        }
    }
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}
