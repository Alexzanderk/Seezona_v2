import {connect} from 'react-redux'
import ForecastWeatherDialog from '../components/ForecastWeatherDialog';


const mapStateToProps = (state) => ({
  unit: state.weather.unit,
  city: state.weather.city,
  forecast: state.forecast.forecast,
  loading: state.forecast.loading,
})



const SearchContainer = connect(mapStateToProps)(ForecastWeatherDialog);

export default SearchContainer;