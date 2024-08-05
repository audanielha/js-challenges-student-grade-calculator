let subject= [
    {name:'Math', score: 80},
    {name:'English', score: 90},
    {name:'Science', score: 70},
    {name:'IT', score: 60},
    {name:'History', score: 95},
];

let totalScore = 0;

for (x of subject){
    totalScore += x.score;
}
let totalAverage = totalScore / subject.length;

function getGrade(x){
    if(x >= 90){return 'A'}
    if(x >= 80){return 'B'}
    if(x >= 70){return 'C'}
    if(x >= 60){return 'D'}
    if(x < 60){return 'F'}
}

let finalGrade = getGrade(totalAverage)

console.log(`Your average score was ${totalAverage}`);
console.log(`Your final grade was ${finalGrade}`)