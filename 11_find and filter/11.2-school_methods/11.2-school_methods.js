const school = {
  teachers: [
    {
      id: 1,
      name: 'Pinchas',
      subjects: ['chemistry', 'biology', 'physics'],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: 'Williams',
      subjects: ['history', 'ethics'],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: 'Jennifer',
      age: 20,
    },
    {
      id: 11,
      name: 'Howard',
      age: 23,
    },
    {
      id: 12,
      name: 'Old-Timmy',
      age: 86,
    },
    {
      id: 13,
      name: 'Houston',
      age: 21,
    },
  ],

  findPerson(type, id) {
    return this[type].filter((person) => person.id === id)[0];
  },

  assignStudent(id, subject) {
    const student = this.findPerson('students', id);
    const teacher = this.teachers.find((teacher) =>
      teacher.subjects.includes(subject)
    );
    if (teacher && teacher.capacityLeft) {
      teacher.students.push(student);
      teacher.capacityLeft -= 1;
    } else {
      console.log('Sorry, no available teachers left');
    }
  },
  assignTeachersSubject(id, subject) {
    const teacher = this.findPerson('teachers', id);
    teacher.subjects.includes(subject) || teacher.subjects.push(subject);
  },
};
