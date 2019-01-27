export const formatTemperature = unit => {
	if (unit === 'metric') {
		return '℃';
	} else if (unit === 'imperial') {
		return '℉';
	} else {
		return '°';
	}
};
