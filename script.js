document.addEventListener('DOMContentLoaded', () => {
    const studentTableBody = document.getElementById('studentTableBody');
    const addStudentForm = document.getElementById('addStudentForm');
    const editStudentForm = document.getElementById('editStudentForm');

    addStudentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('studentName').value;
        const address = document.getElementById('studentAddress').value;
        const gender = document.getElementById('studentGender').value;
        const dob = document.getElementById('studentDOB').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${address}</td>
            <td>${gender}</td>
            <td>${dob}</td>
            <td>
                <button class="btn btn-warning btn-sm edit-btn" data-toggle="modal" data-target="#editStudentModal">Edit</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
        $('#addStudentModal').modal('hide');
    });

    studentTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const row = e.target.closest('tr');
            const name = row.children[0].textContent;
            const address = row.children[1].textContent;
            const gender = row.children[2].textContent;
            const dob = row.children[3].textContent;

            document.getElementById('editStudentName').value = name;
            document.getElementById('editStudentAddress').value = address;
            document.getElementById('editStudentGender').value = gender;
            document.getElementById('editStudentDOB').value = dob;
        }

        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('tr').remove();
        }
    });

    editStudentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('editStudentName').value;
        const address = document.getElementById('editStudentAddress').value;
        const gender = document.getElementById('editStudentGender').value;
        const dob = document.getElementById('editStudentDOB').value;

        const row = studentTableBody.querySelector('tr');
        row.children[0].textContent = name;
        row.children[1].textContent = address;
        row.children[2].textContent = gender;
        row.children[3].textContent = dob;

        $('#editStudentModal').modal('hide');
    });
});
