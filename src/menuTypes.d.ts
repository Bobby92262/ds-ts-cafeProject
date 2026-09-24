export interface MenuItem {
    id: number,
    name: string,
    course: Course,
    price: number,
    discountPercent?: number,
    availableFrom?: Date,
    nutrition:{
        calories: number,
        allergens: string[]
    },
};

export type Course = 'starter' | 'main' | 'dessert'

export interface ComboDeal {
    id: number,
    name: string,
    items: MenuItem[],
    price: number
};

export type Orderline = MenuItem | ComboDeal
export type AllergyCard = Omit<MenuItem, "nutrition"> & {warning: string}