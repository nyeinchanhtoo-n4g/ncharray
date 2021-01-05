let userincomeDataEL = document.getElementById('userincomeData');
let doubleIncomeEL = document.getElementById('doubleIncomeBtn');
let showMillionEL = document.getElementById('showMillionBtn');
let sortRichesEL = document.getElementById('sortRichesBtn');
let totalIncomeEL = document.getElementById('totalIncomeBtn');
let searchEL = document.getElementById('searchInput');

let users = [
    {
        "name": "Leanne Graham",
    },
    {
        "name": "Ervin Howell",
    },
    {
        "name": "Clementine Bauch",
    },
    {
        "name": "Patricia Lebsack",
    },
    {
        "name": "Chelsey Dietrich",
    },
    {
        "name": "Dennis Schulist",
    },
    {
        "name": "Kurtis Weissnat",
    },
    {
        "name": "Nyein Chan Htoo",
    },
    {
        "name": "Glenna Reichert",
    },
    {
        "name": "Clementina DuBuque",
    }
];

users = users.map((user) => {
    return {
        name:user.name,
        income:Math.floor(Math.random() * 1000000)
    }
});

function updateDom (userData) {
    userincomeDataEL.innerHTML =`
        <div class = "d-flex justify-content-between mb-2">
            <div> User </div>
            <div class = "pr-3"> Income </div> 
        </div>
        <div>
            <hr>
        </div>
    `;
    userData.forEach((user) => {
        const domElement = document.createElement('div');
        domElement.classList.add('d-flex', 'justify-content-between','mb-2');
        domElement.innerHTML = `
            <div>${user.name}</div>
            <div class="pr-3">${formatNumber(user.income)}</div>
        `;

    userincomeDataEL.appendChild(domElement); 
    });
}

function formatNumber(num){
    return Number(num).toLocaleString('mmk')
}

updateDom(users);

doubleIncomeEL.addEventListener('click',() => {
    users = users.map((user)=>{
        return {
            name: user.name,
            income : user.income *2
        }
    });
    updateDom(users);
});

showMillionEL.addEventListener('click', () => {
    million = users.filter((user)=>{
        return user.income > 1000000
    });
    updateDom(million);
});

sortRichesEL.addEventListener('click', () => {
    let sort = users.sort((sf,sl) => {
        return sl.income-sf.income
    });
    updateDom(sort);
});

totalIncomeEL.addEventListener('click', () => {
    let total = users.reduce((all,user)=>(all += user.income),0);
    let totalelement = document.createElement('div');
    totalelement.classList.add('d-flex', 'justify-content-between', 'mt-4');
    totalelement.innerHTML = `
            <div>Total</div>
            <div class="pr-3">${formatNumber(total)}</div>
    `;
    userincomeDataEL.appendChild(totalelement);
});

searchEL.addEventListener('input', (e) => {
    let shUser = users;
    if (e.target.value !== ''){
        let search = e.target.value.toLowerCase();
        shUser = shUser.filter(v => {
        return v.name.toLocaleLowerCase().indexOf(search) > -1;
    });
    }
    updateDom(shUser);
});