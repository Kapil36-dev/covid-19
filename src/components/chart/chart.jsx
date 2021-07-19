import React,{useState , useEffect} from 'react';
import {FetchDailydata} from '../../api';
import { Line ,Bar } from 'react-chartjs-2';
import styles from './chart.module.css'

export default function Chart({data :{confirmed,recovered,deaths},country}) {
    const [dailydata,setDailydata] = useState([]);

   useEffect(() => {
    const fetchApi = async ()=>{
        setDailydata(await FetchDailydata());
    }
    fetchApi();
   }, [setDailydata])

    const LineChart = (
        dailydata.length
        ?(<Line
            data={{
                labels :dailydata.map(({date})=>date),
                datasets:[{
                    data : dailydata.map(({confirmed})=>confirmed),
                    label :'Infected',
                    borderColor :'#3333ff',
                    fill : true,
                },{
                    data : dailydata.map(({deaths})=>deaths),
                    label :'Deaths',
                    borderColor :'red',
                    backgroundColor :'rgba(255,0,0,0.5)',
                    fill : true,
                }]
            }}
        />):null
    )
    const barchart = (
        confirmed
            ?(
                <Bar
                    data={{
                        labels:['confirmed','recovered','deaths'],
                        datasets:[{
                            label:'Pepole',
                            backgroundColor:[
                                `rgba(255, 0, 0, 0.5)`,
                                `rgba(0, 255, 0, 0.5)`,
                                `rgba( 0, 0, 255, 0.5)`],
                            data : [confirmed.value,recovered.value,deaths.value]
                        }]
                    }}
                    options={{
                        legend : {desplay:false},
                        title : {display : true, text : `current state is ${country}`}
                    }}
                />
            ):null
    );
    return (
        
        <div className ={styles.container}>
            {country?barchart:LineChart}
        </div>
    )
}
