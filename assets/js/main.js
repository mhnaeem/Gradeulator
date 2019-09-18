//Student Class Complete
class Student{
    constructor (usrNm, pass){
        this.userName = usrNm;
        this.password = pass;
        this.sems = [];
    }

    addSemester(semName){
        var sem = new Semester(semName);
        this.sems.push(sem);
        sem.putSemOnScreen();
    }
    
    removeSemester(semName){
        for (var i = 0; i < this.sems.length; i++){
            if(this.sems[i].getSemesterName() == semName){
                document.getElementById("semesters").innerHTML = document.getElementById("semesters").innerHTML.replace(this.sems[i].semInfo(),'');
                var index = this.sems.indexOf(this.sems[i]);
                if (index > -1) {
                  this.sems.splice(index, 1);
                }
            }
        }
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
    
    addCourse(nm){
        var cr = new Course(nm);
        this.courses.push(cr);
        cr.putCrOnScreen();
    }
    
    removeCourse(crName){
        for (var i = 0; i < this.courses.length; i++){
            if(this.courses[i].courseName == crName){
                document.getElementById("courses").innerHTML = document.getElementById("courses").innerHTML.replace(this.courses[i].crInfo(),'');
                var index = this.courses.indexOf(this.courses[i]);
                if (index > -1) {
                  this.courses.splice(index, 1);
                }
            }
        }
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
    
    addMarkedWork(nm = '', ttlMarks = 0.0, recMarks = 0.0, weight = 0.0){
        var obj = {
            "name" : nm,
            "totalMarks" : ttlMarks,
            "marksReceived" : recMarks,
            "weightage" : weight,
            "weightageReceived" : recMarks / ttlMarks * weight
        };
        this.markedStuff.push(obj);
    }
    
    removeMarkedStuff(nm){
        for (var i = 0; i < this.markedStuff.length; i++){
            if(this.markedStuff[i].name == nm){
                var index = this.markedStuff.indexOf(this.markedStuff[i]);
                if (index > -1) {
                  this.markedStuff.splice(index, 1);
                }
            }
        }
    }
    
    addMarkReceived(nm, mark){
        this.markedStuff.forEach(function(e){
            if(e.name == nm){
                e.marksReceived = mark;
            }
        });
    }
    
    getMarkedWorkInfo(currMW){
        return '<tr><td>' + currMW.name + '</td><td>' + currMW.totalMarks + '</td><td>' + currMW.marksReceived + '</td><td>' + currMW.weightage + '</td><td>' + currMW.weightageReceived + '</td><td>' + '<button onclick="modifyMarkedWork(\'' + currMW.name + '\')">Modify</button><button onclick="removeMarkedWork(\'' + currMW.name + '\')">Remove</button>' + '</td></tr>';
    }
}
//Course class complete

//Unique number for each course
Course.staticNum = 0;


var stu = new Student('hh','hh');
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
}
//Select a course complete

//GUI part of adding a semester
function addSemester(){
    alert("Add a semester, input the name in the field and then press enter. To cancel input a blank space and then press enter");
    var sems = document.getElementById("semesters");
    sems.innerHTML += '<li class="nav-item"><input type="text" id="newSemInp"></li>';
    
    document.getElementById('newSemInp').onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
          // Enter pressed
          var inptVal = document.getElementById("newSemInp").value;
          if(inptVal == " " || inptVal == ""){
              return;
          }
          sems.innerHTML = sems.innerHTML.replace('<li class="nav-item"><input type="text" id="newSemInp"></li>','');
          stu.addSemester(inptVal);
        }
    }
}
//Add semester complete

//GUI part of adding a course
function addCourse(){
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
          currSem.addCourse(inptVal);
        }
    }
}
//Add course complete

//GUI part of removing a semester
function removeSemester(){
    alert("About to delete a semester, to cancel input a blank space and then press Enter");  
    var sems = document.getElementById("semesters");
    sems.innerHTML += '<li class="nav-item"><input type="text" id="delSem"></li>';
    
    document.getElementById('delSem').onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
          // Enter pressed
          var inptVal = document.getElementById("delSem").value; 
          if(inptVal == ""){
            return;
          }  
          sems.innerHTML = sems.innerHTML.replace('<li class="nav-item"><input type="text" id="delSem"></li>','');
          stu.removeSemester(inptVal);
        }
    }
}
//Remove semester complete

