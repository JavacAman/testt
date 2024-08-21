
const student1 = ['S1', 's2', 's3', 's4'];
const dep = ['dev1', 'dev2', 'dev3', 'dev4'];
const tblbody = document.querySelector('tbody');

student1.forEach(name=>{
 const row= document.createElement('tr');
 const tdata = document.createElement('td');
 
 tdata.textContent = name;
 row.appendChild(tdata);
 tblbody.appendChild(row);
});

