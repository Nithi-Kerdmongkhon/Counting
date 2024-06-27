// api/round/route.ts

import { NextResponse } from "next/server";
import pool from "@/app/lib/mysql";
import { redirect } from "next/navigation"

export async function GET(request) {
    try {
        const connection = await pool.getConnection();
        const query = 'select * from round'
        const [rows] = await connection.execute(query)
        connection.release()
        return NextResponse.json({ round: rows })

    } catch (error) {
        return NextResponse.json({
            error
        }, { status: 500 })
    }
}
export async function PUT(request) {
    try {
        const { idround, name, total } = request.body; // รับข้อมูลที่จะอัปเดตผ่าน body ของ request

        // ตรวจสอบค่าที่จำเป็นต้องมี
        if (!idround || !name || !total) {
            return NextResponse.json({ error: 'ข้อมูลไม่ครบถ้วน' }, { status: 400 });
        }

        const connection = await pool.getConnection();
        const query = 'UPDATE round SET name = ?, total = ? WHERE idround = ?';
        const [result] = await connection.execute(query, [name, total, idround]);
        connection.release();

        if (result.affectedRows === 1) {
            return NextResponse.json({ message: 'อัปเดตข้อมูลรอบเรียบร้อยแล้ว' });
        } else {
            return NextResponse.json({ error: 'ไม่สามารถอัปเดตข้อมูลรอบได้' }, { status: 500 });
        }
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูลรอบ:', error);
        return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการอัปเดตข้อมูลรอบ' }, { status: 500 });
    }
}
