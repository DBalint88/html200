const firstName = 'Daniel';
const lastName = 'Balint';
const age = 33;
const legalDrivingAge = 16;

if (age >= legalDrivingAge) {
  console.log(`${firstName} ${lastName} can drive, and has been driving for the last ${age - legalDrivingAge} years.`)
} else {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }
}
