import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Blood() {

    const [selectBlood, setSelectBlood] = useState('')
    const [bloodData, setBloodData] = useState([])
    const [filteredBlood,setFilteredBlood] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/blood/get`)
            .then(res => {
                setBloodData(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleSelectBlood = (e)=>{
        const filtered = bloodData.filter(x => x.bloodGroup === e.target.value)
        setFilteredBlood(filtered)
        switch(e.target.value){
            case 'a+': setSelectBlood('a+')
            case 'a-': setSelectBlood('a-')
            case 'b+': setSelectBlood('b+')
            case 'b-': setSelectBlood('b-')
            case 'ab+': setSelectBlood('ab+')
            case 'ab-': setSelectBlood('ab-')
            case 'o+': setSelectBlood('o+')
            case 'o-': setSelectBlood('o-')
        }
    }
    return (
        <div>
            <select onChange={handleSelectBlood}>
                <option value='select-an-option'>Select an option</option>
                <option value='a+'>A+</option>
                <option value='a-'>A-</option>
                <option value='b+'>B+</option>
                <option value='b-'>B-</option>
                <option value='ab+'>AB+</option>
                <option value='ab-'>AB-</option>
                <option value='o+'>O+</option>
                <option value='o-'>O-</option>
            </select>
<div style={{display:'flex'}}>
            {filteredBlood.map(e=>(
                <ul key={e.id} style={{margin:'50px'}}>
                    <li style={{listStyleType:'none'}}>Name:</li>
                    <li style={{listStyleType:'none'}}>{e.name}</li>
                    <li style={{listStyleType:'none'}}>Age:</li>
                    <li style={{listStyleType:'none'}}>{e.age}</li>
                    <li style={{listStyleType:'none'}}>City:</li>
                    <li style={{listStyleType:'none'}}>{e.city}</li>
                    <li style={{listStyleType:'none'}}>Blood Group:</li>
                    <li style={{listStyleType:'none'}}>{e.bloodGroup}</li>
                    <li style={{listStyleType:'none'}}>Contact:</li>
                    <li style={{listStyleType:'none'}}>{e.contact}</li><br/><br/>
                </ul>
            ))}
            </div>
        </div>
    )
}
