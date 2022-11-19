import Energy from '../Energy';

// interface Fighter {
//   lifePoints: number;
//   strength: number;
//   defense: number;
//   energy?: Energy;
//   attack(enemy: Fighter): void;
//   special?(enemy: Fighter): void;
//   levelUp(): void;
//   receiveDamage(attackPoints: number): number;
// }

interface Fighter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter): void;
  levelUp(): void;
}

export default Fighter;