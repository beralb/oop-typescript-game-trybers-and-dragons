import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

type EnemyType = Fighter | SimpleFighter;

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: EnemyType):void;
  special?(enemy: Fighter):void;
  levelUp():void;
  receiveDamage(attackPoints: number):number;
}

export default Fighter;