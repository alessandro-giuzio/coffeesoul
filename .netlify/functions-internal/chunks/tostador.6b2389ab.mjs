import { c as createVNode, F as Fragment } from '../entry.mjs';
import 'html-escaper';
import '@astrojs/netlify/netlify-functions.js';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const html = "<p>Hola, soy Alessandro, experto de café y fundador de este blog.</p>\n<p>El café es mi pasión desde hace años. Me encanta todo lo que tiene que ver con él, desde el olor hasta el sabor y la forma en que hace sentir a la gente.</p>\n<p>Siempre he sido un fanático del café. El café es un ritual que me produce alegría; nunca me ha gustado el café instantáneo ni el preparado a la ligera. En cambio, disfruto descubriendo pequeños tostadores artesanales y la calidad que se desprende de cada sorbo.</p>\n<p>Todo comenzó cuando me mudè a Inglaterra, me inicié en el mundo del café cuando encontrè una pequeña tostadora de 3,5kg de capacidad de la marca Diedrich en un Coffee Shop llamado Red Roaster, donde solían tostar los granos todos los días, para el placer del olfato de la gente que tenía la suerte de vivir en aquel barrio!</p>";

				const frontmatter = {"title":"Tostador","slug":"tostador","excerpt":"El café es mi pasión desde hace años. Me encanta todo lo que tiene que ver con él, desde el olor hasta el sabor y la forma en que hace sentir a la gente.","tags":["coffee"],"img":"blog4.jpg","pubDate":"22.02.2022","author":"Alessandro Giuzio"};
				const file = "/Users/alessandro-giuzio/Dropbox/Mac/Desktop/Astro-CoffeeSoul/super-shell/src/posts/tostador.md";
				const url = undefined;
				function rawContent() {
					return "\nHola, soy Alessandro, experto de café y fundador de este blog.\n\nEl café es mi pasión desde hace años. Me encanta todo lo que tiene que ver con él, desde el olor hasta el sabor y la forma en que hace sentir a la gente.\n\nSiempre he sido un fanático del café. El café es un ritual que me produce alegría; nunca me ha gustado el café instantáneo ni el preparado a la ligera. En cambio, disfruto descubriendo pequeños tostadores artesanales y la calidad que se desprende de cada sorbo.\n\nTodo comenzó cuando me mudè a Inglaterra, me inicié en el mundo del café cuando encontrè una pequeña tostadora de 3,5kg de capacidad de la marca Diedrich en un Coffee Shop llamado Red Roaster, donde solían tostar los granos todos los días, para el placer del olfato de la gente que tenía la suerte de vivir en aquel barrio!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				function getHeaders() {
					console.warn('getHeaders() have been deprecated. Use getHeadings() function instead.');
					return getHeadings();
				}				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					content.astro = {};
					Object.defineProperty(content.astro, 'headings', {
						get() {
							throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')
						}
					});
					Object.defineProperty(content.astro, 'html', {
						get() {
							throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')
						}
					});
					Object.defineProperty(content.astro, 'source', {
						get() {
							throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')
						}
					});
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeaders, getHeadings, rawContent, url };
