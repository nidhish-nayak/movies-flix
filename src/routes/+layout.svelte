<script>
	import '../app.postcss';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/test-server">Test Server</a></li>
		<li><a href="/tv-series">TV Series</a></li>
	</ul>
</nav>
<slot />

<style>
	ul {
		display: flex;
		justify-content: center;
	}

	li {
		margin: 1em;
		padding: 0.5em;
		background-color: #ececec;
		border-radius: 2px;
	}

	li:hover {
		background-color: #cecece;
	}
</style>
