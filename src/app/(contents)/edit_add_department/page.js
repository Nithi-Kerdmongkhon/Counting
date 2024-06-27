'use client';

import { useState, useEffect } from 'react';
import Navber from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Handle_Click from "@/app/components/handle/handleclick";
import getData from "@/app/components/CLUD/get";

export default function EditAddDepartment() {
    const [facultys, setFacultys] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const param = "faculty";
            const fetchedFacultys = await getData(param);
            setFacultys(fetchedFacultys.faculty);
        }
        fetchData();
    }, []);

    const handleFieldChange = (index, field, value) => {
        setFacultys(prevFacultys =>
            prevFacultys.map((faculty, i) =>
                i === index ? { ...faculty, [field]: value } : faculty
            )
        );
    };

    const handleSave = async (index) => {
    
};


    return (
        <div>
            <Navber />
            <div>หน่วยงาน</div>
            
            {facultys.map((faculty, index) => (
                <div key={index}>
                    หน่วยงาน: <input
                        type="text"
                        value={faculty.name}
                        onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                    />&nbsp;
                    จำนวนเข้ารับ: <input
                        type="text"
                        value={faculty.total}
                        onChange={(e) => handleFieldChange(index, 'total', e.target.value)}
                    />&nbsp;
                    <input
                        type="text"
                        value={faculty.rname}
                        onChange={(e) => handleFieldChange(index, 'rname', e.target.value)}
                    />&nbsp;
                    <button onClick={() => handleSave(index)}>บันทึก</button>
                </div>
            ))}
            <Handle_Click path="/faculty" buttonText="ย้อนกลับ" /> &nbsp;
            <Footer />
        </div>
    );
}
