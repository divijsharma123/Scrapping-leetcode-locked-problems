let my_html_file_document=window.document;
document.getElementById('button').addEventListener('click', loadData);
let flag=0;
function loadData() {
  if(flag==0)
  {
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'leet.JSON', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }
  let page_arrays;
  
  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      page_arrays=JSON.parse(this.responseText);
      let count_total_probs=0;
      for(let i=0;i<page_arrays.length;i++)
      {  let page_id=page_arrays[i][0];
        document.querySelector("div#output").innerHTML+=`<ol id=${page_id}><h3>page ${page_id}</h3></ol>`;
        if(page_arrays[i].length==1)
        {
          document.getElementById(`${page_id}`).innerHTML+=`<h4>NO LOCKED PROBLEMS ON THIS PAGE!!!</h4>`;
        }
        count_total_probs+=(page_arrays[i].length-1);
        for(let j=1;j<page_arrays[i].length;j++)
        { 
         let problem=page_arrays[i][j];
          document.getElementById(`${page_id}`).innerHTML+=`<li>${problem}</li>`;
        }
       
        
      }
      document.querySelector("div#output").innerHTML=`<h4>NUMBER OF LOCKED PROBLEMS ARE ${count_total_probs}</h4>`+ document.querySelector("div#output").innerHTML;
    }
  }
 
  xhr.send();
  flag=1;
}
 else{
   alert("already displayed");
 } 
}
// the code below crawls all the locked problems on leetcode when you click on the page numbers and then prints a stringified object that will be copied in leet.Json , then you just need to run 


 /* let problems_dict=new Map();
function collect_set(page_no)
 {
   for(let i=0;i<window.document.querySelectorAll(".fa.fa-lock").length;i++)
   {  let x = window.document.querySelectorAll(".fa.fa-lock")
    if(x[i].parentElement.tagName=="SPAN")
    {
      let obj=x[i];
      if(obj.parentElement.getAttribute("data-original-title")==="Subscribe to unlock")
      {  let prob_name=obj.parentElement.parentElement.parentElement.parentElement.getAttribute("value");
          problems_dict[page_no].add(prob_name);
      }
        
     }
   
   }

 console.log(problems_dict);
 }
 
 
 document.addEventListener('click',my_func);
 function my_func(e)
 {
     let x=e.target;
     console.log(x.tagName);
     if(x.tagName=="A")
     {
     var page_no=x.getAttribute("href");
     if(!problems_dict.has(page_no))
     {
      problems_dict[page_no]=new Set();
       collect_set(page_no);
     }
     }
 }
 
 console.log(problems_dict);
 let final_problem_array=[];

 for(let page in problems_dict)
 { 
   let page_problems=problems_dict[page];
   page_problems=Array.from(page_problems);
   page_problems.unshift(page);
   final_problem_array.push(page_problems)
 }
 console.log(final_problem_array);
 let stringified_obj=JSON.stringify(final_problem_array);
 console.log(stringified_obj);
 // copy this stringified object and then store it in JSON
 */
 
 
 
 



