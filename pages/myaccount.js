import React,{useEffect} from 'react'
import { useRouter } from 'next/router'

const Myaccount = () => {
    const router = useRouter();

    // useEffect(() => {
    //   if(localStorage.getItem('token')){
    //       console.log("hello");
    // }
    // else{
    //       router.push('/')

    //   }
    // }, [router.query])
// console.log(router.query);



  return (
    <div>Myaccount</div>
  )
}

export default Myaccount