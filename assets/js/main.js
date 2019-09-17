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
        console.log(this.sems);
    }
}


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
        console.log(this.courses);
    }    
}

Semester.staticNum = 0;

class Course{
    
    constructor(name){
        this.courseName = name;
        this.markedWork = [];
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
}

Course.staticNum = 0;


var stu = new Student('hh','hh');
var currSem;
var currCourse;


function selectSem(n){
    //For changing the active semester
    /*
    var semBar = document.getElementById("semesters");
    var temp = "";
    if (currSem != null){
        temp = currSem.semInfo().replace('class="nav-link active"', 'class="nav-link"');
        semBar.innerHTML = semBar.innerHTML.replace(currSem.semInfo(),temp);
    }
    */
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
    console.log(currSem.courses);
    //For changing the active semester
    /*temp = currSem.semInfo().replace('class="nav-link"', 'class="nav-link active"');
    semBar.innerHTML = semBar.innerHTML.replace(currSem.semInfo(),temp);*/
}

function selectCr(n){
    for(var i = 0; i < currSem.courses.length; i++){
        if (currSem.courses[i].courseNum == n){
            currCourse = currSem.courses[i];
        }
    }
}

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


function removeSemester(){
    alert("About to delete a semester, to cancel input a blank space and then press Enter");  
    var sems = document.getElementById("semesters");
    sems.innerHTML += '<li class="nav-item"><input type="text" id="del"></li>';
    
    document.getElementById('del').onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
          // Enter pressed
          var inptVal = document.getElementById("del").value; 
          if(inptVal == ""){
            return;
          }  
          sems.innerHTML = sems.innerHTML.replace('<li class="nav-item"><input type="text" id="del"></li>','');
          stu.removeSemester(inptVal);
        }
    }
}

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

