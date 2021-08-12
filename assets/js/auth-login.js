
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
        const timeinterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            if (Math.sign(t.days) != -1 || Math.sign(t.hours) != -1 || Math.sign(t.minutes) != -1 ||
                Math.sign(t.seconds) != -1) {
                document.getElementById("clockdiv").style.display = "block";
                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                    document.getElementById('sub').innerHTML = "Election Started";
                    document.getElementById("clockdiv").style.display = "none";
                    document.getElementById("EnterElection").style.display = "block";
                }
            } else {
                document.getElementById('sub').innerHTML = "Election Ended";
                clearInterval(timeinterval);
            }
        }
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
        const response = await fetch('http://localhost:5000/student_vote_login/' + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        if (response.ok) {
            sessionStorage.setItem("User ID", id)
            sessionStorage.setItem("College", college)
            sessionStorage.setItem("Token", data.token)
            Swal.fire({
                icon: "success",
                title: "ID verified you may now vote.",
                allowOutsideClick: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Enter'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const response = await fetch('http://localhost:5000/is_on_election_time', {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    const data = await response.json();
                    if (data.message == "Election Started") {
                        window.location.href = "index.html"
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Election Ended",
                            allowOutsideClick: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Reload'
                        }).then(() => {
                            location.reload();
                        })
                    }
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