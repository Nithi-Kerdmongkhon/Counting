// api/round/route.ts

import { NextResponse } from "next/server";
import pool from "@/app/lib/mysql";

export async function POST(request) {
    try {
        // แยกวิเคราะห์เนื้อหาคำขอเพื่อรับข้อมูลที่จะแทรก
        const body = await request.json();
        const { name, total } = body; // ตัวแปรที่จะแทรกข้อมูลลง

        // การเชื่อมต่อจาก pool
        const connection = await pool.getConnection();
        
        // Prepare the insert query
        const query = 'INSERT INTO faculty (name, total) VALUES (?, ?)'; // คำสั่งเพิ่มข้อมูลลงในฐานข้อมูล
        await connection.execute(query, [name, total]);

        // Release the connection
        connection.release();

        // Return a success response
        return NextResponse.json({ message: 'Data inserted successfully' });

    } catch (error) {
        // Return an error response
        return NextResponse.json({
            error: error.message
        }, { status: 500 });
    }
}
