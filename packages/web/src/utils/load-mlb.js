function getStats(type, season) {
	const url = `http://lookup-service-prod.mlb.com/json/named.sport_${ type }_tm.bam?league_list_id='mlb'&game_type='R'&season='${ season }'&player_id='660271'`

	return fetch(url)
		.then(res => res.json())
		.then(json => json[`sport_${ type }_tm`].queryResults.row)
}

export default async function() {
	const [
		hitting_2021,
		pitching_2021,
		hitting_2022,
		pitching_2022,
	] = await Promise.all([
		getStats('hitting', 2021),
		getStats('pitching', 2021),
		getStats('hitting', 2022),
		getStats('pitching', 2022),
	])

	return {
		stats: {
			hitting_2021,
			pitching_2021,
			hitting_2022,
			pitching_2022,
		}
	}
}
