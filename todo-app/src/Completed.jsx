import './completed.css'
export default function Completed ({t,ac}){

   return(
    <div className="c-main">
    
    <h1 className="completed">Totla Todos {t}</h1>
    <h1 className='incomplete'>Totla Compelete {ac}</h1>
    </div>
)
}