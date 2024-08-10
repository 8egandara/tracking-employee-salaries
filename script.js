const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeeData =[];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let continueData = true

  while (continueData) {
    const firstName = prompt("Enter first name");
    if (firstName === null) break;
    const lastName = prompt("Enter last name");
    if (lastName === null) break;
    let salary = Number(prompt("Enter salary"));
    if (salary === null) break;
    // breaks are to stop the loop if Cancel is clicked during the data collecton prompts

    if (salary > 0) {
      salary = salary;
    } else {
      salary = 0;
    }

    employeeData.push({firstName, lastName, salary});

    continueData = confirm("Would you like to add another employee?") //when continueData is false, loop will stop and employeeData will be posted in table
                
} 
  
  return employeeData;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let employee of employeesArray) {
    sum += employee.salary;
  }
  console.log(`The sum of all salaries is: $${sum}`) // Calculate the sum of all salaries first so that we can calculate the average later

  const averageSalary = (sum / employeesArray.length).toFixed(2);
  const totalEmployees = employeesArray.length;
  console.log(`The average employee salary between our ${totalEmployees} employee(s) is $${averageSalary}`); // average salary of all employees
  
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const chooseRandom = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[chooseRandom];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