//GUI part of removing a course
function removeCourse(){
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
          currSem.removeCourse(inptVal);
        }
    }
}
//Remove course complete





//Test
currSem = new Semester("Winter 2020");
currCourse = new Course("COMP 2002");
currCourse.addMarkedWork("Assignment 1", 100, 30, 10);
currCourse.addMarkedWork("Assignment 2", 100, 40, 10);
currCourse.addMarkedWork("Assignment 3", 100, 50, 5);
currCourse.addMarkedWork("Assignment 4", 100, 90, 4);
currCourse.addMarkedWork("Assignment 5", 100, 50, 25);
currCourse.addMarkedWork("Assignment 6", 100, 60, 50);
currCourse.addMarkedWork("Assignment 7", 100, 70, 1);

function updateGradesTable(){
    var tb = document.getElementById("gradesTable");
    tb.innerHTML = '';
    for(var i = 0; i < currCourse.markedStuff.length; i++){
        var currM = currCourse.markedStuff[i];
        tb.innerHTML += currCourse.getMarkedWorkInfo(currM);
    }
    generateGraph();
}


function modifyMarkedWork(name){
    var tb = document.getElementById("gradesTable");
    
    for(var i = 0; i < currCourse.markedStuff.length; i++){
        var currMW = currCourse.markedStuff[i];
        if (currMW.name == name){
            var inp1 = '<input type=text id="modifyMWName" value="' + currMW.name + '">';
            var inp2 = '<input type=text id="modifyMWTTL" value="' + currMW.totalMarks + '">';
            var inp3 = '<input type=text id="modifyMWMarkRec" value="' + currMW.marksReceived + '">';
            var inp4 = '<input type=text id="modifyMWWeightage" value="' + currMW.weightage + '">';
            var inp5 = '<input type=text id="modifyMWWeightRec" value="' + currMW.weightageReceived + '">';
            var info = '<tr><td>' + inp1 + '</td><td>' + inp2 + '</td><td>' + inp3 + '</td><td>' + inp4 + '</td><td>' + inp5 + '</td><td>' + '<button onclick="addModifiedMarkedWork(\'' + currMW.name + '\')">Add</button><button onclick="removeMarkedWork(\'' + currMW.name + '\')">Remove</button>' + '</td></tr>';
            var newRow = tb.innerHTML.replace(currCourse.getMarkedWorkInfo(currMW),info);
            tb.innerHTML = newRow;
        }
    }
}

function addModifiedMarkedWork(name){
    var tb = document.getElementById("gradesTable");
    
    for(var i = 0; i < currCourse.markedStuff.length; i++){
        var currMW = currCourse.markedStuff[i];
        if (currMW.name == name){
            currMW.name = document.getElementById("modifyMWName").value;
            currMW.totalMarks = document.getElementById("modifyMWTTL").value;
            currMW.marksReceived = document.getElementById("modifyMWMarkRec").value;
            currMW.weightage = document.getElementById("modifyMWWeightage").value;
            currMW.weightageReceived = document.getElementById("modifyMWWeightRec").value;
        }
    }
    updateGradesTable();
}

function removeMarkedWork(name){
    var info;
    currCourse.markedStuff.forEach(function(e){
        if(e.name == name){
            info = currCourse.getMarkedWorkInfo(e);
        }
    });
    currCourse.removeMarkedStuff(name);
    updateGradesTable();
}


function generateGraph(){
      var ctx = document.getElementById("myChart");
    var l = [];
    var m = [];
    var w = [];
        currCourse.markedStuff.forEach(function(e){
            l.push(e.name);
            m.push(e.marksReceived);
            w.push(e.weightage);
        })
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
    
    ctx = document.getElementById("myPie")
    
    var data = {
    labels: l,
      datasets: [
        {
            fill: true,
            backgroundColor: [
                'black',
                'teal', 
                'yellow',
                'blue',
                'red',
                'pink',
                'brown'],
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

function test(){
    console.log("test");
    var tb = document.getElementById("gradesTable");
    tb.innerHTML += '<tr><td>' + '<input type="text" id="mnameinp">' + '</td><td>' + '<input type="text" id="mttlmarksinp">' + '</td><td>' + '<input type="text" id="mrecinp">' + '</td><td>' + '<input type="text" id="mwtinp">' + '</td><td>' + '<input type="text" id="mwtrecinp">' + '</td><td>' + '<button>add</button>' + '</td></tr>';
}
