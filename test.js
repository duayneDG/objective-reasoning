// function filter_list(list) {
  
//     let filteredList = list.filter(function(filter){
//         return filter > 0
//     })
//     return filteredList
    
//     // Return a new array with the strings filtered out
//   }

function filter_list(list2) {
 
    const onlyNumbers = list2.filter(function(element){
        if (Number.isInterger(element)){
            return element
        }
        return element 
        })  
        return element
        
    }
    console.log(onlyNumbers)
    // console.log(onlyNumbers)
        
  
//   let list = [1,2,'a','b']
  let list2 = [1,2,"aasf","1","123",123]

//   console.log(filter_list(list))
  console.log(filter_list(list2))