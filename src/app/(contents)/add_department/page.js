'use client';
import { useState } from 'react';
import Navber from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Handle_Click from "@/app/components/handle/handleclick";
import postData from "@/app/components/CLUD/post"

export default function AddDepartment() {
    const [name, setName] = useState('');
    const [total, setTotal] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const departmentData = { name, total };

        try {
            const result = await postData('add_department', departmentData);
            console.log('Department added successfully:', result);
            // Optionally reset form fields or handle success
            setName('');
            setTotal('');
        } catch (error) {
            console.error('Error adding department:', error);
            // Handle error case
        }
    };

    // // Check if the form is valid
    // const isFormValid = name.trim() !== '' && total.trim() !== '';

    return (
        <div>
            <Navber />
            <div>
                เพิ่มหน่วยงาน
                <form onSubmit={handleSubmit}>
                    <div>
                        หน่วยงาน : &nbsp;
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        จำนวนเข้ารับ : &nbsp;
                        <input
                            type="number"
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                            required
                        />
                    </div>
                    {/* <button type="submit" disabled={!isFormValid}>บันทึก</button> &nbsp; */}
                    <Handle_Click path="/faculty" buttonText="บันทึก" />
                    <Handle_Click path="/faculty" buttonText="ย้อนกลับ" />
                </form>
            </div>
            <Footer />
        </div>
    );
}
