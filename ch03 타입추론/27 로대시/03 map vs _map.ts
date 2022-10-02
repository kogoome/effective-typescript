
import _ from 'lodash'
interface BasketballPlayer {
  name: string
  team: string
  salary: number
}
declare const rosters: { [team: string]: BasketballPlayer[] }
const allPlayers = Object.values(rosters).flat()


// * 같은 로직
const namesA = allPlayers.map(player => player.name)
const namesB = _.map(allPlayers, player => player.name)
// _.map은 프로퍼티만 명시하여 리턴시킬 수 있음.
const namesC = _.map(allPlayers, 'name')



const salaries = _.map(allPlayers, 'salary')
const teams = _.map(allPlayers, 'team')
const mix = _.map(allPlayers, Math.random() < 0.5 ? 'name' : 'salary')
export default {}

// ! 결론 : 로대시 좋다.