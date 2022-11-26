import React, { useEffect, useState } from 'react';


const DataContext =  React.createContext({
    player1totall:0,
    status:false,
    player2total:0,
    setValue:(type,val)=>{},
    setstatus:()=>{},
    Reset:()=>{}
})

export const DataContextProvider = (props)=>
{
const [data,setdata] =  useState(0);
const [data1,setdata1] =  useState(0);
const [stat,setstat] = useState(false);


useEffect(()=>
{
  console.log("worked");
},[data,data1])

const setValue2=(type,val)=>
{
    if(type == true)
    {
        if(data+val<=100)
        {
        setdata(data+val);
        }
        // console.log("chak de");
    }
    else if(type == false)
    {
        if(data1+val<=100)
        {
        setdata1(data1+val);
        }
    }
    // else if(type == false && val < 6)
    // {
    //     setdata1(data1+val);
    // }
}

const setstatusval =()=>
{
   setstat(!stat);
}

const reset = () =>
{
    setdata(0);
    setdata1(0);
}


    return (<DataContext.Provider value={{player1totall:data,player2total:data1,setValue:setValue2,setstatus:setstatusval,status:stat,Reset:reset}}>
     {props.children}
    </DataContext.Provider>
    )
}
 export default DataContext
