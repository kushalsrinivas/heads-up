

export type Event =  { 
    created_at: string;
    creator_mail: string;
    creator_name: string;
    description: string;
    event_schedule: null;
    game: string;
    name: string;
    no_players: number;
    id: number;
    uuid: string;
    pricepool : PricePool;
}
export type PricePool = {
    pool : number;
    first : number;
    second : number;
    third : number;
}