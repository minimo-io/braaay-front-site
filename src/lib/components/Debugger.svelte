<!-- src/components/debug/LocalStorageDebugger.svelte -->
<script lang="ts">
	type LogEntry = {
		id: number;
		type: 'log' | 'warn' | 'error' | 'info';
		message: string;
		timestamp: Date;
	};
	let storageData: Record<string, any> | null = $state(null);
	let error: string | null = $state(null);
	// Start minimized (if it were visible)
	let isMinimized: boolean = $state(true);
	// Start hidden/closed by default
	let isVisible: boolean = $state(false);
	let activeTab: 'storage' | 'console' = $state('storage');
	let consoleLogs: LogEntry[] = $state([]);
	let logCount: { log: number; warn: number; error: number } = $state({
		log: 0,
		warn: 0,
		error: 0
	});
	let nextId: number = $state(0);
	let collapsedLogs: Set<number> = $state(new Set());
	// State for auto-update visual feedback
	let isAutoUpdating: boolean = $state(false);
	// Store original console methods
	const originalConsole = {
		log: console.log,
		warn: console.warn,
		error: console.error,
		info: console.info
	};

	// DO NOT restore console methods in cleanup
	// Doing so causes infinite loops when logs happen during effect teardown
	function captureConsole() {
		console.log = (...args: any[]) => {
			addLog('log', args);
			originalConsole.log(...args);
		};
		console.warn = (...args: any[]) => {
			addLog('warn', args);
			originalConsole.warn(...args);
		};
		console.error = (...args: any[]) => {
			addLog('error', args);
			originalConsole.error(...args);
		};
		console.info = (...args: any[]) => {
			addLog('info', args);
			originalConsole.info(...args);
		};
	}

	function addLog(type: LogEntry['type'], args: any[]) {
		const message = args
			.map((arg) => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)))
			.join(' ');
		consoleLogs = [
			{
				id: nextId++,
				type,
				message,
				timestamp: new Date()
			},
			...consoleLogs
		];
		logCount = { ...logCount };
		logCount[type] = (logCount[type] || 0) + 1;
	}

	function loadLocalStorage() {
		try {
			const rawData = localStorage.getItem('cart');
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
	function switchTab(tab: 'storage' | 'console') {
		activeTab = tab;
	}
	function clearLogs() {
		consoleLogs = [];
		logCount = { log: 0, warn: 0, error: 0 };
		collapsedLogs = new Set();
	}
	function formatTime(date: Date): string {
		return date.toLocaleTimeString();
	}
	function toggleLogCollapse(logId: number) {
		if (collapsedLogs.has(logId)) {
			collapsedLogs = new Set([...collapsedLogs].filter((id) => id !== logId));
		} else {
			collapsedLogs = new Set([...collapsedLogs, logId]);
		}
	}

	// $effect for auto-updating
	$effect(() => {
		let intervalId: ReturnType<typeof setInterval> | undefined;
		if (isVisible && !isMinimized && activeTab === 'storage') {
			isAutoUpdating = true;
			intervalId = setInterval(() => {
				isAutoUpdating = true;
				loadLocalStorage();
				isAutoUpdating = false;
			}, 2000);
		} else {
			isAutoUpdating = false;
		}

		// 🔥 CRITICAL FIX: REMOVE console.log = originalConsole.log
		// It causes infinite loop when SearchBar logs during cleanup
		return () => {
			if (intervalId !== undefined) {
				clearInterval(intervalId);
			}
			isAutoUpdating = false;
			// ❌ DO NOT RESTORE CONSOLE METHODS
			// console.log = originalConsole.log;
			// console.warn = originalConsole.warn;
			// console.error = originalConsole.error;
			// console.info = originalConsole.info;
		};
	});

	// Initialize
	loadLocalStorage();
	captureConsole();
</script>

{#if isVisible}
	<div class="debug-panel">
		<div class="debug-header">
			<h3>📦 Debug Panel</h3>
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
			<div class="debug-tabs">
				<button class:active={activeTab === 'storage'} onclick={() => switchTab('storage')}>
					Storage
				</button>
				<button class:active={activeTab === 'console'} onclick={() => switchTab('console')}>
					Console ({consoleLogs.length})
				</button>
			</div>
			<div class="debug-content">
				{#if activeTab === 'storage'}
					<button
						onclick={loadLocalStorage}
						class="refresh-btn"
						class:updating={isAutoUpdating}
						disabled={isAutoUpdating}
					>
						{#if isAutoUpdating}
							🔄 Auto-Refreshing...
						{:else}
							🔄 Refresh Storage
						{/if}
					</button>
					{#if error}
						<p class="error">{error}</p>
					{/if}
					{#if storageData}
						<pre>{JSON.stringify(storageData, null, 2)}</pre>
					{/if}
				{:else if activeTab === 'console'}
					<div class="console-controls">
						<button onclick={clearLogs} class="clear-btn">🗑️ Clear Logs</button>
						<div class="log-counts">
							<span class="log-count log">log: {logCount.log}</span>
							<span class="log-count warn">warn: {logCount.warn}</span>
							<span class="log-count error">error: {logCount.error}</span>
						</div>
					</div>
					<div class="console-logs">
						{#if consoleLogs.length === 0}
							<p class="no-logs">No console logs captured yet.</p>
						{:else}
							{#each consoleLogs as log (log.id)}
								<div class="log-entry {log.type}">
									<button
										type="button"
										class="log-header"
										onclick={() => toggleLogCollapse(log.id)}
										title="Click to toggle"
										aria-expanded={!collapsedLogs.has(log.id)}
									>
										<span class="log-type {log.type}">{log.type}</span>
										<span class="log-time">{formatTime(log.timestamp)}</span>
										<span class="collapse-indicator">
											{collapsedLogs.has(log.id) ? '➕' : '➖'}
										</span>
									</button>
									{#if !collapsedLogs.has(log.id)}
										<pre class="log-message">{log.message}</pre>
									{/if}
								</div>
							{/each}
						{/if}
					</div>
				{/if}
			</div>
		{/if}
	</div>
{:else}
	<button onclick={toggleVisibility} class="debug-show-btn" title="Show Debug Panel"> 📦 </button>
{/if}

<style>
	.debug-panel {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: min(500px, calc(100vw - 40px));
		background: #f5f5f5;
		border: 1px solid #ccc;
		font-family: monospace;
		font-size: 0.9rem;
		z-index: 10000;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		max-width: calc(100vw - 40px);
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
	.debug-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		background: #e0e0e0;
		border-bottom: 1px solid #ccc;
		border-radius: 6px 6px 0 0;
		flex-shrink: 0;
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
	.debug-tabs {
		display: flex;
		border-bottom: 1px solid #ccc;
		flex-shrink: 0;
	}
	.debug-tabs button {
		flex: 1;
		padding: 0.5rem;
		border: none;
		background: #f0f0f0;
		cursor: pointer;
		font-family: monospace;
		font-size: 0.9rem;
	}
	.debug-tabs button.active {
		background: #007acc;
		color: white;
	}
	.debug-content {
		padding: 1rem;
		max-height: 400px;
		overflow: auto;
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.refresh-btn,
	.clear-btn {
		margin-bottom: 1rem;
		padding: 0.3rem 0.6rem;
		background: #28a745;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		align-self: flex-start;
	}
	.clear-btn {
		background: #dc3545;
	}
	.refresh-btn.updating {
		background-color: #17a2b8;
	}
	.refresh-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
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
	.console-controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.log-counts {
		display: flex;
		gap: 1rem;
		font-size: 0.8rem;
	}
	.log-count {
		padding: 2px 6px;
		border-radius: 3px;
	}
	.log-count.log {
		background: #e0e0e0;
	}
	.log-count.warn {
		background: #fff3cd;
		color: #856404;
	}
	.log-count.error {
		background: #f8d7da;
		color: #721c24;
	}
	.console-logs {
		flex: 1;
		overflow-y: auto;
	}
	.log-entry {
		margin-bottom: 0.5rem;
		border-radius: 4px;
		overflow: hidden;
	}
	.log-entry.log {
		border-left: 3px solid #007acc;
	}
	.log-entry.warn {
		border-left: 3px solid #ffc107;
		background: #fff3cd10;
	}
	.log-entry.error {
		border-left: 3px solid #dc3545;
		background: #f8d7da10;
	}
	.log-entry.info {
		border-left: 3px solid #17a2b8;
	}
	.log-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.25rem 0.5rem;
		background: rgba(0, 0, 0, 0.05);
		font-size: 0.8rem;
		cursor: pointer;
		user-select: none;
	}
	.log-type {
		font-weight: bold;
		text-transform: uppercase;
	}
	.log-type.log {
		color: #007acc;
	}
	.log-type.warn {
		color: #856404;
	}
	.log-type.error {
		color: #dc3545;
	}
	.log-type.info {
		color: #17a2b8;
	}
	.log-time {
		color: #666;
	}
	.collapse-indicator {
		font-size: 12px;
	}
	.log-message {
		margin: 0;
		padding: 0.5rem;
		background: white;
		border-top: 1px solid #eee;
		font-size: 0.85rem;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.no-logs {
		text-align: center;
		color: #666;
		font-style: italic;
		padding: 2rem;
	}
	.debug-panel,
	.debug-content,
	pre {
		max-width: calc(100vw - 40px);
	}
</style>
