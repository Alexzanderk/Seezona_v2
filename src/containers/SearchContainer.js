import {connect} from 'react-redux'
import Search from '../components/Search';

import { getWeather, removeCity, getWeatherAll } from '../store/actions/weather_actions'
import {toggleAutoCheck} from '../store/actions/settings_action'
import { getCitiesName } from '../store/reducers'

const mapStateToProps = (state) => ({
  cities: getCitiesName(state),
  unit: state.weather.unit,
  city: state.weather.city,
  autocheck: state.settings.autoCheck,
})

const mapDispatchToProps = {
  getWeather,
  removeCity,
  toggleAutoCheck,
  getWeatherAll
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;