import React from 'react'
import { useState,useRef } from 'react'
import { ethers } from "ethers";

export default function GetPlanDetails() {
    const [planId,setPlanId]=useState("");
    

 const contract_address_plan="0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
 const ticket_abi=[
     "event createPlanEvent(uint indexed _planId, string _planName, uint _planCost, uint _planDuration);",
     "function plans() public view returns(uint256 planId,string planName,uint256 planCost,uint256 planStart, uint256 planDuration,uint256 planEnd,bool planValidity,uint256 planSubscribers)"
 ];

 async function reqAcct(){
    await window.ethereum.request({method:'eth_requestAccounts'});
  }
  async function getPlanDetail(){
 if (typeof window.ethereum !== 'undefined'){
    await reqAcct()
 const provider = new ethers.providers.Web3Provider(window.ethereum)
 const signer = provider.getSigner()
 const myAddress = await signer.getAddress()
 const contract= new ethers.Contract(contract_address_plan,ticket_abi,signer);
 const data=await contract.plans();
 await data.wait()
//  await myAddress.wait();
 //console.log(myAddress)
 console.log(planId)

 }

}


    // function getCreatePlanInfo(){
    //     console.log(name)
    //     console.log(time,cost)
        
    // }

  return (
    <div className='gap-3 bg-slate-300 mx-40 flex flex-col mt-20 pl-20 rounded shadow-lg'>
        
        <div className='flex flex-row gap-5 pt-10'>
            <label>
                Plan Id
            </label>
            <input onChange={e=>setPlanId(e.target.value)} type="text" />
        </div>
      
   
        <button onClick={getPlanDetail} className='bg-black text-white p-5 shadow-lg mb-10  mx-20  w-30 rounded'>
            Get Plan details
        </button>

    </div>
  )
}
