import React ,{useEffect,useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';    

import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(()=>{
        const fetchAPI = async ()=>{
            setFetchCountries( await fetchCountries());
        }   
        fetchAPI();
    },[setFetchCountries]);
    return (
        <div>
          <FormControl className={styles.formControl}>
              <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                  <option value="">Global</option>
                    {fetchedCountries.map((country, i)=><option key={i} value={country}>{country}</option>)}
              </NativeSelect>
          </FormControl>
        </div>
    )
}

export default CountryPicker;
