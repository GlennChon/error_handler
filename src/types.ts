export type ErrorModel =  {
	'error-code':number,
	'function-name':string,
	message:string | undefined,
	'stack-trace':string | undefined,
	time:string,
	type: Type,
	'user-id'?: string,	
}

enum Type {
	error = 'error',
	warning = 'warning',
	info = 'info',
	success = 'success',
}
