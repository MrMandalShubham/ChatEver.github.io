function M_S() {
    let x = document.getElementById('send_btnID');
    let I = document.getElementById('InputText').value;
    let y = document.getElementById('Process');
    let txt = '<div class="row m-3 d-flex flex-column" id="lineX"><div class="col-sm-10 col-md-7 col-lg-5 fs-3" id="Sended">'+I+'<span><img src="/data/svg/github(1).svg" alt="" id="SendTrue"></span></div></div>'
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
}

function M_R() {
    let x = document.getElementById('send_btnID');
    let I = document.getElementById('InputText').value;
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
}