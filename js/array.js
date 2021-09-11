"use strict";
const salary = 7500;
const friendSalaries = [7500, 12300, 17200, 9400, 8400];
const friends = ['sakib', 'tamim', 'musfiq', 'nokib'];
// friendSalaries[0] = 10500;
// friendSalaries.push(10700);
friends.push('akib');
friends[2] = ('akib');
// friends.push(34000);
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
