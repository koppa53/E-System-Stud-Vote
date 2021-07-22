$(document).ready(function () {

    let pos = new Array()
    allactivePositions()
    async function allactivePositions() {
        const response = await fetch('http://localhost:5000/all_active_USC_position', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        data.forEach(function (v) {
            pos.push(v.position_max_vote)
        })
    }
    let data = loadcandidate()
    async function loadcandidate() {
        const response = await fetch('http://localhost:5000/all_usc_ballot_candidate_on_list', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        return data;
    }


    //load USC CANDIDATES data to webpage
    data.then(function (result) {
        var currentposition = ""
        var count = 0
        var rowCount = 0;
        var lastUSCBallotRow = result.length
        var ballotcounter = 0
        result.forEach(function (v) {
            if (currentposition != v.usc_candidate_position) {
                if (rowCount != 0) {
                    $("#" + rowCount).append(
                        `
                        <div class="col">
                            <br>
                            <br>
                            <input type="radio" id="`+ currentposition + "_usc" + `" class="radio-button" value="ABSTAINED_ABSTAINED_` + currentposition + "_-1_USC_" + v.usc_ballot_election_year + `" onclick="disableCandidates(` + rowCount + `)">
                            <label for="`+ currentposition + `"><b>ABSTAIN</b></label>
                        </div>
                        <br>
                        </div>
                        </form>
                        <hr class="divider">
                    `
                    )
                }
                rowCount++
                count = 0
                currentposition = v.usc_candidate_position
                var binary = '';
                var bytes = new Uint8Array(v.usc_candidate_photo.data);
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                $("#USCBALLOT").append(`
                    <br>
                    <form>
                    <div class="box-header with-border">
                        <h4 class="box-title"><b>USC `+ currentposition + `</b></h4>
                        <p> Please select only <b>`+ pos[rowCount - 1] + ` candidate</b>:
                        <button type="reset" class="btn btn-sm btn-outline-danger" value="reset" onclick="enableCandidates(`+ rowCount + `)"><i class="fa fa-refresh"></i> Reset</button>
                        </p> 
                    </div>
                    <br>
                    <div class="row" id="`+ rowCount + `">
                        <div class="col">
                        <label for="`+ v.usc_candidate_position + "_" + count + `">
                        <div class="avatar">
                            <img class="shadow border border-3 border-secondary rounded-circle" src="data:image/png;base64,` + binary + `" alt="" srcset="" onclick="null" style=" height: 100px; width: 100px;">
                            <span class="avatar-status" style=" height: 2rem; width: 2rem; color:white; padding-top:3px; background-color:#1E95DB;">#` + count + `</span>
                        </div>
                        <br><input type="radio" class="radio-button" id= "`+ v.usc_candidate_position + "_" + count + `" value="` + v.usc_candidate_first_name + "_" + v.usc_candidate_last_name + "_" + v.usc_candidate_position + "_" + v.usc_candidate_id + "_USC_" + v.usc_ballot_election_year + `">
                        <span class="cname clist"><b>` + v.usc_candidate_last_name.toUpperCase() + "</b>, " + v.usc_candidate_first_name + ` </span><br>
                        <span class="cpolparty clist">`+ "- " + v.usc_candidate_party + `</span>
                        </label>
                        </div>
                `
                );
                count++;
            } else {
                var binary = '';
                var bytes = new Uint8Array(v.usc_candidate_photo.data);
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                $("#" + rowCount).append(`
                    <div class="col">
                    <label for="`+ v.usc_candidate_position + "_" + count + `">
                    <div class="avatar">
                        <img class="shadow border border-3 border-secondary rounded-circle" src="data:image/png;base64,` + binary + `" alt="" srcset="" style=" height: 100px; width: 100px" >
                        <span class="avatar-status" style=" height: 2rem; width: 2rem; color:white; padding-top:3px; background-color:#1E95DB;">#` + count + `</span>
                    </div>
                    <br><input type="radio" class="radio-button" id= "`+ v.usc_candidate_position + "_" + count + `" value="` + v.usc_candidate_first_name + "_" + v.usc_candidate_last_name + "_" + v.usc_candidate_position + "_" + v.usc_candidate_id + "_USC_" + v.usc_ballot_election_year + `">
                    <span class="cname clist"><b>` + v.usc_candidate_last_name.toUpperCase() + "</b>, " + v.usc_candidate_first_name + ` </span><br>
                    <span class="cpolparty clist">`+ "- " + v.usc_candidate_party + `</span>
                    </label>
                    </div>
                `
                );
                count++;
            }
            if (lastUSCBallotRow - 1 == ballotcounter) {
                $("#" + rowCount).append(
                    `
                    <div class="col">
                        <br>
                        <br>
                        <input type="radio" id="`+ currentposition + "_usc" + `" class="radio-button" value="ABSTAINED_ABSTAINED_` + currentposition + "_-1_USC_" + v.usc_ballot_election_year + `" onclick="disableCandidates(` + rowCount + `)">
                        <label for="`+ currentposition + `"><b>ABSTAIN</b></label>
                    </div>
                    </div>
                    <hr class="divider">
                `
                )
            }
            ballotcounter++;
        })
    })

})