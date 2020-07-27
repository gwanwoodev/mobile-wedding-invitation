document.addEventListener("DOMContentLoaded", () => {
    let weddingDayDOM = document.querySelector(".dday__notice");
    const weddingDay = getWeddingDay();
    weddingDayDOM.innerHTML = `* 예식일이 ${weddingDay}일 남았습니다.`;
});

const getWeddingDay = () => {
    const today = new Date();
    const dateString = "2020-08-30";
    const dateArray = dateString.split("-");
    const dateObj = new Date(dateArray[0], Number(dateArray[1]) - 1, dateArray[2]);
    const betweenDay = (today.getTime() - dateObj.getTime()) / 1000 / 60 / 60 / 24;
    return Math.abs(Math.floor(betweenDay));
}