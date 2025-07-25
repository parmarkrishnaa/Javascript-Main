let emp_id = document.getElementById("empID");
let emp_name = document.getElementById("empName");
let emp_dept = document.getElementById("empDept");
let emp_sal = document.getElementById("empSal");
let addBtn = document.getElementById(".btn-success");
let tableBody = document.getElementById("tbody");

function addData(){
    const id = emp_id.value.trim();
    const name = emp_name.value.trim();
    const dept = emp_dept.value.trim();
    const sal = emp_sal.value.trim();

    if(!id || !name || !dept || !sal){
        
    }
}