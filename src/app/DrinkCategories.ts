export const DRINK_CATEGORIES: Category[] = [
    { name: 'Ordinary Drink\'s', value: 'Ordinary_Drink' },
    { name: 'Cocktail\'s', value: 'Cocktail'},
    { name: 'Milk / Float / Shake\'s', value: 'Milk_Float_Shake'},
    { name: 'Other / Unknown', value: 'Other_Unknown'},
    { name: 'Cocoa Drink\'s', value: 'Cocoa'},
    { name: 'Shot\'s', value: 'Shot'},
    { name: 'Coffee / Tea\'s', value: 'Coffee_Tea'},
    { name: 'Homemade Liqueur\'s', value: 'Homemade_Liqueur'},
    { name: 'Punch / Party Drink\'s', value: 'Punch_Party_Drink'},
    { name: 'Beer\'s', value: 'Beer'},
    { name: 'Soft Drink\'s / Soda\'s', value: 'Soft_Drink_Soda'}
];
export interface Category {
    name: string;
    value: string;
}
