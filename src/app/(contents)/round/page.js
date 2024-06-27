'use client';
import React, { useState, useEffect } from 'react';
import Navber from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import getData from '@/app/components/CLUD/get';

export default function Round() {
    const [rounds, setRounds] = useState({ round: [] });

    useEffect(() => {
        async function fetchRounds() {
            const param = 'round';
            const data = await getData(param);
            setRounds(data);
        }
        fetchRounds();
    }, []);

    const handleFieldChange = (index, field, value) => {
        const updatedRounds = rounds.round.map((round, i) =>
            i === index ? { ...round, [field]: value } : round
        );
        setRounds({ round: updatedRounds });
    };

    const handleSave = async (index) => {
       
    };

    return (
        <div>
            <Navber />
            <div>Round</div>
            {rounds.round.map((round, index) => (
                <div key={index}>
                    รอบ :{' '}
                    <input
                        type="text"
                        value={round.name}
                        onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                    />{' '}
                    &nbsp; จำนวนเข้ารับ :{' '}
                    <input
                        type="text"
                        value={round.total}
                        onChange={(e) => handleFieldChange(index, 'total', e.target.value)}
                    />{' '}
                    &nbsp;
                    <button onClick={() => handleSave(index)}>บันทึก</button>
                </div>
            ))}
            <Footer />
        </div>
    );
}
