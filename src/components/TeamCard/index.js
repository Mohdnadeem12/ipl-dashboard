import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, imageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-text">
      <li className="items-container">
        <img src={imageUrl} alt={name} className="teams-logo" />
        <h1 className="teams-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
