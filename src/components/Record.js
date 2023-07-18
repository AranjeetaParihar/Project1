 
function Record(props){

    function createRecord(r){
        return(
        <tr >
            <td >{r.lname}</td>
            <td >{r.fname}</td>
            <td >{r.contact}</td>
            <td ><button type="button" class="btn btn-secondary" onClick="alert('Hello world!')">Edit</button>
            <button type="button" class="btn btn-secondary" onClick="alert('Hello world!')">Delete</button></td>
        </tr>
        );
    }

    return (
        <div>
            
            <div  id="table-wrapper">
                <table>
                <tr >
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Contact</th>
                    <th>Actions</th>
                </tr>
                {props.records.map(createRecord)}
                </table>
            </div>
        </div>
    )
}

export default Record; 
 