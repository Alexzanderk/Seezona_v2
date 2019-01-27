import {connect} from 'react-redux'
import CitiesWeatherDialog from '../components/CitiesWeatherDialog';

import { getCitiesName } from '../store/reducers'

const mapStateToProps = (state) => ({
  unit: state.weather.unit,
  cities: getCitiesName(state),
  citiesWeather: state.weather.citiesWeather,
  loading: state.weather.loading,
})



const SearchContainer = connect(mapStateToProps)(CitiesWeatherDialog);

export default SearchContainer;