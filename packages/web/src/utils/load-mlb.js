function getStats(season, game_type, sport) {
	// TODO: refactor into url params
	const url = `http://lookup-service-prod.mlb.com/json/named.sport_${ sport }_tm.bam?league_list_id='mlb'&game_type='${ game_type }'&season='${ season }'&player_id='660271'`

	return fetch(url)
		.then(res => res.json())
		.then(json => json[`sport_${ sport }_tm`].queryResults.row)
}

export default async function() {
	const [
		h_2022_R, p_2022_R,
		h_2022_S, p_2022_S,
		h_2021_R, p_2021_R,
	] = await Promise.all([
		getStats(2022, 'R', 'hitting'),
		getStats(2022, 'R', 'pitching'),
		getStats(2022, 'S', 'hitting'),
		getStats(2022, 'S', 'pitching'),
		getStats(2021, 'R', 'hitting'),
		getStats(2021, 'R', 'pitching'),
	])

	return {
		stats: {
			2022: {
				R: [h_2022_R, p_2022_R],
				S: [h_2022_S, p_2022_S],
			},
			2021: {
				R: [h_2021_R, p_2021_R],
			}
		}
	}
}
