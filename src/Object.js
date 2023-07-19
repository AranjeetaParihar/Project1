
import { useState } from "react";

function Object(){

    const [records, setRecords] = useState([
        {id:1, fname:"tony1", lname:"ezekiel1", contact:"12345"},
        {id:2, fname:"tony2", lname:"ezekiel2", contact:"123456"},
        {id:3, fname:"tony3", lname:"ezekiel3", contact:"123457"},
        {id:4, fname:"tony4", lname:"ezekiel4", contact:"123458"},
        {id:5, fname:"tony5", lname:"ezekiel5", contact:"123459"},
    ]);

    let new_records = Object.assign({}, records); //<-- make a copy of color
    new_records = new_records.map(x => { 
    if (x.id === 3) x.fname = "old tony";
    return x;
    }
    ); // modify name property for id === 1
    setRecords(new_records); 

}

// const records = [
//             {id:1, fname:"tony1", lname:"ezekiel1", contact:"12345"},
//             {id:2, fname:"tony2", lname:"ezekiel2", contact:"123456"},
//             {id:3, fname:"tony3", lname:"ezekiel3", contact:"123457"},
//             {id:4, fname:"tony4", lname:"ezekiel4", contact:"123458"},
//             {id:5, fname:"tony5", lname:"ezekiel5", contact:"123459"},
//         ]

// // const filtered_record = records.filter(each_record => each_record.id > 3)
// // console.log(filtered_record)

// for(let x in records){
//     if(records[x].id === 3){
//         records[x].fname = "new tony";
//     }
// }

// console.log(records)
