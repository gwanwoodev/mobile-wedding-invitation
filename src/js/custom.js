document.addEventListener("DOMContentLoaded", () => {
    let weddingDayDOM = document.querySelector(".dday__notice");
    const weddingDay = getWeddingDay();
    weddingDayDOM.innerHTML = `* 예식일이 ${weddingDay}일 남았습니다.`;

    Kakao.init("6e41fce061bf1767e40b8d6ea117dc53");



});

const getWeddingDay = () => {
    const today = new Date();
    const dateString = "2020-08-30";
    const dateArray = dateString.split("-");
    const dateObj = new Date(dateArray[0], Number(dateArray[1]) - 1, dateArray[2]);
    const betweenDay = (today.getTime() - dateObj.getTime()) / 1000 / 60 / 60 / 24;
    return Math.abs(Math.floor(betweenDay));
}

const kakaoNaviStart = () => {
    Kakao.Navi.start({
        name: "드메르웨딩홀",
        x: 126.821766631361,
        y: 35.2080331503099,
        coordType: 'wgs84'
    });
}

let audioStatus = true;

const audioControl = () => {
    audioStatus = !audioStatus;
    let audioImageDOM = document.querySelector(".header__soundImg");
    let audioDOM = document.querySelector(".audio");
    let newAudioImage = audioStatus ? `./src/images/sound_on.gif` : `./src/images/sound_off.gif`;
    audioImageDOM.setAttribute("src", newAudioImage);

    if (audioStatus) {
        audioDOM.play();
    } else {
        audioDOM.pause();
    }
}