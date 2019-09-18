//Student Class Complete
class Student{
    constructor (usrNm, pass){
        this.userName = usrNm;
        this.password = pass;
        this.sems = [];
    }

    addSemester(){
        alert("Add a semester, input the name in the field and then press enter. To cancel input a blank space and then press enter");
        var semsBar = document.getElementById("semesters");
        semsBar.innerHTML += '<li class="nav-item"><input type="text" id="newSemInp"></li>';

        document.getElementById('newSemInp').onkeypress = function(e){
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode == '13'){
              // Enter pressed
              var inptVal = document.getElementById("newSemInp").value;
              if(inptVal == " " || inptVal == ""){
                  return;
              }
              semsBar.innerHTML = semsBar.innerHTML.replace('<li class="nav-item"><input type="text" id="newSemInp"></li>','');
              var sem = new Semester(inptVal);
              stu.sems.push(sem);
              sem.putSemOnScreen();
            }
        }
    }
    
    
    removeSemester(semName){
        alert("About to delete a semester, to cancel input a blank space and then press Enter");  
        
        var semBar = document.getElementById("semesters");
        semBar.innerHTML += '<li class="nav-item"><input type="text" id="delSem"></li>';

        document.getElementById('delSem').onkeypress = function(e){
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode == '13'){
              // Enter pressed
              var inptVal = document.getElementById("delSem").value; 
              if(inptVal == ""){
                return;
              }  
              semBar.innerHTML = semBar.innerHTML.replace('<li class="nav-item"><input type="text" id="delSem"></li>','');
                
              for (var i = 0; i < stu.sems.length; i++){
                  if(stu.sems[i].getSemesterName() == inptVal){
                    semBar.innerHTML = semBar.innerHTML.replace(stu.sems[i].semInfo(),'');
                    var index = stu.sems.indexOf(stu.sems[i]);
                    if (index > -1) {
                      stu.sems.splice(index, 1);
                    }
                  }
              }
            }
        }    
    }
    
    //Test, remove later
    testAddSem(nm){
        var sem = new Semester(nm);
        stu.sems.push(sem);
        sem.putSemOnScreen();        
    }
}
//Student Class Complete

//Semester class complete
class Semester{

    constructor(semNm){
        this.semesterName = semNm;
        this.courses = [];
        this.semNum = Semester.staticNum;
        Semester.staticNum += 1;
    }
    
    getSemesterName(){
        return this.semesterName;
    }
    
    putSemOnScreen(){
        var semsOnScreen = document.getElementById("semesters");
        semsOnScreen.innerHTML += this.semInfo();
    }
    
    semInfo(){
        return '<li class="nav-item"><a class="nav-link" href="#" onclick="selectSem('+this.semNum+')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> <span data-feather="file-text"></span>' + this.semesterName + '</a> </li>';
    }
    
    addCourse(){
        alert("Add a course, input the name in the field and then press enter. To cancel input a blank space and then press enter");
        
        var crs = document.getElementById("courses");
        crs.innerHTML += '<li class="nav-item"><input type="text" id="newCourseInp"></li>';

        document.getElementById('newCourseInp').onkeypress = function(e){
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode == '13'){
              // Enter pressed
              var inptVal = document.getElementById("newCourseInp").value;
              if(inptVal == " " || inptVal == ""){
                  return;
              }
              crs.innerHTML = crs.innerHTML.replace('<li class="nav-item"><input type="text" id="newCourseInp"></li>','');
              var cr = new Course(inptVal);
              currSem.courses.push(cr);
              cr.putCrOnScreen();                
            }
        }
    }
    
    removeCourse(){
        alert("About to delete a semester, to cancel input a blank space and then press Enter");  
        
        var crs = document.getElementById("courses");
        crs.innerHTML += '<li class="nav-item"><input type="text" id="delCr"></li>';

        document.getElementById('delCr').onkeypress = function(e){
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode == '13'){
              // Enter pressed
              var inptVal = document.getElementById("delCr").value; 
              if(inptVal == ""){
                return;
              }  
              crs.innerHTML = crs.innerHTML.replace('<li class="nav-item"><input type="text" id="delCr"></li>','');
              
              for (var i = 0; i < currSem.courses.length; i++){
                    if(currSem.courses[i].courseName == inptVal){
                        crs.innerHTML = crs.innerHTML.replace(currSem.courses[i].crInfo(),'');
                        var index = currSem.courses.indexOf(currSem.courses[i]);
                        if (index > -1) {
                          currSem.courses.splice(index, 1);
                        }
                    }
                }
            }
        }
    }
    
    //For test purposes remove later
    testAddCourse(nm){
        var cr = new Course(nm);
        currSem.courses.push(cr);
        cr.putCrOnScreen();          
    }
}
//Semester class complete

