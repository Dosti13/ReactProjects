import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [Question ,setQuestion] = useState([]) 
  const [currentQuestion,setcurrentQuestion] = useState(0)
  const [score,setscore] = useState(0)
  const [option ,setoption ]= useState(null)
  const [showResult, setShowResult] = useState(false);
  const [disable,setdisble] = useState(false)
  const [shuffledAnswer,setShuffledAnswers] = useState([])
  const [quizEnd,setquizEnd] = useState(false)
  const [restart , setrestart ]= useState(true)
  const [loading ,setloading] = useState(true)
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log('Fetching questions...');
        const response = await fetch('https://the-trivia-api.com/api/questions?limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        // console.log('Received data:', data);
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Invalid data format received');
        }
        setQuestion(data);
        setloading(false);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load questions. Please try again later.');
        setloading(false);
      }
    };

    fetchQuestions();
  }, [restart]);



useEffect(() => {
  if (Question.length > 0) {
    const answers = [
      ...(Question[currentQuestion]?.incorrectAnswers ?? []),
      Question[currentQuestion]?.correctAnswer
    ];
    setShuffledAnswers([...answers].sort(() => Math.random() - 0.5));
  }
}, [currentQuestion, Question]);


const correctAnswer =  Question?.[currentQuestion]?.correctAnswer
const handleClick =(answer , index)=>{
  if (disable) return;
  if (correctAnswer === answer) {
    setscore(score +1) 
  }
  setoption(index)
  setShowResult(true)
  setdisble(true)
  // console.log(correctAnswer);
  // console.log(answer,index);
  
}

  const handleClassName = (answer, index) => {
    if (!showResult) return 'bg-gray-100 text-black hover:bg-gray-200';
    
    // const correctAnswer = Question?.[currentQuestion]?.correctAnswer;
    
    if (answer === correctAnswer) return 'bg-green-100';
    if (option === index) return 'bg-red-100';
    
    return 'bg-gray-100';
  }
  
 
const nextbtn = ()=>{
if (currentQuestion < Question.length-1 )  
{  
  if (disable) {setcurrentQuestion(currentQuestion +1)}
  setdisble(false)
  setShowResult(false)
  setrestart()}
  else{
    setquizEnd(true)
  }

}
const restartQuiz = ()=>{
  setcurrentQuestion(0)
  setscore(0)
  setoption(null)
  setShowResult(false)
  setdisble(false)
  setquizEnd(false)
  setrestart(prev =>!prev)
}
//  console.log(answers);
  return (
    <>
    <section className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
    <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full'>
<h1 className=' text-4xl text-center shadow-md p-2 bg-slate-300'>Quiz App </h1>
      
         {!quizEnd ?(
         <>
          <h1 className='text-xl font-bold mb-4 bg-slate-200 p-2 mt-2'>{Question?.[currentQuestion]?.question}</h1>
        <div className='flex justify-center flex-col '>
          <ul className='flex flex-col '>
          {shuffledAnswer.map((answer ,index)=>(
            <li key={index} onClick={()=>handleClick(answer,index)} className={`p-2 my-2 ${handleClassName(answer,index)}`

            }>{answer}</li>
          ))}
          </ul>
        </div>

        <button className='p-2 bg-cyan-600 text-center rounded-lg' onClick={nextbtn}>{currentQuestion > Question.length-1  ? "Finish" : "Next" }</button>
        
          </>
        ):(
          <div className='text-center'>
            <h2 className='text-2xl font-bold mb-4'>Quiz Completed!</h2>
            <p className='text-xl mb-4'>Your Score: {score} out of {Question.length}</p>
            <button className='p-2 bg-cyan-600 text-white text-center rounded-lg' onClick={restartQuiz}>
              Restart Quiz
            </button>
          </div>
        )
        }


        </div>

    </section>
      </>
  )
}

export default App
