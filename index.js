// Code your solution here
const findMatching = (drivers, name) => drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())

const fuzzyMatch = (drivers, name) => drivers.filter(driver => driver[0] === name[0])

const matchName = (drivers, name) => drivers.filter(driver => driver.name === name)