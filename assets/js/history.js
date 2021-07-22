function history(){
    var timeVoted = document.getElementById('timeVoted');

    var time = new Date();
    timeVoted.innerHTML = 
          ("0" + time.getHours()).slice(-2) + ':' + 
          ("0" + time.getMinutes()).slice(-2) + ':' + 
          ("0" + time.getSeconds()).slice(-2) + "";
    hisstudid.innerHTML = document.getElementById("studid").value;


//-------------------------------------------------FOR USC VOTING SECTION----------------------------------

                        //president
                        var hispresEle = document.getElementsByName('prescandidate');
                        var hischeckpresEle = document.querySelector('input[name="prescandidate"]:checked');
                            for(i=0; i<hispresEle.length;i++){
                                if(hispresEle[i].checked){
                                    hisstudVoteuPres.innerHTML = "USC President : " + hispresEle[i].value;
                                }
                            }
                        
                        //vice president
                        var hisvpresEle = document.getElementsByName('vprescandidate');
                        var hischeckvpresEle = document.querySelector('input[name="vprescandidate"]:checked');
                        for(i=0; i<hisvpresEle.length;i++){
                            if(hisvpresEle[i].checked){
                                    hisstudVoteuvPres.innerHTML = "USC Vice-President : " + hisvpresEle[i].value;
                            }
                        }
                        //secretary
                        var hissecEle = document.getElementsByName('seccandidate');
                        var hischecksecEle = document.querySelector('input[name="seccandidate"]:checked');  
                        for(i=0; i<hissecEle.length;i++){
                            if(hissecEle[i].checked){
                                    hisstudVoteuSec.innerHTML = "USC Secretary : " + hissecEle[i].value;
                            }
                        }
                        //treasurer
                        var histreasEle = document.getElementsByName('treascandidate');
                        var hischecktreasEle = document.querySelector('input[name="treascandidate"]:checked');
                        for(i=0; i<histreasEle.length;i++){
                            if(histreasEle[i].checked){
                                    hisstudVoteuTreas.innerHTML = "USC Treasurer : " + histreasEle[i].value;
                            }
                        }
                        //auditor
                        var hisaudEle = document.getElementsByName('audcandidate');
                        var hischeckaudEle = document.querySelector('input[name="audcandidate"]:checked');
                        for(i=0; i<hisaudEle.length;i++){
                            if(hisaudEle[i].checked){
                                    hisstudVoteuAud.innerHTML = "USC Auditor : " + hisaudEle[i].value;
                            }
                        }
                        //pio
                        var hispioEle = document.getElementsByName('piocandidate');
                        var hischeckpioEle = document.querySelector('input[name="piocandidate"]:checked');
                        for(i=0; i<hispioEle.length;i++){
                            if(hispioEle[i].checked){
                                    hisstudVoteuPio.innerHTML = "USC P.I.O. : " + hispioEle[i].value;
                            }
                        }
                        //business manager
                        var hisbmEle = document.getElementsByName('bmcandidate');
                        var hischeckbmEle = document.querySelector('input[name="bmcandidate"]:checked');
                        for(i=0; i<hisbmEle.length;i++){
                            if(hisbmEle[i].checked){
                                    hisstudVoteuBm.innerHTML = "USC Business Manager : " + hisbmEle[i].value;
                            }
                        }
                        //college representative
                        var hisrepEle = document.getElementsByName('repcandidate');
                        var hischeckrepEle = document.querySelector('input[name="repcandidate"]:checked');
                        for(i=0; i<hisrepEle.length;i++){
                            if(hisrepEle[i].checked){
                                    hisstudVoteuRep.innerHTML = "USC College Representative : " + hisrepEle[i].value;
                            }
                        }

//-----------------------------------------------FOR CSC VOTING SECTION-------------------------------------------

                        //president
                        var hiscpresEle = document.getElementsByName('cprescandidate');
                        var hischeckcpresEle = document.querySelector('input[name="cprescandidate"]:checked');
                            for(i=0; i<hiscpresEle.length;i++){
                                if(hiscpresEle[i].checked){
                                    hisstudVotecPres.innerHTML = "CSC President : " + hiscpresEle[i].value;
                                }
                            }
                        //vice president
                        var hiscvpresEle = document.getElementsByName('cvprescandidate');
                        var hischeckcvpresEle = document.querySelector('input[name="cvprescandidate"]:checked');
                        for(i=0; i<hiscvpresEle.length;i++){
                            if(hiscvpresEle[i].checked){
                                    hisstudVotecvPres.innerHTML = "CSC Vice-President : " + hiscvpresEle[i].value;
                            }
                        }
                        //secretary
                        var hiscsecEle = document.getElementsByName('cseccandidate');
                        var hischeckcsecEle = document.querySelector('input[name="cseccandidate"]:checked');  
                        for(i=0; i<hiscsecEle.length;i++){
                            if(hiscsecEle[i].checked){
                                    hisstudVotecSec.innerHTML = "CSC Secretary : " + hiscsecEle[i].value;
                            }
                        }
                        //treasurer
                        var hisctreasEle = document.getElementsByName('ctreascandidate');
                        var hischeckctreasEle = document.querySelector('input[name="ctreascandidate"]:checked');
                        for(i=0; i<hisctreasEle.length;i++){
                            if(hisctreasEle[i].checked){
                                    hisstudVotecTreas.innerHTML = "CSC Treasurer : " + hisctreasEle[i].value;
                            }
                        }
                        //auditor
                        var hiscaudEle = document.getElementsByName('caudcandidate');
                        var hischeckcaudEle = document.querySelector('input[name="caudcandidate"]:checked');
                        for(i=0; i<hiscaudEle.length;i++){
                            if(hiscaudEle[i].checked){
                                    hisstudVotecAud.innerHTML = "CSC Auditor : " + hiscaudEle[i].value;
                            }
                        }
                        //pio
                        var hiscpioEle = document.getElementsByName('cpiocandidate');
                        var hischeckcpioEle = document.querySelector('input[name="cpiocandidate"]:checked');
                        for(i=0; i<hiscpioEle.length;i++){
                            if(hiscpioEle[i].checked){
                                    hisstudVotecPio.innerHTML = "CSC P.I.O. : " + hiscpioEle[i].value;
                            }
                        }
                        //business manager
                        var hiscbmEle = document.getElementsByName('cbmcandidate');
                        var hischeckcbmEle = document.querySelector('input[name="cbmcandidate"]:checked');
                        for(i=0; i<hiscbmEle.length;i++){
                            if(hiscbmEle[i].checked){
                                    hisstudVotecBm.innerHTML = "CSC Business Manager : " + hiscbmEle[i].value;
                            }
                        }
                        //college representative
                        var hiscrepEle = document.getElementsByName('crepcandidate');
                        var hischeckcrepEle = document.querySelector('input[name="crepcandidate"]:checked');
                        for(i=0; i<hiscrepEle.length;i++){
                            if(hiscrepEle[i].checked){
                                    hisstudVotecRep.innerHTML = "CSC College Representative : " + hiscrepEle[i].value;
                            }
                        }
}