// declare variables / constants
const diceElements = Array.from(document.querySelectorAll('.dice'));
const maxRerolls = 2;
const rerollDisplay = document.getElementById('reroll-count');
const submitBtn = document.getElementById('submitBtn');
let diceValues = [0, 0, 0, 0, 0];
let rerollCount = 0;
let highScore = 0;
let extraTurnPending = false;

// function to count dice
function countOccurrences(values) {
    const counts = Array(7).fill(0);
    values.forEach(v => counts[v]++);
    return counts;
}

// main function to get score
function getScore(category, values) {
    if (values.some(v => v < 1 || v > 6)) return 0;
    const counts = countOccurrences(values);
    const sum = values.reduce((a, b) => a + b, 0);

// big switch statement for each category
    switch (category) {
        // just count + multiply
        case 'ones': return counts[1] * 1;
        case 'twos': return counts[2] * 2;
        case 'threes': return counts[3] * 3;
        case 'fours': return counts[4] * 4;
        case 'fives': return counts[5] * 5;
        case 'sixes': return counts[6] * 6;
        // total dice if valid
        case 'threeKind': return counts.some(c => c >= 3) ? sum : 0;
        case 'fourKind': return counts.some(c => c >= 4) ? sum : 0;
        // check for 3 of one kind and 2 of another
        case 'fullHouse': return counts.includes(3) && counts.includes(2) ? 25 : 0;
        // check for small straight by comparing to array
        case 'smallStraight': {
            const straights = [
                [1, 2, 3, 4],
                [2, 3, 4, 5],
                [3, 4, 5, 6]
            ];
            const unique = [...new Set(values)].sort();
            return straights.some(straight => straight.every(num => unique.includes(num))) ? 30 : 0;
        }
        // check for large straight by sorting and comparing to array
        case 'largeStraight': {
            const s1 = [1, 2, 3, 4, 5], s2 = [2, 3, 4, 5, 6];
            const sorted = [...new Set(values)].sort((a, b) => a - b);
            return JSON.stringify(sorted) === JSON.stringify(s1) || JSON.stringify(sorted) === JSON.stringify(s2) ? 40 : 0;
        }
        // check for 5 of a kind
        case 'yahtzee': return counts.some(c => c === 5) ? 50 : 0;
        // yahtzee bonus only triggers if a yahtzee has been scored and you roll another - stacks up to 3 times
        case 'yahtzeeBonus': {
            const yahtzeeScored = document.querySelector('[data-score="yahtzee"]').classList.contains('used-score') &&
                document.getElementById('score-yahtzee').textContent !== '0';
            const bonusCell = document.getElementById('score-yahtzeeBonus');
            let currentBonus = parseInt(bonusCell.textContent) || 0;
            if (yahtzeeScored && counts.some(c => c === 5)) {
                return currentBonus + 100;
            }
            return currentBonus || null;
        }
        // just total all dice, no requirements
        case 'chance': return sum;
        default: return 0;
    }
}
// used to enable / disable highlighting of scores when submit button is pressed
function enableScoreClicks(enable) {
    document.querySelectorAll('[data-score]').forEach(item => {
        const category = item.getAttribute('data-score');
        // special case for yahtzee bonus because it is the only category that isn't available by default
        if (category === 'yahtzeeBonus') {
            const score = getScore('yahtzeeBonus', diceValues);
            const counts = countOccurrences(diceValues);
            const yahtzeeScored = document.querySelector('[data-score="yahtzee"]').classList.contains('used-score') &&
                document.getElementById('score-yahtzee').textContent !== '0';
            // checks requirements to score yahtzee bonus and lights up if available
            if (score !== 0 && !item.classList.contains('used-score') && yahtzeeScored && counts.some(c => c === 5)) {
                item.classList.remove('disabled-score');
                item.classList.add('clickable-score');
            }
            else {
                item.classList.add('disabled-score');
                item.classList.remove('clickable-score');
            }
        }
        // used for everything else
        else if (!item.classList.contains('used-score')) {
            if (enable) {
                item.classList.remove('disabled-score');
                item.classList.add('clickable-score');
            } else {
                item.classList.add('disabled-score');
                item.classList.remove('clickable-score');
            }
        }
    });
    // re-enable submit button
    submitBtn.disabled = !enable;
}

// disable highlighting on page load / after score is submitted
enableScoreClicks(false);

// allows selection of dice
diceElements.forEach((die, index) => {
    die.addEventListener('click', () => {
        die.classList.toggle('selected');
    });
});

// roll button
document.getElementById('rollBtn').addEventListener('click', () => {
    if (rerollCount > maxRerolls) return;
    // roll selected dice
    diceElements.forEach((die, index) => {
        const shouldRoll = rerollCount === 0 || die.classList.contains('selected');
        if (shouldRoll) {
            // this is the line that rolls the dice - if you want to cheat do it here
            //const value = 6; // roll all 6s
            const value = Math.floor(Math.random() * 6) + 1;
            diceValues[index] = value;
            die.src = `die${value}.png`;
            die.classList.remove('selected');
        }
    });
    // count rerolls (max of 2)
    rerollCount++;
    if (rerollCount > maxRerolls) {
        document.getElementById('rollBtn').disabled = true;
    }
    rerollDisplay.textContent = Math.max(0, maxRerolls - (rerollCount - 1));
    // enable submit button after first roll
    submitBtn.disabled = false;
});

