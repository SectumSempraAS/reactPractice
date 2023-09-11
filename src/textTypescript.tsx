import React, { FC, useCallback, useEffect } from 'react'

let x1 : never;

let arr : readonly string[] = [];
let arr1 : string[] = [];

let arr2 : string[] = ['1','2']; 

let custom : [string, number, boolean];

custom = ['anshuman', 1, true];

const graph : [x: number, y: number] = [31.5, 51.5];


const car: { type: string, mileage?: number } = {
    type: "Toyota"
  };

let students : {[index: string]: number} = {};
students.anshuman = 12;
// students.anil = '11'
students.anil = 11;

arr1.push('answer');

// ENUMS in typescript

enum Status {
    NOT_FOUND = 404,
    SUCCESS = 200,
    INVALID = 500
}



// BY DEFAULT North will get assigned 0, and 1 will be added to each of the next value
//WEST will be 2
enum Directions {
    NORTH,
    SOUTH,
    WEST,
    EAST
}



// When we set first value to something, values next to it gets increemented by 1 
// WEST will be 4
enum setDirection {
    NORTH = 1,
    SOUTH,
    EAST,
    WEST
}

//aliases
type StudentYear = number
type StudentName = string
type StudentId = number
type Student = {
    year: StudentYear
    name : StudentName
    rollNo : StudentId
}

const student1 : Student = { year: 2100, name: 'Anshuman', rollNo: 12};

// interfaces are similar to aliases, but they only apply to objects

interface Employee {
    employeeName: string
    employeeId: number
}

const employee: Employee = {employeeName: 'Anshuman', employeeId : 12 };

function displayEmlpoyee(username: string, id: number) {
    const ansEmployee : Employee = {employeeName: username, employeeId: id};
    return ansEmployee;
}

const welcomeEmployee : React.FC<Employee> = ({employeeName, employeeId}) => {
    const ansEmployee : Employee = {employeeName, employeeId};
    return (
        <>
            <p>Hello and welcome to the team {ansEmployee.employeeName}</p>
        </>
    )
}

useEffect(() => {
    fetch('https').then((res) => res.json).then((data) => console.log(data));
}, [employee])

const displayEmlpoyee1 = useCallback((username: string, id: number) => {
    const ansEmployee : Employee = {employeeName: username, employeeId: id};
    return ansEmployee;
}, [employee])




