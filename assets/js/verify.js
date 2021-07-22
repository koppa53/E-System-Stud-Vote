function verify(){
    var verify = document.getElementById('verify');

    var time = new Date();
    verify.innerHTML = "<p><h6>Time Voted : " + 
          ("0" + time.getHours()).slice(-2) + ':' + 
          ("0" + time.getMinutes()).slice(-2) + ':' + 
          ("0" + time.getSeconds()).slice(-2) + "</h6>";
    studName.innerHTML = "<h6>Student Name : " + document.getElementById("studname").value + "</h6></p>" ;
    studId.innerHTML = "<h6>Student ID : " + document.getElementById("studid").value + "</h6></p>" ;
    studEmail.innerHTML = "<h6>Student Email : " + document.getElementById("studemail").value + "</h6></p>" ;


//-------------------------------------------------FOR USC VOTING SECTION----------------------------------

                        //president
                        var presEle = document.getElementsByName('prescandidate');
                        var checkpresEle = document.querySelector('input[name="prescandidate"]:checked');
                            for(i=0; i<presEle.length;i++){
                                if(presEle[i].checked){
                                    studVoteuPres.innerHTML = "USC President : " + presEle[i].value;
                                }
                            }
                        
                        //vice president
                        var vpresEle = document.getElementsByName('vprescandidate');
                        var checkvpresEle = document.querySelector('input[name="vprescandidate"]:checked');
                        for(i=0; i<vpresEle.length;i++){
                            if(vpresEle[i].checked){
                                    studVoteuvPres.innerHTML = "USC Vice-President : " + vpresEle[i].value;
                            }
                        }
                        //secretary
                        var secEle = document.getElementsByName('seccandidate');
                        var checksecEle = document.querySelector('input[name="seccandidate"]:checked');  
                        for(i=0; i<secEle.length;i++){
                            if(secEle[i].checked){
                                    studVoteuSec.innerHTML = "USC Secretary : " + secEle[i].value;
                            }
                        }
                        //treasurer
                        var treasEle = document.getElementsByName('treascandidate');
                        var checktreasEle = document.querySelector('input[name="treascandidate"]:checked');
                        for(i=0; i<treasEle.length;i++){
                            if(treasEle[i].checked){
                                    studVoteuTreas.innerHTML = "USC Treasurer : " + treasEle[i].value;
                            }
                        }
                        //auditor
                        var audEle = document.getElementsByName('audcandidate');
                        var checkaudEle = document.querySelector('input[name="audcandidate"]:checked');
                        for(i=0; i<audEle.length;i++){
                            if(audEle[i].checked){
                                    studVoteuAud.innerHTML = "USC Auditor : " + audEle[i].value;
                            }
                        }
                        //pio
                        var pioEle = document.getElementsByName('piocandidate');
                        var checkpioEle = document.querySelector('input[name="piocandidate"]:checked');
                        for(i=0; i<pioEle.length;i++){
                            if(pioEle[i].checked){
                                    studVoteuPio.innerHTML = "USC P.I.O. : " + pioEle[i].value;
                            }
                        }
                        //business manager
                        var bmEle = document.getElementsByName('bmcandidate');
                        var checkbmEle = document.querySelector('input[name="bmcandidate"]:checked');
                        for(i=0; i<bmEle.length;i++){
                            if(bmEle[i].checked){
                                    studVoteuBm.innerHTML = "USC Business Manager : " + bmEle[i].value;
                            }
                        }
                        //college representative
                        var repEle = document.getElementsByName('repcandidate');
                        var checkrepEle = document.querySelector('input[name="repcandidate"]:checked');
                        for(i=0; i<repEle.length;i++){
                            if(repEle[i].checked){
                                    studVoteuRep.innerHTML = "USC College Representative : " + repEle[i].value;
                            }
                        }

//-----------------------------------------------FOR CSC VOTING SECTION-------------------------------------------

                        //president
                        var cpresEle = document.getElementsByName('cprescandidate');
                        var checkcpresEle = document.querySelector('input[name="cprescandidate"]:checked');
                            for(i=0; i<cpresEle.length;i++){
                                if(cpresEle[i].checked){
                                    studVotecPres.innerHTML = "CSC President : " + cpresEle[i].value;
                                }
                            }
                        //vice president
                        var cvpresEle = document.getElementsByName('cvprescandidate');
                        var checkcvpresEle = document.querySelector('input[name="cvprescandidate"]:checked');
                        for(i=0; i<cvpresEle.length;i++){
                            if(cvpresEle[i].checked){
                                    studVotecvPres.innerHTML = "CSC Vice-President : " + cvpresEle[i].value;
                            }
                        }
                        //secretary
                        var csecEle = document.getElementsByName('cseccandidate');
                        var checkcsecEle = document.querySelector('input[name="cseccandidate"]:checked');  
                        for(i=0; i<csecEle.length;i++){
                            if(csecEle[i].checked){
                                    studVotecSec.innerHTML = "CSC Secretary : " + csecEle[i].value;
                            }
                        }
                        //treasurer
                        var ctreasEle = document.getElementsByName('ctreascandidate');
                        var checkctreasEle = document.querySelector('input[name="ctreascandidate"]:checked');
                        for(i=0; i<ctreasEle.length;i++){
                            if(ctreasEle[i].checked){
                                    studVotecTreas.innerHTML = "CSC Treasurer : " + ctreasEle[i].value;
                            }
                        }
                        //auditor
                        var caudEle = document.getElementsByName('caudcandidate');
                        var checkcaudEle = document.querySelector('input[name="caudcandidate"]:checked');
                        for(i=0; i<caudEle.length;i++){
                            if(caudEle[i].checked){
                                    studVotecAud.innerHTML = "CSC Auditor : " + caudEle[i].value;
                            }
                        }
                        //pio
                        var cpioEle = document.getElementsByName('cpiocandidate');
                        var checkcpioEle = document.querySelector('input[name="cpiocandidate"]:checked');
                        for(i=0; i<cpioEle.length;i++){
                            if(cpioEle[i].checked){
                                    studVotecPio.innerHTML = "CSC P.I.O. : " + cpioEle[i].value;
                            }
                        }
                        //business manager
                        var cbmEle = document.getElementsByName('cbmcandidate');
                        var checkcbmEle = document.querySelector('input[name="cbmcandidate"]:checked');
                        for(i=0; i<cbmEle.length;i++){
                            if(cbmEle[i].checked){
                                    studVotecBm.innerHTML = "CSC Business Manager : " + cbmEle[i].value;
                            }
                        }
                        //college representative
                        var crepEle = document.getElementsByName('crepcandidate');
                        var checkcrepEle = document.querySelector('input[name="crepcandidate"]:checked');
                        for(i=0; i<crepEle.length;i++){
                            if(crepEle[i].checked){
                                    studVotecRep.innerHTML = "CSC College Representative : " + crepEle[i].value;
                            }
                        }





}
/*
            <!----------------Voting Section------------------->
<form>
                        <center>
                          <div class="col-md-3 col-6" style="width: 70%; margin: 0 auto;">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Student Information:</h4>
                                  <div class="card-content">
                                      <div class="card-body">
                                          <form class="form form-horizontal">
                                              <div class="form-body">
                                                  <div class="row">
                                                     Student Name:
                                                     <input type="text" placeholder="Student Name" id="studname" style="width:400px"><br>
                                                     Student ID:
                                                     <input type="text" placeholder="Student Id" id="studid" style="width: 400px"><br>
                                                     Student Email:
                                                     <input type="text" placeholder="Student Email" id="studemail" style="width: 400px">
                                                     
                        </center>

                    <center><p><h2 style="color: orange; background-color: #ccfbff; border-radius: 15px">Voting Section For USC Positions</h2></p></center>

                <div class="divider divider-center">
                    <div class="divider-text"><h4>For USC President</h4></div><br>

                                <input type="radio" name="prescandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="prescandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="prescandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="prescandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="prescandidate" id="abspres" class="radio-button" value="abstained"><label for="abspres">--abstain--</label><br>
</div>

                <div class="divider divider-center">
                    <div class="divider-text"><h4>For USC Vice-President</h4></div><br>
                                <input type="radio" name="vprescandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="vprescandidate" id="can2" class="radio-button" value="candidate2"><label for="can1">Candidate 2</label><br>
                                <input type="radio" name="vprescandidate" id="can3" class="radio-button" value="candidate3"><label for="can1">Candidate 3</label><br>
                                <input type="radio" name="vprescandidate" id="can4" class="radio-button" value="candidate4"><label for="can1">Candidate 4</label><br>
                                <input type="radio" name="vprescandidate" id="absvpres" class="radio-button" value="abstained"><label for="absvpres">--abstain--</label><br>

</div>                <div class="divider divider-center">
                    <div class="divider-text"><h4>For USC Secretary</h4></div><br>
                                <input type="radio" name="seccandidate" id="can1" class="radio-button" value="candidate1" checked=""><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="seccandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="seccandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="seccandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="seccandidate" id="abssec" class="radio-button" value="abstained"><label for="abssec">--abstain--</label><br>

</div>                <div class="divider divider-center">
                    <div class="divider-text"><h4>For USC Treasurer</h4></div><br>
                                <input type="radio" name="treascandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="treascandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="treascandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="treascandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="treascandidate" id="abstreas" class="radio-button" value="abstained"><label for="abstreas">--abstain--</label><br>

</div>
                <div class="divider divider-center">
                    <div class="divider-text"><h4>For USC Auditor</h4></div><br>
                                <input type="radio" name="audcandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="audcandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="audcandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="audcandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="audcandidate" id="absaud" class="radio-button" value="abstained"><label for="absaud">--abstain--</label><br>

</div>          <div class="divider divider-center">
                    <div class="divider-text"><h4>For USC P.I.O.</h4></div><br>
                                <input type="radio" name="piocandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="piocandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="piocandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="piocandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="piocandidate" id="abspio" class="radio-button" value="abstained"><label for="abspio">--abstain--</label><br>

</div>          <div class="divider divider-center">
                    <div class="divider-text"><h4>For USC Business Manager</h4></div><br>
                                <input type="radio" name="bmcandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="bmcandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="bmcandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="bmcandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="bmcandidate" id="absbm" class="radio-button" value="abstained"><label for="absbm">--abstain--</label><br>

</div>          <div class="divider divider-center">
                    <div class="divider-text"><h4>For USC College Representative</h4></div><br>
                                <input type="radio" name="repcandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="repcandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="repcandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="repcandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="repcandidate" id="absrep" class="radio-button" value="abstained"><label for="absrep">--abstain--</label><br>
</div>


<!----------------------------------------------------------------CSC VOTING SECTION---------------------------------------------------------------->
                    <center><p><h2 style="color: orange; background-color: #ccfbff; border-radius: 15px">Voting Section For USC Positions</h2></p></center>


                <div class="divider divider-center">
                    <div class="divider-text"><h4>For CSC President</h4></div><br>

                                <input type="radio" name="cprescandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="cprescandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="cprescandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="cprescandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="cprescandidate" id="abspres" class="radio-button" value="abstained"><label for="abspres">--abstain--</label><br>
</div>

                <div class="divider divider-center">
                    <div class="divider-text"><h4>For CSC Vice-President</h4></div><br>
                                <input type="radio" name="cvprescandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="cvprescandidate" id="can2" class="radio-button" value="candidate2"><label for="can1">Candidate 2</label><br>
                                <input type="radio" name="cvprescandidate" id="can3" class="radio-button" value="candidate3"><label for="can1">Candidate 3</label><br>
                                <input type="radio" name="cvprescandidate" id="can4" class="radio-button" value="candidate4"><label for="can1">Candidate 4</label><br>
                                <input type="radio" name="cvprescandidate" id="absvpres" class="radio-button" value="abstained"><label for="absvpres">--abstain--</label><br>

</div>                <div class="divider divider-center">
                    <div class="divider-text"><h4>For CSC Secretary</h4></div><br>
                                <input type="radio" name="cseccandidate" id="can1" class="radio-button" value="candidate1" checked=""><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="cseccandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="cseccandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="cseccandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="cseccandidate" id="abssec" class="radio-button" value="abstained"><label for="abssec">--abstain--</label><br>

</div>                <div class="divider divider-center">
                    <div class="divider-text"><h4>For CSC Treasurer</h4></div><br>
                                <input type="radio" name="ctreascandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="ctreascandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="ctreascandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="ctreascandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="ctreascandidate" id="abstreas" class="radio-button" value="abstained"><label for="abstreas">--abstain--</label><br>

</div>
                <div class="divider divider-center">
                    <div class="divider-text"><h4>For CSC Auditor</h4></div><br>
                                <input type="radio" name="caudcandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="caudcandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="caudcandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="caudcandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="caudcandidate" id="absaud" class="radio-button" value="abstained"><label for="absaud">--abstain--</label><br>

</div>          <div class="divider divider-center">
                    <div class="divider-text"><h4>For CSC P.I.O.</h4></div><br>
                                <input type="radio" name="cpiocandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="cpiocandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="cpiocandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="cpiocandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="cpiocandidate" id="abspio" class="radio-button" value="abstained"><label for="abspio">--abstain--</label><br>

</div>          <div class="divider divider-center">
                    <div class="divider-text"><h4>For CSC Business Manager</h4></div><br>
                                <input type="radio" name="cbmcandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="cbmcandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="cbmcandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="cbmcandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="cbmcandidate" id="absbm" class="radio-button" value="abstained"><label for="absbm">--abstain--</label><br>

</div>          <div class="divider divider-center">
                    <div class="divider-text"><h4>For CSC College Representative</h4></div><br>
                                <input type="radio" name="crepcandidate" id="can1" class="radio-button" value="candidate1" checked="checked"><label for="can1">Candidate 1</label><br>
                                <input type="radio" name="crepcandidate" id="can2" class="radio-button" value="candidate2"><label for="can2">Candidate 2</label><br>
                                <input type="radio" name="crepcandidate" id="can3" class="radio-button" value="candidate3"><label for="can3">Candidate 3</label><br>
                                <input type="radio" name="crepcandidate" id="can4" class="radio-button" value="candidate4"><label for="can4">Candidate 4</label><br>
                                <input type="radio" name="crepcandidate" id="absrep" class="radio-button" value="abstained"><label for="absrep">--abstain--</label><br>
</div>




                                <center><button type="button" class="btn btn-outline-primary block rounded-pill" data-bs-toggle="modal"
                                        data-bs-target="#default" onclick="verify()">
                                        Verify Vote
                                    </button></center>

                                    <!--Verify Modal-->
                                    <div class="modal fade text-left" id="default" tabindex="-1" role="dialog"
                                        aria-labelledby="myModalLabel1" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-scrollable" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="modal-title" id="myModalLabel1"><i class="bi bi-info-circle" style="font-size: 50px">Verify the votes before submitting</i></h4>
                                                    <button type="button" class="close rounded-pill"
                                                        data-bs-dismiss="modal" aria-label="Close">
                                                        <i data-feather="x"></i>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                        <p id="verify"></p>
                                                        <script src="verify.js"></script>
                                                        <div id="studName"></div>
                                                        <div id="studId"></div>
                                                        <div id="studEmail">                                                            
                                                            </div><div class="divider divider-center">
                                                                <div class="divider-text"><h4>Votes</h4></div>                                                            
                                                            </div><div class="divider divider-center">
                                                                <div class="divider-text"><h6>For USC Positions</h6></div>

                                                        <div id="studVoteuPres" style="text-align: left;"></div>
                                                        <div id="studVoteuvPres" style="text-align: left;"></div>
                                                        <div id="studVoteuSec" style="text-align: left;"></div>
                                                        <div id="studVoteuTreas" style="text-align: left;"></div>
                                                        <div id="studVoteuAud" style="text-align: left;"></div>
                                                        <div id="studVoteuPio" style="text-align: left;"></div>
                                                        <div id="studVoteuBm" style="text-align: left;"></div>
                                                        <div id="studVoteuRep" style="text-align: left;"></div>


                                                            </div><div class="divider divider-center">
                                                                <div class="divider-text"><h6>For CSC Positions</h6></div>

                                                        <div id="studVotecPres" style="text-align: left;"></div>
                                                        <div id="studVotecvPres" style="text-align: left;"></div>
                                                        <div id="studVotecSec" style="text-align: left;"></div>
                                                        <div id="studVotecTreas" style="text-align: left;"></div>
                                                        <div id="studVotecAud" style="text-align: left;"></div>
                                                        <div id="studVotecPio" style="text-align: left;"></div>
                                                        <div id="studVotecBm" style="text-align: left;"></div>
                                                        <div id="studVotecRep" style="text-align: left;"></div>
                                                    

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn" data-bs-dismiss="modal">
                                                        <i class="bx bx-x d-block d-sm-none"></i>
                                                        <span class="d-none d-sm-block">Back</span>
                                                    </button>
                                                        <div class="col-md-4 col-10">
                                                    <button id="success" name="button" style="font-size: 20px" class="btn btn-outline-success btn-lg btn-block rounded-pill" data-bs-dismiss="modal">Submit
                                                    </button>
                                                </div>
                                            </div></div></div></div></div></div></div></form>
*/