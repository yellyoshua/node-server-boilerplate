declare var logger: {
	info(message: string, obj: Record<string, any>): void
	debug(message: string, obj: Record<string, any>): void
	error(message: string, obj: Record<string, any>): void
};