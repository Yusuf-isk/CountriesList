import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CountryObject } from './type'
import { CountryDetails } from './Util';

function Detail() {
    const [country, setCountry] = useState<CountryObject>();
    const { name } = useParams();
    useEffect(() => {
        
        try {
            CountryDetails(name!).then(res => {
                const dt: CountryObject = res.data;
                setCountry(dt);
            });
        } catch (error) {
            console.log('Network Error' + error)
        }
    }, [])
    
    console.log('countriy', country)

    return (
        <div className='container-sm-fluid px-4'>
            <div className='row'>
            {!country ? <div>Hata oluştu</div> :
                <div className='card card-fluid' style={{ marginTop: "20px" }}>
                    <div className='col'>
                        <p style={{marginTop:"10px", width: "30%", border: "2px solid", borderRadius: "5px" }}>Hosgeldiniz {country?.capital}</p>
                        <div>{country?.currencies}</div>
                        <div>{country?.name}</div>
                    </div>
                    <div className='col'>
                        <p>Merhaba</p>
                    </div>
                </div>}

            </div>
        </div>
    )
}
export default Detail;