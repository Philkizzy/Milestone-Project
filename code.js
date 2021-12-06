const url = 'https://opentdb.com/api.php?amount=5&type=multiple';
let number = 0
localStorage.setItem("score", number)
async function getTrivia() {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function changePosition(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const s = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[s]] = [arr[s], arr[i]];
  }
}

getTrivia().then((data) => {
   
  const results = data.results[0];
  console.log(results);
  document.getElementById('question').innerHTML = results.question;
  document.getElementById('category').innerHTML = results.category;
  const answers = [...results.incorrect_answers, results.correct_answer];
  changePosition(answers);
  for (let i = 0; i < 4; i++) {
    let index = i + 1;
    document.getElementById(`choice${index}label`).innerHTML = answers[i];
    document.getElementById(`choice${index}`).value = answers[i];
  }

  document.getElementById('display').style.display = 'block';
   
    document.getElementById('guess').addEventListener('click', () => {
      
    document.querySelectorAll('input[name="choice"]').forEach((el) => {
      
      const result = document.getElementById('result');
      
      if (el.checked){
       
        console.log(el.value);
        console.log(results.correct_answer);

        if (el.value === results.correct_answer) {
            document.getElementById('result').style.color = 'green';
            document.getElementById('result').innerHTML = "Yes ! That's the answer."
           
            number++;
            console.log(number)
        }
        
         
        else{

            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML = `Sorry! The answer is ${results.correct_answer}`
           
        }
    }

      });
  });
  
});



document.getElementById('new').addEventListener('click', () => {
    
 window.location.reload();
document.getElementById("result1").innerHTML = localStorage.getItem("score");
});







