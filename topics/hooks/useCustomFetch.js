import  {useState, useEffect} from 'react';

function useCustomFetch(url){
   const [data, setData] = useState(null);
   const [err, setErr] = useState(null);
   const [load, setLoad] = useState(null);

   async function customFetch(url){
       try{
         let res = await fetch(url);
         let resData = await res.json();
         setData({resData});
         setLoad(false);
       } catch(e){
          setErr(e);
          setLoad(false);
       }
   }

   useEffect(()=>{
      setLoad(true);
      setTimeout(()=>{
          if(url)
          customFetch(url)
      }, 3000);
   }, [url])
  
   return [data, load, err];
}
export default useCustomFetch;