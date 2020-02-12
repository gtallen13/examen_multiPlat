let fs = require ('fs');
const btn_register = document.getElementById('btn_register');
const txtID = document.getElementById('ID');
const txtFullName = document.getElementById('full_name');
const txtEmail = document.getElementById('email');
const txtYear = document.getElementById('year');
const txtMonth = document.getElementById('month');
const txtDay = document.getElementById('day');
const txtPhone = document.getElementById('phone');




btn_register.addEventListener('click',function(e){
        e.preventDefault();
        let birth_date =`${txtYear.value} - ${txtMonth.value} - ${txtDay.value} \n`;
        const file = './personas/' + txtID.value + '.txt';
        const data = `${txtID.value}\n${txtFullName.value}\n${txtEmail.value}\n${txtPhone.value}\n${birth_date}`
        console.log (file)
        fs.writeFile(file, data, function(err,fd)
        {
            if (err)
            {
                console.log ('Ocurrio un error :( #muySad');
                console.log (err);
            }
            console.log('algo paso :) #veryhappy');
            alert ('Se ha registrado correctamente :)');
        })
})
