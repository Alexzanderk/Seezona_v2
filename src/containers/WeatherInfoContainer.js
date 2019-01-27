import { connect } from 'react-redux';
import WeatherInfo from '../components/WeatherInfo';
import {getForecast} from '../store/actions/foresact_action'

const mapStateToProps = state => ({
    currentCityWeather: state.weather.currentCityWeather,
    loading: state.weather.loading,
    unit: state.weather.unit,
    city: state.weather.city
});

const mapDispatchToProps = {
    getForecast
  }

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);

export default SearchContainer;
