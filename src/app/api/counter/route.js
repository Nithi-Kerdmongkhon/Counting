// api/round/route.ts

import { NextResponse } from "next/server";
import pool from "@/app/lib/mysql";
import { redirect } from "next/navigation"

export async function GET(request) {
    try {
        const connection = await pool.getConnection();
        const query = 'select current from counter'
        const [rows] = await connection.execute(query)
        connection.release()
        return NextResponse.json({ count: rows })

    } catch (error) {
        return NextResponse.json({
            error
        }, { status: 500 })
    }
}