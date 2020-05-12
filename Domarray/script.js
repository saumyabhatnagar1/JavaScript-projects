const main =document.getElementById('main')
const sort =document.getElementById('sort')
const add_user =document.getElementById('add_user')
const show_millionaires =document.getElementById('show_millionaires')
const double =document.getElementById('double')
const calculate =document.getElementById('calculate_wealth')

let data=[];

const getRandomUser=async ()=>{
    const res= await fetch('https://randomuser.me/api/')
    const data= await res.json()
    console.log(data)
    const user=data.results[0]
    const newUser={
        name:`${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random()*100000)
    }
    console.log(newUser)
    addData(newUser)
}

const addData=(newUser)=>{
    data.push(newUser)
    updateDom();
    console.log(data)
}
const updateDom=(providedData=data)=>{
    main.innerHTML='<h2><strong>Person</strong>Wealth</h2>'

    providedData.forEach((user)=>{
        const element=document.createElement('div')
        element.classList.add('person')
        element.innerHTML=`<strong>${user.name}</strong>${user.money}`
        main.appendChild(element);
    })
}
const doubleMoney=()=>{
    data=data.map((user)=>{
        return { ...user,money:user.money*2}
    })
    updateDom()
}
const sortfun=()=>{
    data.sort((a,b)=>{
        return b.money-a.money
    })
    updateDom()
}
const showMillion=()=>{
    data=data.filter((user)=>{
        return user.money>100000; 
    })
    updateDom()
}

const calculateWealth=()=>{
    const wealth=data.reduce((acc,user)=>{
        return acc+=user.money
    },0)
    
    const wealthEl=document.createElement('div')
    wealthEl.innerHTML=`<h3>Total Wealth<strong>${wealth}</strong></h3>`
    main.appendChild(wealthEl)
}

double.addEventListener('click',doubleMoney)
add_user.addEventListener('click',getRandomUser)
sort.addEventListener('click',sortfun)
show_millionaires.addEventListener('click',showMillion)
calculate.addEventListener('click',calculateWealth)
getRandomUser()
getRandomUser()