
var time = ""
window.onload = time = setCountdown()

async function setCountdown() {
    const response = await fetch('http://localhost:5000/is_on_election_time', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    return data
}
time.then(function (result) {
    if (result.hasOwnProperty('data')) {
        var d = new Date(result.data.period_date);
        var s = result.data.period_start_time
        document.getElementById("clockdiv").style.display = "block";
        document.getElementById('sub').innerHTML = "Election Countdown Clock"
        var splitted = s.split(":")
        d.setHours(splitted[0])
        d.setMinutes(splitted[1])
        initializeClock('clockdiv', d);
    } else {
        if (result.message == "Election Started") {
            document.getElementById('sub').innerHTML = result.message;
            document.getElementById("EnterElection").style.display = "block";
        }
        else {
            document.getElementById('sub').innerHTML = result.message;
        }
    }
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }
    function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

})


$('#verifyID').on("submit", async (event) => {
    event.preventDefault();
    const id = $('#studId').val()
    const college = $('#colleges').val()
    if (id.length == 0) {
        Swal.fire({
            icon: "error",
            allowOutsideClick: false,
            title: "Please Enter Student ID"
        })
    }
    if (college.length == 0) {
        Swal.fire({
            icon: "error",
            allowOutsideClick: false,
            title: "Please Select College"
        })

    } else {
        const response = await fetch('http://localhost:5000/student_has_voted/' + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        if (response.ok) {
            sessionStorage.setItem("User ID", id)
            sessionStorage.setItem("College", college)
            Swal.fire({
                icon: "success",
                title: "ID verified you may now vote.",
                allowOutsideClick: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Enter'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "index.html"
                }
            })
        } else {
            Swal.fire({
                icon: "error",
                title: data.message
            })
        }
    }
})