let viloyat = document.querySelector('.viloyat');
let selectedRegion = document.querySelector('#region');


function setTimes(reg){
    fetch(`https://islomapi.uz/api/present/day?region=${reg}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        document.querySelector('.time1').textContent = data.times.tong_saharlik
        document.querySelector('.time2').textContent = data.times.quyosh
        document.querySelector('.time3').textContent = data.times.peshin
        document.querySelector('.time4').textContent = data.times.asr
        document.querySelector('.time5').textContent = data.times.shom_iftor
        document.querySelector('.time6').textContent = data.times.hufton
    })
}

setTimes(selectedRegion.value)

selectedRegion.addEventListener('change', ()=>{
    viloyat.textContent = selectedRegion.value
    setTimes(selectedRegion.value)
})
