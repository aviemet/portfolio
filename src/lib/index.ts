export const constrain = (val: number, low: number, high: number) => {
	if(val < low) return low
	if(val > high) return high
	return val
}
