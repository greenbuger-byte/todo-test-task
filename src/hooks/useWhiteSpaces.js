import {Fragment} from "react";

const useWhiteSpaces = (options) => {
   return (text) =>{
       if(options && options === 'revert') return  text.split('<br />').map((w,i) =>`${w} \n`);
       return  text.split('\n').map((w, i) => <Fragment key={i}>{w}<br/></Fragment>)
   }
}

export default useWhiteSpaces;