//Unique number for each semester
Semester.staticNum = 0;

// Course class complete
class Course{
    
    constructor(name){
        this.courseName = name;
        this.markedStuff = [];
        this.courseNum = Course.staticNum;
        Course.staticNum += 1;
    }
    
    putCrOnScreen(){
        var crOnScreen = document.getElementById("courses");
        crOnScreen.innerHTML += this.crInfo();
    }
    
    crInfo(){
        return '<li class="nav-item"><a class="nav-link" href="#" onclick="selectCr('+this.courseNum+')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> <span data-feather="file-text"></span>' + this.courseName + '</a> </li>';
    }
    
    addMarkedWork(){ 
        var obj = {
            "name" : document.getElementById("mnameinp").value,
            "totalMarks" : document.getElementById("mttlmarksinp").value,
            "marksReceived" : document.getElementById("mrecinp").value,
            "weightage" : document.getElementById("mwtinp").value,
            "weightageReceived" : document.getElementById("mrecinp").value / document.getElementById("mttlmarksinp").value * document.getElementById("mwtinp").value
        };
        this.markedStuff.push(obj);
        updateGradesTable();
    }
    
    removeMarkedWork(nm){
        for (var i = 0; i < this.markedStuff.length; i++){
            if(this.markedStuff[i].name == nm){
                var index = this.markedStuff.indexOf(this.markedStuff[i]);
                if (index > -1) {
                  this.markedStuff.splice(index, 1);
                }
            }
        }
        updateGradesTable();
    }
    
    getMarkedWorkInfo(currMW){
        return '<tr><td>' + currMW.name + '</td><td>' + currMW.totalMarks + '</td><td>' + currMW.marksReceived + '</td><td>' + currMW.weightage + '</td><td>' + currMW.weightageReceived + '</td><td>' + '<button onclick="currCourse.modifyMarkedWork(\'' + currMW.name + '\')">Modify</button><button onclick="currCourse.removeMarkedWork(\'' + currMW.name + '\')">Remove</button>' + '</td></tr>';
    }
    
    calculateWeightReceived(mw){
        mw.weightageReceived = mw.marksReceived / mw.totalMarks * mw.weightage; 
        return mw.weightageReceived;
    }
    
    addModifiedMarkedWork(name){
        var tb = document.getElementById("gradesTable");

        for(var i = 0; i < currCourse.markedStuff.length; i++){
            var currMW = currCourse.markedStuff[i];
            if (currMW.name == name){
                currMW.name = document.getElementById("modifyMWName").value;
                currMW.totalMarks = document.getElementById("modifyMWTTL").value;
                currMW.marksReceived = document.getElementById("modifyMWMarkRec").value;
                currMW.weightage = document.getElementById("modifyMWWeightage").value;
                currMW.weightageReceived = currCourse.calculateWeightReceived(currMW);
            }
        }
        updateGradesTable();
    }  

