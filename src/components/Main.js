import React ,{useState,useContext, useCallback}from 'react';
import classes from './apply.module.css';
import styled from 'styled-components';
import DataContext from '../Context/DataContext';
import ReplayIcon from '@mui/icons-material/Replay';
import LoopIcon from '@mui/icons-material/Loop';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
const Main = () => {
    const [current ,setcurrent] = useState("1");
   const [roll,setroll] = useState("odd-roll");
   const [count,setcount] = useState(0);
   const [count1,setcount1] = useState(0);
   const [turn,setturn] = useState(true);
   const val = useContext(DataContext);

  const cal = val.player1totall;
  const cal2 = val.player2total;

    const DiceRoll = ()=>
    {
        val.setstatus();
        console.log(turn);
        console.log("df",val.player1totall);
        console.log("sd",val.player2total);
       
         var v = getRandomNumber(1, 6);
         var t = v;

         const Solve = () =>
         {
          if(turn == true)
          {
            if( t== 6 || t==5)
            {
                val.setValue(turn,t);
            }
            else{
                val.setValue(turn,t);

            }
            setcount(count+1);
          }
          else if (turn == false)
          {
            if(t == 6 || t==5)
            {
                val.setValue(turn,t);
            }
            else
            {
                val.setValue(turn,t);
            }
            setcount1(count1+1);
          }
        }
       
         
          v = v.toString();
          toggleClasses(roll)
          console.log(typeof(v));
          setcurrent(v);
         setTimeout(()=>
         {
          if(t == 6)
          {
           // setturn(false);
           Solve();
           val.setValue(turn,t);
          //  if(t == 6 || t==5)
          //  {
          
          //  }
          }
          else if( t<6)
          {
           Solve();
           val.setValue(turn,t);
           setturn(!turn);
          
          }
        },1100)
        }
                    
        //  },1100)
          // console.log(tye)

 
    function toggleClasses(die) {
      if(die == "odd-roll")
      {
          setroll("even-roll");
      }
      else
      {
          setroll("odd-roll");
      }
    }

      function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;     
      }
      const Reset = () =>
      {
        val.Reset();
        setturn(true);
        setcount(0);
        setcount1(0);
      }
      const Back = ()=>
      {
        val.Reset();
        setturn(true);
        setcount(0);
        setcount1(0);
      }
  return (
    <>
   
    <Div valued={turn} valued2={val.player1totall} valued3={val.player2total}>
    { (val.player1totall < 100 && val.player2total < 100) &&
      <>
        <div class="gap1">
            <h2>
             <b style={{top:'15px',cursor:'pointer'}}  title="Reset" > <RestartAltIcon style={{color:'red' }} onClick={Reset}></RestartAltIcon> </b>
            </h2>
        </div>
        <div class="gap2">
            <div  style={{display:'flex',flexDirection:'row'}}>
                <h2>PLAYER 1</h2>
                <Spn valued={turn}></Spn>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <h2>PLAYER 2</h2>
            <Spn1 valued={turn}></Spn1>
            {/* <div >
  

 </div> */}
            </div>
        </div>
    <div class="gap3">
            <div><h1 style={{fontSize:'49px'}}>{val.player1totall}</h1></div>
    <div class="dice">
      <ol class={`die-list ${roll}`} data-roll={current} id="die-1" >
        <li class="die-item" data-side="1">
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="2">
          <span class="dot"></span>
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="3">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="4">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="5">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="6">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </li>
      </ol>
      
    </div>
    <div><h1 style={{fontSize:'49px'}}>{val.player2total}</h1></div>
    </div>
    <div class="gap4">
        <div style={{height:'60px',width:'100px',backgroundColor:' #ED2939',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
          <p style={{marginBottom:'2px'}}>Moves</p>  
            {count}
        </div>
        <div style={{marginTop:'11px'}}>
        <button style={{border:'2px solid grey',padding:'5px 5px',borderRadius:'14px',outline:'none',textDecoration:'none',marginTop:'-20px'}} onClick={DiceRoll} >Roll Dice</button>
 
        </div>
        <div style={{height:'60px',width:'100px',backgroundColor:'#ED2939',textAlign:'center',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
        <p style={{marginBottom:'2px'}}>Moves</p>  
            {count1}
        </div>
        
      </div>
      </>
    }
    {val.player1totall == 100 ? <h1 style={{color:'white',fontWeight:'bold'}}>Congrats Player 1 Won</h1> : val.player2total == 100 ? <h1 style={{color:'white',fontWeight:'bold'}}> Congrats Player 2 Won</h1> : " "}
    {(val.player1totall == 100 || val.player2total == 100) && 
    <div>
    <button onClick={Back} style={{color:'white'}}>Play Again</button>
    <br/>
    <RestartAltIcon style={{color:'white',cursor :'pointer',marginLeft:'5px', marginTop:'23px' }} onClick={Reset}></RestartAltIcon>
    </div>
    
    }
    </Div>


 
    </>
  )
}
const Div =  styled.div`
width:690px;
height:500px;
background:${(props) => (props.valued2 == 100 ? 'green' : props.valued3 == 100  ? 'green' : props.valued ? "linear-gradient(to right,rgb(224, 222, 222)  50%, white 50%)" : "linear-gradient(to right, white 50%,rgb(224, 222, 222)  50%)")};
// background: ${(props) => (props.valued ? "linear-gradient(to right,rgb(224, 222, 222)  50%, white 50%)" :"linear-gradient(to right, white 50%,rgb(224, 222, 222)  50%)")};
display: flex;
// margin-top: 20px;
justify-content:space-around;
flex-direction:column;

`

const Spn =  styled.span`
height: 14px;
width: 14px;
background-color: #ED2939;
border-radius: 50%;
margin-top:10px;
margin-left:8px;
display: ${(props) => props.valued ? "#ED2939" : "none"};
`
const Spn1 =  styled.span`
height: 14px;
width: 14px;
background-color: #ED2939;
border-radius: 50%;
margin-top:10px;
margin-left:8px;
display: ${(props) => !props.valued ? "#ED2939" : "none"};
`

export default Main