import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    result,
    umpires,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    secondInnings,
    venue,
  } = latestMatch

  return (
    <div className="latest-match-card">
      <div className="matches-container">
        <div className="match-card">
          <h1 className="latest-heading">{competingTeam}</h1>
          <p className="latest-date">{date}</p>
          <p className="latest-venue">{venue}</p>
          <p className="latest-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="latest-logo"
        />
      </div>
    </div>
  )
}

export default LatestMatch
