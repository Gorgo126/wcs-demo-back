const Student = require('../../entities/Student')

const createStudent = body => {
    return new Student(body).save()
}

const listStudents = (options = {}) => {
    return Student.find(options)
}

module.exports = { createStudent, listStudents }
