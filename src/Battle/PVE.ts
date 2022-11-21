import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';

export default class PVE extends Battle {
  private _player: Fighter;
  private _adversaries: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, adversaries: (Fighter | SimpleFighter)[]) {
    super(player);
    this._player = player;
    this._adversaries = adversaries;
  }

  verifyConflict() {
    if (this._player.lifePoints === -1 || this._adversaries.length === 0) {
      return false;
    }
    return true;
  }

  override fight(): number {
    let struggle = true;

    do {
      this._player.attack(
        this._adversaries[getRandomInt(0, this._adversaries.length - 1)],
      );

      this._adversaries.forEach((adversary, i) => {
        if (adversary.lifePoints === -1) {
          this._adversaries.splice(i, 1);
        } else {
          adversary.attack(this._player);
        }
      });
      struggle = this.verifyConflict();
    } while (struggle);
    return super.fight();
  }
}