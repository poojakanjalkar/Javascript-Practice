
const students = ["Ali", "ram", "tom", "tim", "anne"];


const attendanceSchedule = {};


function markAttendance(day, presentStudents) {
    if (!attendanceSchedule[day]) {
        attendanceSchedule[day] = {};
    }

    students.forEach(student => {
        attendanceSchedule[day][student] = presentStudents.includes(student);
    });
}


function displayAttendance(day) {
    if (!attendanceSchedule[day]) {
        console.log(`No attendance recorded for ${day}.`);
        return;
    }

    console.log(`Attendance for ${day}:`);
    for (const student in attendanceSchedule[day]) {
        const status = attendanceSchedule[day][student] ? "Present" : "Absent";
        console.log(`${student}: ${status}`);
    }
}


markAttendance("2023-10-01", ["Ali", "ram", "tom"]);
markAttendance("2023-10-02", ["tom", "tim", "anne"]);

displayAttendance("2023-10-01");