// function that is called to reset everything after each score
function resetTurn() {
    // reset rerolls, dice, disable scoring, and disable roll button
    rerollCount = 0;
    rerollDisplay.textContent = maxRerolls;
    diceValues = [0, 0, 0, 0, 0];
    diceElements.forEach(die => {
        die.src = "die1.png";
        die.classList.remove('selected');
    });
    enableScoreClicks(false);
    document.getElementById('rollBtn').disabled = false;
}

// function used to total scores
function updateTotals() {
    // detect and score upper category
    const upperCategories = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'];
    let upperSubtotal = 0;
    upperCategories.forEach(cat => {
        const val = parseInt(document.getElementById(`score-${cat}`).textContent);
        if (!isNaN(val)) upperSubtotal += val;
    });
    // subtotal upper and apply bonus if needed
    document.getElementById('subtotal-upper').textContent = upperSubtotal;
    const bonus = upperSubtotal >= 63 ? 35 : 0;
    document.getElementById('bonus').textContent = bonus;
    document.getElementById('total-upper').textContent = upperSubtotal + bonus;

    // detect and score lower category
    const lowerCategories = ['threeKind', 'fourKind', 'fullHouse', 'smallStraight', 'largeStraight', 'yahtzee', 'yahtzeeBonus', 'chance'];
    let lowerTotal = 0;
    lowerCategories.forEach(cat => {
        const val = parseInt(document.getElementById(`score-${cat}`).textContent);
        if (!isNaN(val)) lowerTotal += val;
    });
    document.getElementById('total-lower').textContent = lowerTotal;

    // total everything
    const totalScore = upperSubtotal + bonus + lowerTotal;
    document.getElementById('score-total').textContent = totalScore;
}

// show play again button and total highscore
function showPlayAgain(totalScore) {
    document.getElementById('play-again-container').style.display = 'block';
    const score = parseInt(totalScore);
    if (!isNaN(score) && score > highScore) {
        highScore = score;
        document.getElementById('high-score').textContent = highScore;
    }
}

// detect if scorecard is full and display play again button / score
function checkGameOver() {
    const allScored = Array.from(document.querySelectorAll('[data-score]'))
        .filter(el => el.getAttribute('data-score') !== 'yahtzeeBonus')
        .every(el => el.classList.contains('used-score'));

    if (allScored) {
        const total = document.getElementById('score-total').textContent;
        alert(`Game Over! Final score: ${total}`);
        console.log("Game Over. Final Score:", total);
        showPlayAgain(total);
        document.querySelector('[data-score="yahtzeeBonus"]').classList.remove('disabled-score');
    }
}

// enable scoring if submit is pressed
submitBtn.addEventListener('click', () => {
    enableScoreClicks(true);
    submitBtn.disabled = true;
});

// function used to detect click on scorecard
document.querySelectorAll('[data-score]').forEach(item => {
    item.addEventListener('click', () => {
        // if score is disabled / used, do nothing
        if (item.classList.contains('used-score') || item.classList.contains('disabled-score')) return;
        const category = item.getAttribute('data-score');
        const score = getScore(category, diceValues);
        if (category === 'yahtzeeBonus' && score === null) return;

        const span = item.querySelector('span');
        span.textContent = score;
        item.classList.add('used-score');
        item.classList.remove('clickable-score');

        // code for multiple bonuses (up to 3)
        if (category === 'yahtzeeBonus' && score !== 0 && score < 300) {
            extraTurnPending = true;
            item.classList.remove('used-score');
        }
        else if (category === 'yahtzeeBonus' && score !== 0) {
            extraTurnPending = true;
        }
        // reset / update everything and check for game over
        resetTurn();
        updateTotals();
        checkGameOver();

        // display extra turn message if yahtzee bonus
        if (extraTurnPending) {
            extraTurnPending = false;
            alert("Yahtzee Bonus! You get an extra turn!");
        }
    });
});
// code for clicking play again button
document.getElementById('playAgainBtn').addEventListener('click', () => {
    // reset all scores
    document.querySelectorAll('[data-score] span').forEach(span => {
        span.textContent = "-";
    });
    // reset disabled / used scores
    document.querySelectorAll('[data-score]').forEach(item => {
        item.classList.remove('used-score', 'disabled-score');
        if (item.getAttribute('data-score') !== 'yahtzeeBonus') {
            item.classList.add('clickable-score');
        }
    });
    // reset totals / subtotals and remove play again button
    document.getElementById('subtotal-upper').textContent = '-';
    document.getElementById('bonus').textContent = '-';
    document.getElementById('total-upper').textContent = '-';
    document.getElementById('total-lower').textContent = '-';
    document.getElementById('score-total').textContent = '-';
    document.getElementById('play-again-container').style.display = 'none';
    // reset everything else with the turn function
    resetTurn();
});