    modifyMarkedWork(name){
        var tb = document.getElementById("gradesTable");

        for(var i = 0; i < currCourse.markedStuff.length; i++){
            var currMW = currCourse.markedStuff[i];
            if (currMW.name == name){
                var inp1 = '<input type=text id="modifyMWName" value="' + currMW.name + '">';
                var inp2 = '<input type=text id="modifyMWTTL" value="' + currMW.totalMarks + '">';
                var inp3 = '<input type=text id="modifyMWMarkRec" value="' + currMW.marksReceived + '">';
                var inp4 = '<input type=text id="modifyMWWeightage" value="' + currMW.weightage + '">';
                var info = '<tr><td>' + inp1 + '</td><td>' + inp2 + '</td><td>' + inp3 + '</td><td>' + inp4 + '</td><td>' + currCourse.calculateWeightReceived(currMW) + '</td><td>' + '<button onclick="currCourse.addModifiedMarkedWork(\'' + currMW.name + '\')">Add</button><button onclick="currCourse.removeMarkedWork(\'' + currMW.name + '\')">Remove</button>' + '</td></tr>';
                var newRow = tb.innerHTML.replace(currCourse.getMarkedWorkInfo(currMW),info);
                tb.innerHTML = newRow;
            }
        }
    }    
    
    //For testing remove later
    testAddMarkedWork(nm, ttlm, mrec, wt){ 
        var obj = {
            "name" : nm,
            "totalMarks" : ttlm,
            "marksReceived" : mrec,
            "weightage" : wt,
            "weightageReceived" : mrec / ttlm * wt
        };
        this.markedStuff.push(obj);
        updateGradesTable();
    }
}
//Course class complete

//Unique number for each course
Course.staticNum = 0;



var stu = new Student('Hammad','password');
var currSem;
var currCourse;

//Select a semester complete
function selectSem(n){
    
    var semBarSems = document.getElementById("semesters").getElementsByTagName("a");
    
    for(var i = 0; i < semBarSems.length; i++){
        var test = "nav-link active";
        if(semBarSems[i].getAttribute("class") == test){
            semBarSems[i].setAttribute("class", "nav-link");
        }
    }
    
    for(var i = 0; i < stu.sems.length; i++){
        if (stu.sems[i].semNum == n){
            currSem = stu.sems[i];
        }
    }
    
    var bar = document.getElementById("courses");
    bar.innerHTML = "";
    if(currSem.courses.length >= 1){
        for(var i=0; i < currSem.courses.length; i++){
            bar.innerHTML += currSem.courses[i].crInfo();
        }
    }
    
    for(var i = 0; i < semBarSems.length; i++){
        var test = "selectSem(" + n + ")";
        if(semBarSems[i].getAttribute("onclick") == test){
            semBarSems[i].setAttribute("class", "nav-link active");
        }
    }
    if (currSem.courses.length > 0){
        selectCr(currSem.courses[0].courseNum);
    }
}
//Select a semester complete

//Select a course complete
function selectCr(n){
    
    var crsBarCrs = document.getElementById("courses").getElementsByTagName("a");
    
    for(var i = 0; i < crsBarCrs.length; i++){
        var test = "nav-link active";
        if(crsBarCrs[i].getAttribute("class") == test){
            crsBarCrs[i].setAttribute("class", "nav-link");
        }
    }
    
    for(var i = 0; i < currSem.courses.length; i++){
        if (currSem.courses[i].courseNum == n){
            currCourse = currSem.courses[i];
        }
    }
    
    for(var i = 0; i < crsBarCrs.length; i++){
        var test = "selectCr(" + n + ")";
        if(crsBarCrs[i].getAttribute("onclick") == test){
            crsBarCrs[i].setAttribute("class", "nav-link active");
        }
    }
    updateGradesTable();
}
//Select a course complete

