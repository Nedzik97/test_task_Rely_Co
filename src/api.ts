export const getData = <T>(url: string, onSuccess: (res: T) => void, onError: (error: Error) => void) => {
	return fetch(url)
	.then((res) => res.json())
	.then(res => onSuccess(res))
	.catch((error) => onError(error))
}