const container=document.querySelector('.container')
const seats=document.querySelectorAll('.row .seat:not(.occupied)')
const count=document.getElementById('count')
const total=document.getElementById('total')
const movieSelect=document.getElementById('movie')

populateUI()
var ticketPrice=parseInt(movieSelect.value);


function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex)
    localStorage.setItem('selectedMoviePrice',moviePrice)
}


movieSelect.addEventListener('change',(e)=>{
    ticketPrice=+e.target.value
    
    setMovieData(e.target.selectedIndex,e.target.value)
    updateSelectedCount()
})


container.addEventListener("click",(e)=>{

    if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }

})

const updateSelectedCount=()=>{
    const selectedSeats=document.querySelectorAll('.row .seat.selected');

    const seatsIndex=[...selectedSeats].map((seat)=>{
        return [...seats].indexOf(seat)
    })
    
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    
    const selectedSeatsCount=selectedSeats.length
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount*ticketPrice
}

function populateUI(){
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'))
    if(selectedSeats!==null&&selectedSeats.length>0)
    seats.forEach((seat,index)=>{
        if(selectedSeats.indexOf(index)>-1){
            seat.classList.add('selected')
        }
    })
const selecetedMovieIndex=localStorage.getItem('selectedMovieIndex')
if(selecetedMovieIndex!==null)
{
     movieSelect.selectedIndex=selecetedMovieIndex
}
 
}
const selectedMoviePrice=localStorage.getItem('selectedMoviePrice')
if(selectedMoviePrice!==null){
    movieSelect.selectedPrice=selectedMoviePrice
}

updateSelectedCount()