let employees = [];
let updatedEmployees = [];

async function fetchEmployees() {
  const response = await fetch("employees.json");
  return await response.json();
}

async function loadEmployees() {
  employees = await fetchEmployees();
  updatedEmployees = [...employees];

  document.getElementById("before").textContent =
    JSON.stringify(employees, null, 2);

  document.getElementById("after").textContent = "";
}

function addBonus() {
  updatedEmployees = updatedEmployees.map(emp => ({
    ...emp,
    bonus: emp.salary * 0.1
  }));
  showAfter();
}

function filterActive() {
  updatedEmployees = updatedEmployees.filter(emp => emp.active);
  showAfter();
}

function calculateDeptTotals() {
  const totals = updatedEmployees.reduce((acc, emp) => {
    acc[emp.dept] = (acc[emp.dept] || 0) + emp.salary;
    return acc;
  }, {});

  document.getElementById("after").textContent =
    JSON.stringify(totals, null, 2);
}

function showAfter() {
  document.getElementById("after").textContent =
    JSON.stringify(updatedEmployees, null, 2);
}