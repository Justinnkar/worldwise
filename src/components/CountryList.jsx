import Spinner from './Spinner'
import styles from './CountryList.module.css'
import CountryItem from './CountryItem'
import Message from './Message'

function CountryList({cities, isLoading}) {
    if(isLoading) return <Spinner />

    if (!cities.length) 
        return 
        (<Message message="Add your city by clicking on 
        a city on the map" />
    )

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el)=> el.country).includes(city.country))
            return [...arr, { country: city.country, emojii: city.emoji}]
        else return arr;
    }, [])

    console.log(countries)

    return (
        <ul className={styles.countryList}>
            {countries.map((country)=> (
            <CountryItem country={country} key={country.id} />
            ))}
        </ul>
    )
}

export default CountryList
