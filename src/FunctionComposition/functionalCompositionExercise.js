import {pipe, compose} from './composeAndPipeFunctions'

export const functionalCompositionExercise = () => {
    const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

    const boostSingleScores = scores => scores.map(val => (val < 10) ? val * 10 : val);
    
    const rmvOverScores = boostSingleScores => boostSingleScores.filter(val => val <= 100);
    
    const rmvZeroScores = rmvOverScores => rmvOverScores.filter(val => val > 0);
    
    const scoresSum = rmvZeroScores => rmvZeroScores.reduce((sum, val) => sum + val, 0);
    
    const scoresCnt = rmvZeroScores => rmvZeroScores.reduce((cnt, val) => cnt + 1, 0);
    
    //Convert each statement to a function that can accept and act on any array.
    // DONE!
    //Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.

    const bootSingleAndRemoveOver = pipe(boostSingleScores, rmvOverScores);
    console.log('remove single and over')
    console.log(bootSingleAndRemoveOver(scores))
    //Compose a function that will do all the modifications to an array. Test it using the scores array.
    
    //Create a function that will accept an array and return the average. Use the function that sums scores and the function that counts scores or the length property.
    
    //Compose a function that will do all the modifications on an array and return an average.  
}

