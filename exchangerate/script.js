const currency_1=document.querySelector('#currency-one')
const currency_2=document.querySelector('#currency-two')
const amount_one=document.querySelector('#amount-one')
const amount_two=document.querySelector('#amount-two')

const rateEL=document.querySelector('rate')
const swapBtn=document.querySelector('.btn')

const calculate=()=>{
    var currency_one=currency_1.value
    var currency_two=currency_2.value
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`).then((res)=>{
        res.json().then((data)=>{
            //console.log(data)
        
            currency_two=data.rates[currency_two]
            amount_two.value=currency_two*amount_one.value
        })
    })
}

swapBtn.addEventListener('click',()=>{
    var temp=currency_1.value;
    currency_1.value=currency_2.value;
    currency_2.value=temp;

    calculate();
})
calculate()
currency_1.addEventListener('change',calculate)
currency_2.addEventListener('change',calculate)
amount_one.addEventListener('input',calculate)
amount_two.addEventListener('input',calculate)
