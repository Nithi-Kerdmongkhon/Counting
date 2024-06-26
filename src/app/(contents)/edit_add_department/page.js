"use client"
import Navber from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Handle_Click from "@/app/components/handle/handleclick"
import getData from "@/app/components/CLUD/get";


export default async function edit_add_department() {
        const param = "faculty";
        const facultys = await getData(param)
		console.log(facultys)
    return (
        <div>
            <Navber />
            <div>หน่วยงาน</div>
            <Handle_Click path="/faculty" buttonText="ย้อนกลับ" /> &nbsp;
            {facultys.faculty.map((faculty , index ) => (
                    <div key={index}>  
                      หน่วยงาน :  <input type="text" value={faculty.name} onChange={(e) => handleNameChange(e.target.value)} />&nbsp;
                      จำนวนเข้ารับ : <input type="text" value={faculty.total} onChange={(e) => handleNameChange(e.target.value)} />&nbsp;
                          
                        
                        <button>บันทึก</button>
                    </div> 
            ))}
            <Footer />
        </div>
    )

  }