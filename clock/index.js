updateClock();
setInterval(updateClock, 1000);

    function updateClock(){

        let date = new Date();
        const clockHour = document.getElementById("hrs").innerHTML = getHour(date);
        const clockMinutes = document.getElementById("min").innerHTML = getMinute(date);
        const clockSec = document.getElementById("sec").innerHTML = getSec(date);

        function getHour(date){
            let hour = date.getHours();

            hour = (hour % 12) || 12;
            hour = addZeroes(hour);

            return `${hour}`
        }

        function getMinute(date){
            let minute = date.getMinutes();

            minute = addZeroes(minute);

            return `${minute}`
        }

        function getSec(date){
            let second = date.getSeconds();

            second = addZeroes(second);

            return `${second}`
        }

        function addZeroes(time){
            time = time.toString();
            return time.length < 2 ? "0" + time : time;
        }   
     }