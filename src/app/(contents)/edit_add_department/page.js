"use client"
import Navber from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Handle_Click from "@/app/components/handle/handleclick"

async function getFaculty() {
    const postData = {
        method: "GET",
        // cache: "no-cache",
        next: { revalidate: 0 },
        headers: {
            "Content-Type": "application/json"
        }
    }
        
    const res = await fetch('http://localhost:3000/api/faculty',postData)
    if (!res.ok) {
        throw new Error("cannot fetch")
    }
    return res.json()
}
export default async function edit_add_department() {

    
    const facultys = await getFaculty()
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