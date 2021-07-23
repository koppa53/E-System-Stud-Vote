$(document).ready(function () {
    allactivePositionscsc()
    var college = sessionStorage.getItem("College")
    let poscsc = new Array()
    async function allactivePositionscsc() {
        const response = await fetch('http://localhost:5000/all_active_CSC_position', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        data.forEach(function (v) {
            poscsc.push(v.position_max_vote)
        })
    }
    async function loadcandidatecsc() {
        const response = await fetch('http://localhost:5000/college_csc_ballot_candidate_on_list/' + college, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        return data;
    }
    let datacsc = loadcandidatecsc()
    //load CSC CANDIDATES data to webpage
    datacsc.then(function (result) {
        var currentposition = ""
        var count = 0
        var rowCount = 10;
        var lastCSCBallotRow = result.length
        var ballotcounter = 0
        result.forEach(function (v) {
            if (currentposition != v.csc_candidate_position) {
                if (rowCount != 0) {
                    $("#" + rowCount).append(
                        `
                            <div class="col">
                                <br>
                                <br>
                                <input type="radio" id="`+ currentposition + "_csc" + `" class="radio-button" value="ABSTAINED_ABSTAINED_` + currentposition + "_-2_CSC_" + v.csc_ballot_election_year + `" onclick="disableCandidates(` + rowCount + `)">
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
                currentposition = v.csc_candidate_position
                var binary = '';
                var bytes = new Uint8Array(v.csc_candidate_photo.data);
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                $("#CSCBALLOT").append(`
                        <br>
                        <form>
                        <div class="box-header with-border">
                            <h4 class="box-title"><b>CSC `+ currentposition + `</b></h4>
                            <p> Please select only <b>`+ poscsc[rowCount - 11] + ` candidate</b>:
                            <button type="reset" class="btn btn-sm btn-outline-danger" value="reset" onclick="enableCandidates(`+ rowCount + `)"><i class="fa fa-refresh"></i> Reset</button>
                            </p> 
                        </div>
                        <br>
                        <div class="row" id="`+ rowCount + `">
                            <div class="col">
                            <label for="`+ v.csc_candidate_position + "_" + count + "_" + "csc" + `">
                            <div class="avatar">
                                <img class="shadow border border-3 border-secondary rounded-circle" src="data:image/png;base64,` + binary + `" alt="" srcset="" onclick="null" style=" height: 100px; width: 100px" >
                                <span class="avatar-status" style=" height: 2rem; width: 2rem; color:white; padding-top:3px; background-color:#FB6F19;">#` + count + `</span>
                            </div>
                            <br><input type="radio" class="radio-button" id= "`+ v.csc_candidate_position + "_" + count + "_" + "csc" + `" value="` + v.csc_candidate_first_name + "_" + v.csc_candidate_last_name + "_" + v.csc_candidate_position + "_" + v.csc_candidate_id + "_CSC_" + v.csc_ballot_election_year + `">
                            <span class="cname clist"><b>` + v.csc_candidate_last_name.toUpperCase() + "</b>, " + v.csc_candidate_first_name + ` </span><br>
                            <span class="cpolparty clist">`+ "- " + v.csc_candidate_party + `</span>
                            </label>
                            </div>
                    `
                );
                count++;
            } else {
                var binary = '';
                var bytes = new Uint8Array(v.csc_candidate_photo.data);
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                $("#" + rowCount).append(`
                        <div class="col">
                        <label for="`+ v.csc_candidate_position + "_" + count + "_" + "csc" + `">
                        <div class="avatar">
                            <img class="shadow border border-3 border-secondary rounded-circle" src="data:image/png;base64,` + binary + `" alt="" srcset="" style=" height: 100px; width: 100px" >
                            <span class="avatar-status" style=" height: 2rem; width: 2rem; color:white; padding-top:3px; background-color:#FB6F19;">#` + count + `</span>
                        </div>
                        <br><input type="radio" class="radio-button" id= "`+ v.csc_candidate_position + "_" + count + "_" + "csc" + `" value="` + v.csc_candidate_first_name + "_" + v.csc_candidate_last_name + "_" + v.csc_candidate_position + "_" + v.csc_candidate_id + "_CSC_" + v.csc_ballot_election_year + `">
                        <span class="cname clist"><b>` + v.csc_candidate_last_name.toUpperCase() + "</b>, " + v.csc_candidate_first_name + ` </span><br>
                        <span class="cpolparty clist">`+ "- " + v.csc_candidate_party + `</span>
                        </label>
                        </div>
                    `
                );
                count++;
            }
            if (lastCSCBallotRow - 1 == ballotcounter) {
                $("#" + rowCount).append(
                    `
                        <div class="col">
                            <br>
                            <br>
                            <input type="radio" id="`+ currentposition + "_csc" + `" class="radio-button" value="ABSTAINED_ABSTAINED_` + currentposition + "_-2_CSC_" + v.csc_ballot_election_year + `" onclick="disableCandidates(` + rowCount + `)">
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