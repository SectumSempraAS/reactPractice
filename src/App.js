import './App.css';
import Car from './Car';
import Football from './Football';
import Myform from './PracticeForm';
import Student from './Student';
import Counter from './Counter.tsx';

function oldtestFunctionWithoutArrowFunction() {
  return "Older way of writing functions";
} 
const arrowFunction = () => {
  return "new way of writing functions using arrow operators";
}

const evenShorterFunction = () => "Even shorter way of writing function";

const hello = (val) => "Hello " + val;
const hello1 = val => "Hello" + val;
const myArray = ['apple', 'banana', 'orange'];
const vehicles = ['mustang', 'f-150', 'expedition'];

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

const myVehicle = ({
  brandName,
  modelName,
  typeOfVehicle,
  registrationObject : {city, state, country}}) => {
    return 'My ' + typeOfVehicle + ' of ' + brandName + '' + modelName
         + ' has registration in ' +  city + state + country;
}

const numbersOne = [1, 3, 5];
const numbersTwo = [2, 4, 6];
const students = [
  {name: 'Anshuman', rollNo: '12'},
  {name: 'Anil', rollNo: '11'}
];

function App() {

  const newString = hello('Anshuman');
  const newString1 = hello1('Anshuman');
  const brandOfNewCar = 'Mustang';
  const carObject = {'owner': 'Anshuman', 'coOwner': 'Somesh'};

  const fruits = myArray.map((fruit, index)=> {
    return <li key={index}>
              {(index+1) + ')' + fruit}
            </li>
  })

  const [car, model, description] = vehicles;
  const [addNumbers, subtractNumbers, multiplyNumbers, divideNumbers] = calculate(4, 7);
  const myVehicleString = myVehicle({
    brandName: vehicleOne.brand,
    modelName: vehicleOne.model,
    typeOfVehicle: vehicleOne.type,
    registrationObject: vehicleOne.registration}); 

  const mergedArrays = [...numbersOne, ...numbersTwo];
  const [firstNumber, secondNumber, ...restArray] = mergedArrays;
  const mergedObject = {...vehicleOne};
  const customAlertMessage = 'Soccer Button was clicked';

  return (
    <div className="App">
      <Counter />
      <h1>Hello Anshuman, lets work!</h1>
      <p>{oldtestFunctionWithoutArrowFunction()}</p>
      <p>{arrowFunction()}</p>
      <p>{evenShorterFunction()}</p>
      <p>{newString}</p>
      <p>{newString1}</p>
      <div>{fruits}</div>
      <p>Destructuring</p>
      <div>{car + model + description}</div>
      <div>{addNumbers}</div>
      <p>{myVehicleString}</p>
      <p>{mergedArrays}</p>
      <div>
        <p>{firstNumber}</p>
        <p>{secondNumber}</p>
        <p>{restArray}</p>
      </div>
      <div>
        {mergedObject.brand}
      </div>
      <Car color="red" brand={brandOfNewCar} carObject={carObject}/>
      <Football alertMessage={customAlertMessage}/>
      {students.map((student, index) => {
        return <Student key={index} student={student}/>
      })}
      <Myform />
    </div>
  );
}

export default App;
