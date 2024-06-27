import { NextResponse } from "next/server";
import pool from "@/app/lib/mysql";
import { redirect } from "next/navigation"

export  async function GET(request) {
    try {
        const connection = await pool.getConnection();
        const query = 'select faculty.name, faculty.total ,round.name rname from faculty JOIN round on (round.idround = faculty.idround)'
        const [rows] = await connection.execute(query)
        connection.release()
        return NextResponse.json({ faculty: rows })

    } catch (error) {
        return NextResponse.json({
            error
        }, { status: 500 })
    }
}

export async function DELETE(request) {
    try {
        const { idfaculty } = await request.json(); // Parse the request body to get the ID
        if (!idfaculty) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const connection = await pool.getConnection();
        const query = 'DELETE FROM faculty WHERE idfaculty = ?';
        const [result] = await connection.execute(query, [idfaculty]);
        connection.release();

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: "No faculty member found with the given ID" }, { status: 404 });
        }

        return NextResponse.json({ message: "Faculty member deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}



