let students = [];

function addStudent() {
    let student = {
        name: nameInp.value.trim(),
        age: ageInp.value.trim(),
        course: courseInp.value.trim(),
    }

    if (student.name === '' || student.age === '' || student.course === '') {
        alert('Please fill in all fields!');
        return
    }
    students.push(student); //add Student details to array 'students'
    displayStudents(); //display all students in array 'students'
}
function displayStudents() {
    studentTableBody.innerHTML = '' //clear tbody
    students.forEach((student, i) => {
        studentTableBody.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>
            </tr>   
         `;
    })
}
// function displayStudents() {
//     studentTableBody.innerHTML = ''
//     students.forEach((student, i) => {
//         const tr = document.createElement('tr');
//         const snCell = document.createElement('td')
//         const ageCell = document.createElement('td')
//         const nameCell = document.createElement('td')
//         const courseCell = document.createElement('td')

//         snCell.textContent = i+1;
//         nameCell.textContent = student['name']
//         ageCell.textContent = student['age']
//         courseCell.textContent = student['course']

//         tr.append(snCell,nameCell,ageCell,courseCell)

//         studentTableBody.appendChild(tr);
//     })
// }
