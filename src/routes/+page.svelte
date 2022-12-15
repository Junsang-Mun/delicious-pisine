<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-MDLC2K6XPX"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-MDLC2K6XPX');
	</script>
	<script>
		(function() {
		var w = window;
		if (w.ChannelIO) {
			return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
		}
		var ch = function() {
			ch.c(arguments);
		};
		ch.q = [];
		ch.c = function(args) {
			ch.q.push(args);
		};
		w.ChannelIO = ch;
		function l() {
			if (w.ChannelIOInitialized) {
			return;
			}
			w.ChannelIOInitialized = true;
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
			s.charset = 'UTF-8';
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s, x);
		}
		if (document.readyState === 'complete') {
			l();
		} else if (window.attachEvent) {
			window.attachEvent('onload', l);
		} else {
			window.addEventListener('DOMContentLoaded', l, false);
			window.addEventListener('load', l, false);
		}
		})();
		ChannelIO('boot', {
		"pluginKey": "c0b97386-e5cc-4ce7-9b3f-e5748a5ce987"
		});
	</script>
</svelte:head>

<script>
	import Header from './components/Header.svelte';
	import Main from './components/Main.svelte';
	import '../app.css';
</script>

<Header />
<div class="grid h-screen" style="place-items: start center;">
	<Main />
</div>