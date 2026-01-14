export interface Option {
    text: string;
    next: string;
    type: string;
}

export interface Scene {
    text: string;
    question: string;
    options: Option[];
}

export interface Character {
    name: string;
    title: string;
    rarity: string;
    item: string;
    desc: string;
}

export type ScenesData = Record<string, Scene>;
export type CharactersData = Record<string, Character>;

export interface GameScores {
    Q2: string;
    Q3: string;
    Q4: string;
    Final: string;
}
