const submitBtn = document.getElementById('submitBtn');
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const nameList = document.getElementById('nameList');

submitBtn.addEventListener('click', function(){
    const first = firstNameInput.value;
    const last = lastNameInput.value;

    if (first.trim() === "" || last.trim()=== ""){
        alert('Enter your something dickbag.');
        return;
    }

    const cardInfo = document.createElement('div');
    cardInfo.className = 'cardInfo';

    cardInfo.innerHTML= `
    <p>${first} ${last}</p>
    <div class="fate-buttons">
    <button class="eradicate">Eradicate</button>
    <button class="spare">Spare</button>
    </div>
    `

    cardInfo.querySelector('.eradicate').addEventListener('click', function(){
        cardInfo.remove();
    })

    cardInfo.querySelector('.spare').addEventListener('click', function(){
        cardInfo.style.textDecoration = 'line-through';
        cardInfo.style.opacity = '0.5';
    })

    nameList.appendChild(cardInfo);
    firstNameInput.value = "";
    lastNameInput.value = "";
    



});

