import React,{useEffect,useState} from 'react';
import { NativeSelect,FormControl} from '@material-ui/core';
import styles from './country.module.css';
import {fetchCountries} from '../../api';

export default function Country({Hnadlecountryname}) {
    const [Countries,setCountries] =useState([]);
    useEffect(() => {
        const FetchApi =async()=>{
            setCountries(await fetchCountries());
        }
        FetchApi();
    },[setCountries]);
    return (
        <div className={styles.picker}>
            <FormControl className={styles.FormControl}>
                <NativeSelect defaultValue="" onChange={(e)=>Hnadlecountryname(e.target.value)}>
                    <option value="" >Global</option>
                    {Countries.map((e,i) =><option key ={i} value={e}>{e}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
