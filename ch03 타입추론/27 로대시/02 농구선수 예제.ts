
import _ from 'lodash'


interface BasketballPlayer {
  name: string
  team: string
  salary: number
}

// * 모든 nba 선수 명단을 가지고 있다면
// ! declare 키워드는 컴파일러에게 해당 변수나 함수가 이미 존재한다는 것을 알리는 역할, 자바스크립트로 컴파일 되지 않지만, 타입을 참조할 수 있음.
declare const rosters: { [team: string]: BasketballPlayer[] }


// * 루프를 사용해 플랫 목록을 만들려면 타입을 선언해줘야함
let allPlayers:BasketballPlayer[] = []
// ~~~~~~~~~~ Variable 'allPlayers' implicitly has type 'any[]'
//            in some locations where its type cannot be determined
for (const players of Object.values(rosters)) {
	allPlayers = allPlayers.concat(players)
	// ~~~~~~~~~~ Variable 'allPlayers' implicitly has an 'any[]' type
}

// * 더 나은 해법은 배열의 flat() 메서드를 사용. (타입이 declare 되어야 함)
console.log([[1], 2].flat()) // [1, 2]
let allPlayers2 = Object.values(rosters).flat()


// * 팀별로 연봉순 정렬, 최고 연봉 선수의 명단을 만들려면

// 팀이름의 속성을 가지고 값에 팀선수배열이 들어가는 객체를 만듬
const teamToPlayers: { [team: string]: BasketballPlayer[] } = {}
for (const player of allPlayers) {
	const { team } = player
  // 키값에 팀이 없으면 그 값에 빈배열을 넣고
	teamToPlayers[team] = teamToPlayers[team] || []
  // 그 배열에 선수를 추가
	teamToPlayers[team].push(player)
}

// 만든 객체에서 연봉기준으로 정렬
for (const players of Object.values(teamToPlayers)) {
	players.sort((a, b) => b.salary - a.salary)
}

// 팀별 최고연봉자 추출
const bestPaid = Object.values(teamToPlayers).map((players) => players[0])
// 정렬
bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary)
console.log(bestPaid)

// * 로대시를 사용하면
const bestPaid2 = _(allPlayers)
  .groupBy(player => player.team)
  .mapValues(players => _.maxBy(players, p => p.salary)!)
  .values()
  .sortBy(p => -p.salary)
  .value() // Type is BasketballPlayer[]

export default {}
