<script>
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

	import '../app.css';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<a href="/">Home</a> | <a href="protobuf">Protobuf</a>

	<slot />
</QueryClientProvider>
