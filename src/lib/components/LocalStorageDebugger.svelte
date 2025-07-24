<!-- src/components/debug/LocalStorageDebugger.svelte -->
<script lang="ts">
	let storageData: Record<string, any> | null = $state(null);
	let error: string | null = $state(null);
	let isMinimized: boolean = $state(false);
	let isVisible: boolean = $state(true);

	function loadLocalStorage() {
		try {
			const rawData = localStorage.getItem('cart'); // Replace 'cart' with your actual key
			if (rawData) {
				storageData = JSON.parse(rawData);
				error = null;
			} else {
				error = 'No data found in localStorage for key "cart".';
			}
		} catch (err) {
			error = `Failed to parse localStorage: ${(err as Error).message}`;
			storageData = null;
		}
	}

	function toggleMinimize() {
		isMinimized = !isMinimized;
	}

	function toggleVisibility() {
		isVisible = !isVisible;
	}

	// Load on mount
	loadLocalStorage();
</script>

{#if isVisible}
	<div class="debug-panel">
		<div class="debug-header">
			<h3>📦 LocalStorage Debugger</h3>
			<div class="debug-controls">
				<button
					onclick={toggleMinimize}
					class="control-btn"
					title={isMinimized ? 'Expand' : 'Minimize'}
				>
					{isMinimized ? '➕' : '➖'}
				</button>
				<button onclick={toggleVisibility} class="control-btn close-btn" title="Hide"> ✕ </button>
			</div>
		</div>

		{#if !isMinimized}
			<div class="debug-content">
				<button onclick={loadLocalStorage} class="refresh-btn">🔄 Refresh</button>

				{#if error}
					<p class="error">{error}</p>
				{/if}

				{#if storageData}
					<pre>{JSON.stringify(storageData, null, 2)}</pre>
				{/if}
			</div>
		{/if}
	</div>
{:else}
	<button onclick={toggleVisibility} class="debug-show-btn" title="Show LocalStorage Debugger">
		📦
	</button>
{/if}

<style>
	.debug-panel {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: min(400px, calc(100vw - 40px));
		background: #f5f5f5;
		border: 1px solid #ccc;
		font-family: monospace;
		font-size: 0.9rem;
		z-index: 10000;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		max-width: calc(100vw - 40px);
		box-sizing: border-box;
	}

	.debug-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		background: #e0e0e0;
		border-bottom: 1px solid #ccc;
		border-radius: 6px 6px 0 0;
	}

	.debug-header h3 {
		margin: 0;
		font-size: 1rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.debug-controls {
		display: flex;
		gap: 0.5rem;
		flex-shrink: 0;
	}

	.control-btn {
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #007acc;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 12px;
		padding: 0;
		flex-shrink: 0;
	}

	.close-btn {
		background: #dc3545;
	}

	.debug-content {
		padding: 1rem;
		max-height: 400px;
		overflow: auto;
	}

	.refresh-btn {
		margin-bottom: 1rem;
		padding: 0.3rem 0.6rem;
		background: #28a745;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.error {
		color: red;
		margin-bottom: 1rem;
	}

	pre {
		white-space: pre-wrap;
		word-break: break-all;
		background: #fff;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		margin: 0;
		overflow-x: auto;
		max-width: 100%;
		box-sizing: border-box;
	}

	.debug-show-btn {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: 40px;
		height: 40px;
		background: #007acc;
		color: white;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		font-size: 16px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		z-index: 10000;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	/* Prevent horizontal overflow */
	.debug-panel,
	.debug-content,
	pre {
		max-width: calc(100vw - 40px);
	}

	.debug-content {
		max-width: 100%;
	}
</style>
