import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CountryObject, Name } from './type'
import Country from './components/Country'

function App() {
  const [countries, setCountries] = useState<CountryObject[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryObject[]>("https://restcountries.com/v3.1/all");
      setCountries(data);
    } catch (error) {
      console.log('Ülkeleeri alırken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  console.log('countries', countries);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='table-responsive'>
          <table className='table'>
            <thead className='table-dark'>
              <tr>
              <th scope='col'>Flag</th>
              <th scope='col'>Name</th>
              <th scope='col'>Capital</th>
              <th scope='col'>Detail</th>
              </tr>
            </thead>
            {loading ? "Loading..." :
              countries.map((country, index) => {
                return (
                  <Country key={index} country={country} />
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
}
export default App;