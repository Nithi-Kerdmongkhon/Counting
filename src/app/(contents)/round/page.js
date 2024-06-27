// /app/round/page.tsx
"use client"
import Navber from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import getData from "@/app/components/CLUD/get"


export default async function Round() {
    const param = "round";
    const rounds = await getData(param)
		console.log(rounds)

    return (
        <div>
            <Navber/>
            <div>Round</div>
            {rounds.round.map((round , index ) => (
                    <div key={index}>
                        รอบ : <input type="text" value={round.name} onChange={(e) => handleNameChange(e.target.value)} /> &nbsp;
                        จำนวนเข้ารับ : <input  type="text" value={round.total} onChange={(e) => handleTotalChange(e.target.value)}/> &nbsp;
                        <button>บันทึก</button>
                    </div> 
            ))}
            <Footer/>
        </div>
    )
}