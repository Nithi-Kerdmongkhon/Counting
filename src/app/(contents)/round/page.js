"use client";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import React, { useState, useEffect } from 'react';
import styles from "@/app/styles/round.module.css"

export default function Round() {
    const [rounds, setRounds] = useState({ round: [] });

    useEffect(() => {
        fetchRounds();
    }, []);

    const fetchRounds = async () => {
        try {
            const response = await fetch('/api/round');
            if (!response.ok) {
                throw new Error('Failed to fetch rounds');
            }
            const data = await response.json();
            setRounds(data);
        } catch (error) {
            console.error("Error fetching rounds:", error);
        }
    };

    const handleNameChange = (index, value) => {
        setRounds(prevState => {
            const updatedRounds = [...prevState.round];
            updatedRounds[index].name = value;
            return { round: updatedRounds };
        });
    };

    const handleTotalChange = (index, value) => {
        setRounds(prevState => {
            const updatedRounds = [...prevState.round];
            updatedRounds[index].total = value;
            return { round: updatedRounds };
        });
    };

    const saveRounds = async () => {
        try {
            // Iterate over each round and save them
            for (let roundToUpdate of rounds.round) {
                const response = await fetch('/api/round', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: roundToUpdate.idround,
                        name: roundToUpdate.name,
                        total: roundToUpdate.total
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Failed to update round with ID ${roundToUpdate.idround}`);
                }
            }

            console.log('Rounds updated successfully');
            // Fetch the updated rounds after saving
            fetchRounds();

        } catch (error) {
            console.error('Error updating rounds:', error.message);
        }
    };
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.ContainerAll}>
                    <div className={styles.ContainerHeadRound}>Round</div>
                    {rounds.round.map((round, index) => (
                        <div key={index} className={styles.Content1}>
                            รอบ : <input type="text" value={round.name} onChange={(e) => handleNameChange(index, e.target.value)} /> &nbsp;
                            จำนวนเข้ารับ : <input type="text" value={round.total} onChange={(e) => handleTotalChange(index, e.target.value)} /> &nbsp;
                            
                        </div>
                    ))}
                    <button onClick={saveRounds}>บันทึก</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
