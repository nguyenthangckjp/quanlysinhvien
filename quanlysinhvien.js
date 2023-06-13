let students = [];

function renderStudentTable() {
  let table = document.getElementById("studentTable");

  // Xóa tất cả các hàng trong bảng
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Thêm các sinh viên vào bảng
  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    let row = table.insertRow(-1);
    row.insertCell().innerHTML = student.id;
    row.insertCell().innerHTML = student.name;
    row.insertCell().innerHTML = student.gender;
    row.insertCell().innerHTML = student.hometown;
    row.insertCell().innerHTML = student.email;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Xoá";
    deleteButton.onclick = (function (index) {
      return function () {
        deleteStudent(index);
      };
    })(i);
    row.insertCell().appendChild(deleteButton);
  }
}

function addStudent() {
  let id = document.getElementById("studentId").value;
  let name = document.getElementById("studentName").value;
  let gender = document.getElementById("studentGender").value;
  let hometown = document.getElementById("studentHometown").value;
  let email = document.getElementById("studentEmail").value;

  let student = {
    id: id,
    name: name,
    gender: gender,
    hometown: hometown,
    email: email
    };

      students.push(student);

      renderStudentTable();

      // Đặt lại giá trị của các trường nhập liệu
      document.getElementById("studentId").value = "";
      document.getElementById("studentName").value = "";
      document.getElementById("studentGender").value = "";
      document.getElementById("studentHometown").value = "";
      document.getElementById("studentEmail").value = "";
    }

    function deleteStudent(index) {
      students.splice(index, 1);
      renderStudentTable();
    }

    // Gọi hàm renderStudentTable để hiển thị danh sách sinh viên ban đầu (nếu có)
    renderStudentTable();