export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const add = () => {
	return {
		type: ADD
	}
}

export const del = () =>{
	return {
		type: DELETE
	}
}