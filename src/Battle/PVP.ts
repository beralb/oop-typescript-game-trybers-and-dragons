import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  override fight(): number {
    let gameFinish = 1;
    const players = [this._player1, this._player2];
    let playersIndex = 0;

    do {
      const nextGamer = playersIndex ? 0 : 1;
      players[playersIndex].attack(players[nextGamer]);
      gameFinish = players[nextGamer].lifePoints;
      playersIndex = nextGamer;
    } while (gameFinish > 0);

    return super.fight();
  }
}

export default PVP;