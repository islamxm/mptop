export const modal = () => {
    const wrapper = document.querySelectorAll('.modal');
    
    const login = document.querySelector('#login');
    const signin = document.querySelector('#signin');

    const mm = document.querySelector('.mobmenu');

    const loginTriggerMain = document.querySelector('#loginTrigger');
    const loginTriggerSec = document.querySelectorAll('.login__trigger');   
    const signinTrigger = document.querySelectorAll('.signin__trigger');


    if(wrapper.length > 0)  {
        wrapper.forEach(i => {
            i.addEventListener('click', (e) => {
                if(e.target.classList.contains('modal')) {
                    login.classList.remove('active');
                    signin.classList.remove('active');
                }
            });
        })
    } 

    if(login && signin) {

        loginTriggerMain.addEventListener('click', () => {
            login.classList.add('active');
            signin.classList.remove('active');
            if(mm.classList.contains('active')) {
                mm.classList.remove('active');
            }
        });

        if(loginTriggerSec.length > 0) {
            loginTriggerSec.forEach(i => {
                i.addEventListener('click', (e) => {
                    e.preventDefault();
                    login.classList.add('active');
                    signin.classList.remove('active');

                    if(mm.classList.contains('active')) {
                        mm.classList.remove('active');
                    }
                });
            });
        }

        if(signinTrigger.length > 0) {
            signinTrigger.forEach(i => {
                i.addEventListener('click', (e) => {
                    e.preventDefault();
                    signin.classList.add('active');
                    login.classList.remove('active');

                    if(mm.classList.contains('active')) {
                        mm.classList.remove('active');
                    }
                })
            })
        }
    }

};