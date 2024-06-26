'use client';

import { useState, useEffect } from "react";
import Navber from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Handle_Click from "@/app/components/handle/handleclick";
import getData from "@/app/components/CLUD/get";
import deleteData from "@/app/components/CLUD/delete"; // Import the deleteData function
import styles from '@/app/styles/faculty.module.css'

export default function Faculty() {
    const [facultys, setFacultys] = useState([]);
    
    //แสดงชื่อหน่วยงาน
    useEffect(() => {
        async function fetchData() {
            const param = "faculty";
            const data = await getData(param);
            setFacultys(data.faculty);
        }
        fetchData();
    }, []);

    //เรียกใช้ HandleDelete เพื่อลบข้อมูล
    const handleDelete = async (idfaculty) => {
        try {
            await deleteData(idfaculty);
            setFacultys(facultys.filter(faculty => faculty.idfaculty !== idfaculty));
        } catch (error) {
            console.error("Error deleting faculty:", error);
        }
    };

    return (
        <div>
            <Navber />
            <div className={styles.container} >
                <div>รายชื่อหน่วยงาน</div>
                <Handle_Click path="/add_department" buttonText="เพิ่ม" /> &nbsp;
                <Handle_Click path="/edit_add_department" buttonText="แก้ไข" />
                {facultys.map((faculty, index) => (
                    <div key={index}>
                        {faculty.name} : &nbsp;
                        {faculty.total} ราย | &nbsp;
                        {faculty.rname}
                        <button onClick={() => handleDelete(faculty.idfaculty)}>ลบ</button>
                    </div>
                ))}
                </div>
            <Footer />
        </div>
    );
}
