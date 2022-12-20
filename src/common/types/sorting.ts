export interface ISorting {
	sorting: Sort
}

export interface Sort {
	name: string | number
	sortingProperty: number | string
}
