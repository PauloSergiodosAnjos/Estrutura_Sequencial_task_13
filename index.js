// 13
let question = Number(prompt('Digite sua altura'));

function pesoIdeal() {
    return (72.7 * question) - 58;
}
console.log('O peso ideal para sua altura é', pesoIdeal().toFixed(2));


