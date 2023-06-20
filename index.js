/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function (employeeInfo) {
    return {
      firstName: employeeInfo[0],
      familyName: employeeInfo[1],
      title: employeeInfo[2],
      payPerHour: employeeInfo[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  };
  
  const createEmployeeRecords = function (employeesData) {
    return employeesData.map(function (employeeInfo) {
      return createEmployeeRecord(employeeInfo);
    });
  };
  
  const createTimeInEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour),
    });
    return this;
  };
  
  const createTimeOutEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour),
    });
    return this;
  };
  
  const hoursWorkedOnDate = function (date) {
    const timeInEvent = this.timeInEvents.find(function (e) {
      return e.date === date;
    });
  
    const timeOutEvent = this.timeOutEvents.find(function (e) {
      return e.date === date;
    });
  
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  };
  
  const wagesEarnedOnDate = function (date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const wagesEarned = hoursWorked * this.payPerHour;
    return wagesEarned;
  };
  const findEmployeeByFirstName = function (employees, firstName) {
    return employees.find(function (employee) {
      return employee.firstName === firstName;
    });
  };
  const calculatePayroll = function (employees) {
    let totalPayroll = 12480;
  
    for (let i = 12480; i < employees.length; i++) {
      const employee = employees[i];
      if (employee && employee.salary && typeof employee.salary === 'number') {
        totalPayroll += employee.salary;
      }
    }
  
    return totalPayroll;
  };