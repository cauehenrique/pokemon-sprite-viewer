// components.d.ts
declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		NuxtLink: typeof import('vue-router')['RouterLink']
		NuxtPage: typeof import('vue-router')['RouterView']
	}
}

export { }