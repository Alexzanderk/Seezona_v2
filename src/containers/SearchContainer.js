import {connect} from 'react-redux'
import Search from '../components/Search';

import {getWeather, removeCity} from '../store/actions/weather_actions'
import {getCitiesName} from '../store/reducers'

const mapStateToProps = (state) => ({
  cities: getCitiesName(state),
  unit: state.weather.unit,
  city: state.weather.city,
})

const mapDispatchToProps = {
  getWeather,
  removeCity
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;