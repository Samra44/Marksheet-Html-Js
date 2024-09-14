function calculation(){
    let git = parseInt(document.getElementById("marks1").value);
    let xml = parseInt(document.getElementById("marks2").value);
    let pjs = parseInt(document.getElementById("marks3").value);
    let sql = parseInt(document.getElementById("marks4").value);
    let php = parseInt(document.getElementById("marks5").value);

    let obt = git+xml+pjs+sql+php;
    if(git>100 || xml>100 || pjs>100 || sql>100 || php>100){
        alert("Enter valid number");
    }else{
        document.getElementById("obt").innerText = obt;
        let per = (obt/500)*100;
        document.getElementById("per").innerText = per+"%";
        if(per>=80 && per<=100){
            document.getElementById("grade").innerHTML = "<span style='color:green'>A-one grade</span>"
        }else if (per>=70 && per<80){
            document.getElementById("grade").innerText = "A-Grade";
        }else if (per>=60 && per<70){
        document.getElementById("grade").innerText = "B-Grade";
        }else if (per>=50 && per<60){
            document.getElementById("grade").innerText = "C-Grade";
        }else if (per>=40 && per<50){
            document.getElementById("grade").innerHTML = "<span style='color:red'>D-Grade</span>"
        }else{
            document.getElementById("grade").innerHTML = "<span style='color:red'>F-Grade</span>"
        }
        // Remark
if (git<40 || xml<40 || pjs<40 || sql<40 || php<40){
    document.getElementById("remarks").innerHTML = "<span style='color:red'>FAIL</span>";
}else{
    document.getElementById("remarks").innerHTML = "<span style='color:green'>PASS</span>";
}
    }
}

