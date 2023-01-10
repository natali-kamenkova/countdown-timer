const day = document.querySelector('#day');
const hrs = document.querySelector('#hrs');
const min= document.querySelector('#min');
const sec= document.querySelector('#sec');
const currentYear = new Date().getFullYear();
console.log(currentYear);

const newYear = new Date(`1 Jan ${currentYear+1} 00:00:00`)
console.log(newYear)

function countDownTimer () {
  const todayDate = Date.now();
  console.log(todayDate)
  //получим разницу между новым годом и текущей датой Unix
  const gap = newYear-todayDate;
    const d = Math.floor(gap/1000/60/60/24);
    const h = Math.floor((gap/1000/60/60)%24);
    const m = Math.floor((gap/1000/60)%60);
    const s = Math.floor((gap/1000)%60);
    day.innerHTML = d < 10 ? "0" + d : d;
    hrs.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(countDownTimer, 1000);
