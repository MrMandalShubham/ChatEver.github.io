const socket = io('http://localhost:3000')
const Form  = document.getElementById('formID');
const massaging = document.getElementById('InputText');
const massageClick = document.getElementById('btnID');

socket.on('wellcome', data =>{
    console.log(data)
})

Form.addEventListener('submit', e => {
    e.preventDefault()
    let massage = massaging.value
    socket.emit('clint1', massage)
    massaging.value = ''
})

socket.on('clint2', message =>{
    console.log(message)
        let x = document.getElementById('send_btnID');
        let I = message;
        let y = document.getElementById('Process');
        let txt = '<div class="row m-3 d-flex flex-column" id="lineY"><div class="col-sm-10 col-md-7 col-lg-5 fs-3" id="Sended">'+I+'<span><img src="/data/svg/github(1).svg" alt="" id="SendTrue"></span></div></div>'
        if(I){
    
            y.insertAdjacentHTML("beforeend",txt)
        }
            
        x.src = "/data/svg/loading.svg";
        x.style.animation = 'Rotate 0.5s linear infinite';
        setTimeout(() => {
            x.src = "/data/svg/send.svg";
            x.style.animation = 'none';
        }, 300);
    
        let H = document.getElementById('FrontID').offsetHeight;
        window.scrollTo({
            top: H,
            left: 0,
            behavior: 'smooth',
        });
})
