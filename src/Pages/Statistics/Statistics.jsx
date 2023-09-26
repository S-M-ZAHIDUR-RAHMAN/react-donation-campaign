/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const stat = useLoaderData([]);
    const totalDonationNumber = stat?.length;
    // console.log(totalDonationNumber);


    const [yourSlice, setYourSlice] = useState([]);

    useEffect(() => {
        const getStatItems = JSON.parse(localStorage.getItem('donations'))
        setYourSlice(getStatItems)
    }, [])

    // console.log(yourSlice.length);

    const percentageStat = (yourSlice.length / totalDonationNumber) * 100;
    const yourDonation = parseFloat(percentageStat.toFixed(1));
    console.log(yourDonation);
    const totalDonation = 100 - yourDonation;
    console.log(totalDonation);




    const data = [
        { name: 'Total Donation', value: totalDonation },
        { name: 'Your Donation', value: yourDonation },
    ];

    const COLORS = ['#0088FE', '#00C49F'];

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
                <PieChart className="" width={400} height={400}>
                    <Pie className="flex justify-center items-center"
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        labelLine={false}
                        aria-description="name"        
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className="flex justify-around p-0 mb-20 gap-20">
                        <div className="flex justify-center items-center gap-2">
                            <p className="font-bold">Total Donation <span className="text-red-600">[percentage(%)]</span></p>
                            <div className="bg-[#0088FE] w-[100px] h-[12px]"></div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <p className="font-bold">Your Donation <span className="text-red-600">[percentage(%)]</span></p>
                            <div className="bg-[#00C49F] w-[100px] h-[12px]"></div>
                        </div>
                    </div>
            </div>

        </div>

    );
}



export default Statistics;