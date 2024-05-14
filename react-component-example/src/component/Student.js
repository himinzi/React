const Student = (props) => { // props는 객체!
    // let no = props.no;
    // let name = props.name;
    const {no, name} = props.std; // 객체 분해!!!!!!!
    return(
        <div>
            <h3>학번 : {no}</h3>
            <h3>이름 : {name}</h3>
        </div>
    )
}

export default Student;