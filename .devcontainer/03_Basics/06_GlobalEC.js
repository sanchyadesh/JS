/*
JavaScript Execution Context:
code ---> Global EC
             ^
 -           |   (Refers to this)
             |  (This Keyword)   
             
Types of EC: (Execution Context)
a. Global Execution Context 
b. Functional Execution Context
c. Eval Execution Context (Related to MONGO DB, but that much important)

 1. JS is a Single threaded programming language   
 
 IMPORTANT:
 2. JS program was executed in two phases 
    a. Memory Creation Phase
    b. Execution Phase
 

Whenever any JS code executes: (It goes through)
1. Global Execution / Global Environment ---> Which is been allocated in this keyword.
2. Memory Phase  ---> (It stores all the variables together in one place and all that variables are stored with Undefined status, also functions/Objects will be stored with definition Status)
    e.g- Below program stores
        val1 --> undefined
        val2 --> undefined
        mySum --> definition
        s11 --> undefined
        s21 --> undefined
3. Execution Phase
     val1 <--- 10
     val2 <--- 5
     mySum (Not required, because we already defined this)
     mySum--> Variable Environment
           Exection thread 
     |          |
            a.Memory Phase
     |        val1 --> undefined  (Act as num1)
              val2 --> undefined  (Act as num2) //Because this is totally dependent on function
     |        total --> undefined
            b.Execution Phase
     |        val1 <-- 10   /num1
              val2 <-- 5    //num2
     |        total --> 15   //total = num1 + num2 (total = val1 + val2) 

     |        //Note: This total variable will be flows to the  global execution phase
            
     |       C. Then this get deleted and back to the parent process
              
     S1 --> 15
     S2 -->  mySum--> Variable Environment
           Exection thread 
     |          |
            a.Memory Phase
     |        val1 --> undefined  (Act as num1)
              val2 --> undefined  (Act as num2) //Because this is totally dependent on function
     |        total --> undefined
            b.Execution Phase
     |        val1 <-- 10   /num1
              val2 <-- 12   //num2
     |        total --> 22   //total = num1 + num2 (total = val1 + val2) 

     |        //Note: This total variable will be flows to the  global execution phase (Starting Global Execution Phase)
            
     |       C. Then this get deleted and back to the parent process


Note: For every function it will create new cycle
*/

let val1 = 10
let val2 = 5
function mySum(num1, num2){
    let total = num1 + num2
    return total

}
let s1 = mySum(val1 + val2)
// let s2 = mySum(num1 + num2)
let s3 = mySum(10,12)

//--------------------------------------------------------------------------------------
//Call stack
function one(){
       console.log("one")
           two()
       }
       
       function two(){
           console.log("two")
            three()
       }
       
       function three(){
       console.log("three")
       }
       
       one()
       two()
       three()
       //Note: For better understanding use browser inspect, source-Snippet-breakpoint-run-breakthrough (observe call stack and console)
//---------------------------------------------------------------       