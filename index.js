import './style.css';
const appDiv = document.getElementById('app');

// simple Fibonacci sequence via array
const fibSeq = [0, 1];
const maxSteps = 10;

for (let i = 2; i < 10; i++) {
  fibSeq[i] = fibSeq[i - 2] + fibSeq[i - 1];
}

console.log(fibSeq);
appDiv.innerHTML = fibSeq.join('<br>');
