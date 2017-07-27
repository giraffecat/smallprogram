
class Student{
    constructor(number,name,Chinese,Math,English,program) {
        this.number=number;
        this.name=name;
        this.Chinese = Chinese;
        this.Math = Math;
        this.English = English;
        this.program = program;
    }
}

function Addstudent(){
    let student=new Student();
    student.number=document.getElementById('studentnumber').value;
    student.name=document.getElementById('student.name').value;
    student.Chinese=document.getElementById('studentChinese').value;
    student.Math=document.getElementById('studentMath').value;
    student.English=document.getElementById('studentEnglish').value;
    student.program=document.getElementById('studentprogram').value;
    let totalpoint=parseInt(student.Chinese)+parseInt(student.Math)+parseInt(student.English)+parseInt(student.program);
    student.totalpoint=totalpoint;
    alert(`学生${student.name}已成功载入系统`)
    let key1=student.number;
    student=JSON.stringify(student);
    localStorage.setItem(key1, student);
    student=JSON.parse(localStorage.getItem(key1))
    var tr=`<tr><td>${student.number}</td><td>${student.name}</td><td>${student.Math}</td><td>${student.Chinese}</td><td>${student.English}</td><td>${student.program}</td><td>${student.totalpoint}</td><td><button name="delate" value="delate" class="btn btn-danger btn-sm" onclick="deleteRow(this)">delate</button><button name="change" value="change" class="btn btn-success btn-sm" onclick="changestudent(this)">change</button>
</td>`;
    $('#tableid').append(tr);
    event.preventDefault();
    window.event.returnValue = false;
}
function showstudent(){
    var tb = document.getElementById('tbody');
   $('tbody').empty();
    var storage = window.localStorage;
    for (var i=0, len = storage.length; i  <  len; i++){
        var key = storage.key(i);
        var value = storage.getItem(key);
       var student=JSON.parse(value);
        var tr=`<tr><td>${student.number}</td><td>${student.name}</td><td>${student.Math}</td><td>${student.Chinese}</td><td>${student.English}</td><td>${student.program}</td><td>${student.totalpoint}</td><td><button name="delate" value="delate" class="btn btn-danger btn-sm" onclick="deleteRow(this)">delate</button><button name="change" value="change" class="btn btn-success btn-sm" onclick="changestudent(this)">change</button>
</td>`;
        $('#tableid').append(tr);

    }

}
function searchstudent(){
    var storage = window.localStorage;
    var inputs=document.getElementById('searchnumber').value;
    for (var i=0, len = storage.length; i  <  len; i++){
        var key = storage.key(i);
        var value = storage.getItem(key);
        var student=JSON.parse(value);
        if(student.number==inputs)
        {var tr=`<tr><td>${student.number}</td><td>${student.name}</td><td>${student.Math}</td><td>${student.Chinese}</td><td>${student.English}</td><td>${student.program}</td><td>${student.totalpoint}</td><td><button name="delate" value="delate" class="btn btn-danger btn-sm" onclick="deleteRow(this)">delate</button><button name="change" value="change" class="btn btn-success btn-sm" onclick="changestudent(this)">change</button>
</td>`;
            $('#searchtableid').append(tr)
        }
    }

}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var text=document.getElementById('tableid').rows[i].cells[0].innerHTML;
    document.getElementById('tableid').deleteRow(i);
    var storage = window.localStorage;
    for (var j = 0, len = storage.length; j < len; j++) {
        var key = storage.key(j);
        var value = storage.getItem(key);
        var student = JSON.parse(value);
        if (student.number == text)
            localStorage.removeItem(key)
    }

}
function changestudent(r)
{
    var t=prompt("请输入修改学生的信息（按照学号，姓名，数学，语文，英语，编程顺序输入）")
    alert(t)
    if (t!==null && t!=="")
    { var i = r.parentNode.parentNode.rowIndex;
        var text=document.getElementById('tableid').rows[i].cells[0].innerHTML;
        document.getElementById('tableid').deleteRow(i);
        alert(text)
        var storage = window.localStorage;
        for (var j = 0, len = storage.length; j < len; j++) {
            var key = storage.key(j);
            var value = storage.getItem(key);
            var student = JSON.parse(value);
            if (student.number == text)
                localStorage.removeItem(key)
        }

        var arr=new Array();
    arr=t.split(",");
    var student=new Object();
    student.number=arr[0];
    student.name=arr[1];
    student.Math=arr[2];
    student.Chinese=arr[3]
    student.English=arr[4];
    student.program=arr[5];
    alert(student.program)
    var totalpoint=parseInt(student.Chinese)+parseInt(student.Math)+parseInt(student.English)+parseInt(student.program);
    student.totalpoint=totalpoint;
    alert(`学生${student.name}已成功修改`)
    var key1=student.number;
    student=JSON.stringify(student);
    localStorage.setItem(key1, student);
    student=JSON.parse(localStorage.getItem(key1))
    var tr=`<tr><td>${student.number}</td><td>${student.name}</td><td>${student.Math}</td><td>${student.Chinese}</td><td>${student.English}</td><td>${student.program}</td><td>${student.totalpoint}</td><td><button name="delate" value="delate" class="btn btn-danger btn-sm" onclick="deleteRow(this)">delate</button><button name="change" value="change" class="btn btn-success btn-sm">change</button>
</td>`;
    $('#tableid').append(tr);
    event.preventDefault();
    window.event.returnValue = false;}
}
function empty() {
    var tb = document.getElementById('tbody2');
    $('#tbody2').empty();
}
