import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Bargraph.css'
function Bargraph(props) {
    const chartRef = useRef(null);
  
console.log(props.data)
    useEffect(() => {  
 
    const data = props.data
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the existing chart instance
     } 
   

    const ctx = document.getElementById(`acquisitions${props.count}`);

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(row => row.option),
        datasets: [
          {
            label: `${props.question}`,
            data: data.map(row => row.count),
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 159, 64, 0.7)',

                'rgba(153, 102, 255, 0.7)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 159, 64)',

                'rgb(153, 102, 255)',
              ],
            borderWidth: 1,
          },
        ],
      },
    });

   },[]);  

  return (
    <div className='setWidth'>
      <canvas id={`acquisitions${props.count}`} ></canvas>
      

    </div>
  );
}

export default Bargraph;