//Create line graph and pie chart for current course
function generateGraph(){
    
    var dynamicColors = function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
    }
    
    var ctx = document.getElementById("myChart");
    var l = [];
    var m = [];
    var w = [];
    var sum = 0.0;
    currCourse.markedStuff.forEach(function(e){
            l.push(e.name);
            m.push(e.marksReceived);
            w.push(e.weightage);
            sum += e.weightage;
        });

      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: l,
          datasets: [{
            data: m,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false,
          }
        }
      });
    
    ctx = document.getElementById("myPie");
    
    if(sum < 100){
        w.push();
        l.push("Unassigned");
    }
    if(sum >= 100){
        for (var i = 0; i < l.length; i++){
            if(l[i] == "Unassigned"){
                var index = l.indexOf(l[i]);
                if (index > -1) {
                  l.splice(index, 1);
                }
                index = w.indexOf(w[i]);
                 if (index > -1) {
                  w.splice(index, 1);
                }               
            }
        }
    }
    
    var bgC = [];
    l.forEach(function(){
        bgC.push(dynamicColors());
    });
    
    var data = {
    labels: l,
      datasets: [
        {
            fill: true,
            backgroundColor: bgC,
            data: w,
        }
    ]
};

    // Notice the rotation from the documentation.

    var options = {
            title: {
                      display: true,
                      text: 'What happens when you lend your favorite t-shirt to a girl ?',
                      position: 'top'
                  },
            rotation: -0.7 * Math.PI
    };


    // Chart declaration:
    var myBarChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
}
//Create line graph and pie chart for current course complete

//Updates the grades table and graphs
function updateGradesTable(){
    var tb = document.getElementById("gradesTable");
    tb.innerHTML = '';
    for(var i = 0; i < currCourse.markedStuff.length; i++){
        var currM = currCourse.markedStuff[i];
        tb.innerHTML += currCourse.getMarkedWorkInfo(currM);
    }
    tb.innerHTML += '<tr><td>' + '<input type="text" id="mnameinp">' + '</td><td>' + '<input type="text" id="mttlmarksinp">' + '</td><td>' + '<input type="text" id="mrecinp">' + '</td><td>' + '<input type="text" id="mwtinp">' + '</td><td></td><td>' + '<button onclick="currCourse.addMarkedWork()">Add</button>' + '</td></tr>';
    generateGraph();
}
//Update grades table and graph complete

//Generates random test data
function test(){
    var assList = ["Assignment 1", "Assignment 2", "Assignment 3", "Assignment 4", "Assignment 5", "Assignment 6", "Assignment 7"];
    var weightList = [25, 15, 10, 10, 5, 5, 30];
    var randMark = function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    
    stu.testAddSem("Fall 2019");
    stu.testAddSem("Winter 2019");
    stu.testAddSem("Fall 2020");
    stu.testAddSem("Winter 2020");
    
    selectSem("0");
    currSem.testAddCourse("COMP 1000");
    currSem.testAddCourse("COMP 1001");
    currSem.testAddCourse("COMP 1002");
    selectCr("0");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    selectCr("1");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    selectCr("2");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    
    selectSem("1");
    currSem.testAddCourse("BUSI 1000");
    currSem.testAddCourse("BUSI 1001");
    currSem.testAddCourse("BUSI 1002");
    currSem.testAddCourse("BUSI 1003");
    selectCr("3");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    selectCr("4");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    selectCr("5");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    selectCr("6");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    
    selectSem("2");
    currSem.testAddCourse("BUSI 4000");
    currSem.testAddCourse("BUSI 4500");
    currSem.testAddCourse("BUSI 1600");
    currSem.testAddCourse("COMP 2550");
    selectCr("7");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    selectCr("8");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    selectCr("9");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    selectCr("10");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }    
    
    selectSem("3");
    currSem.testAddCourse("ECON 1010");
    currSem.testAddCourse("ECON 1020");
    selectCr("11");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    selectCr("12");
    for(var i = 0; i < assList.length; i++){
        currCourse.testAddMarkedWork(assList[i], 100, randMark(0,101), weightList[i]);
    }
    
    selectSem("0");
    selectCr("0");
    updateGradesTable();
}
