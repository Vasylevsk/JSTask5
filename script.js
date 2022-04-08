const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];
averageStudentMark();
averageGroupMark();

function averageStudentMark() {
  const mark = getMark();
  const sum = mark.reduce((acc, value) => acc + value);
  const average = sum / mark.length;
  return alert(`Average Student Mark: ${average}`);
}

function getMark() {
  let studentId = +prompt("Enter Student Id(0-3): ");
  return students[studentId].marks;
}

function averageGroupMark() {
  const groupMark = getAllMarks();
  const sum = groupMark.reduce((acc, value) => acc + value);
  const average = sum / groupMark.length;
  return alert(`Average All Students Mark: ${average}`);
}

function getAllMarks() {
  const allMarks = students.map((student) => student.marks);
  const groupMarks = allMarks.flat();
  return groupMarks;
}
