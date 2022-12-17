import { c as createVNode, F as Fragment } from '../entry.mjs';
import 'html-escaper';
import '@astrojs/netlify/netlify-functions.js';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const html = "<p>Cuando trabajé en el Red Roaster en Brighton, UK, tuve la oportunidad de aprender sobre el arte del tueste artesanal del café. En este blog post, quiero compartir mis experiencias y lo que he aprendido sobre este proceso fascinante.\n<br>\nEl tueste artesanal del café es una técnica que implica tostar granos de café de manera cuidadosa y precisa para obtener el mejor sabor posible. <br>\nEl café se tosta a altas temperaturas durante un período de tiempo determinado, lo que hace que los granos se expandan y cambien de color. El grado de tueste determina el sabor final del café. Por ejemplo, un café con un tueste más claro tendrá un sabor más ligero y cítrico, mientras que uno con un tueste más oscuro tendrá un sabor más intenso y achocolatado. <br>\nEn el Red Roaster, nuestro equipo de tueste artesanal estaba compuesto por un grupo de personas altamente capacitadas y apasionadas por el café.\n<br>\nCada uno de nosotros tenía nuestra propia filosofía sobre cómo tostar el café para obtener el mejor sabor posible. Utilizábamos una variedad de técnicas y métodos, pero todos seguíamos un proceso básico que incluía cuatro pasos principales: selección de granos de café de alta calidad, tostado a la temperatura adecuada, enfriamiento rápido y molienda fina.\nEn cuanto a la selección de granos de café, era fundamental elegir solo los granos más frescos y de alta calidad. Esto se hace a través de un proceso de cuidada selección y degustación, en el que se buscan granos que tengan el sabor y aroma deseados. Una vez que se ha seleccionado el grano adecuado, se procede al tueste.\nEl tueste es el corazón del proceso de producción del café. Es en este punto donde los granos adquieren su sabor característico y donde se pueden producir grandes diferencias en el sabor final del café. Es importante tostar los granos a la temperatura adecuada y durante el tiempo justo para obtener el sabor deseado. En el Red Roaster, utilizábamos un horno de alta calidad que nos permitía controlar la temperatura y el tiempo de tueste con precisión.</p>\n<p>Una vez que los granos han sido tostados, es importante enfriarlos rápidamente para evitar que sigan cocinándose y perdiendo su sabor. En el Red Roaster, utilizábamos un enfriador de aire que nos permitía enfriar los granos de manera rapida.</p>\n<p>Después de enfriar los granos de café, llega el momento de molerlos. La molienda es un paso crucial en el proceso de producción del café, ya que determina la calidad y el sabor final del café. Una molienda fina es ideal para extraer el máximo sabor del café, mientras que una molienda más gruesa puede resultar en un sabor más ligero y menos intenso. En el Red Roaster, utilizábamos molinos de alta calidad que nos permitían moler los granos de café con precisión y obtener una molienda uniforme.\nUna vez que los granos de café han sido tostados, enfriados y molidos, están listos para ser utilizados en una variedad de bebidas. En el Red Roaster, ofrecíamos una amplia selección de bebidas de café, desde expresos y lattes hasta cappuccinos y mocaccinos. Cada una de estas bebidas estaba hecha con granos de café tostados y molidos a mano, lo que le daba un sabor único y delicioso.\nEl tueste artesanal del café es un proceso fascinante que requiere tanto habilidad como pasión. En el Red Roaster, me sentí afortunado de poder trabajar con un equipo de tueste artesanal dedicado y apasionado, y aprender de ellos sobre este arte maravilloso. Aunque ya no trabajo allí, sigo siendo un gran apasionado del café y siempre estoy buscando maneras de mejorar mi propio proceso de tueste artesanal en casa. Si tú también eres un amante del café, te animo a que experimentes con el tueste artesanal y descubras por ti mismo las deliciosas posibilidades que ofrece.</p>";

				const frontmatter = {"title":"Red Roaster","slug":"red-roaster","excerpt":"Cuando trabajé en el Red Roaster en Brighton, UK, tuve la oportunidad de aprender sobre el arte del tueste artesanal del café. En este blog post, quiero compartir mis experiencias y lo que he aprendido sobre este proceso fascinante.","img":"blog9.jpg","tags":["roaster"],"pubDate":"22.02.2022","author":"Alessandro Giuzio"};
				const file = "/Users/alessandro-giuzio/Dropbox/Mac/Desktop/Astro-CoffeeSoul/super-shell/src/posts/tostador-2.md";
				const url = undefined;
				function rawContent() {
					return "\nCuando trabajé en el Red Roaster en Brighton, UK, tuve la oportunidad de aprender sobre el arte del tueste artesanal del café. En este blog post, quiero compartir mis experiencias y lo que he aprendido sobre este proceso fascinante.\n</br>\nEl tueste artesanal del café es una técnica que implica tostar granos de café de manera cuidadosa y precisa para obtener el mejor sabor posible. </br>\nEl café se tosta a altas temperaturas durante un período de tiempo determinado, lo que hace que los granos se expandan y cambien de color. El grado de tueste determina el sabor final del café. Por ejemplo, un café con un tueste más claro tendrá un sabor más ligero y cítrico, mientras que uno con un tueste más oscuro tendrá un sabor más intenso y achocolatado. </br>\nEn el Red Roaster, nuestro equipo de tueste artesanal estaba compuesto por un grupo de personas altamente capacitadas y apasionadas por el café.\n</br>\nCada uno de nosotros tenía nuestra propia filosofía sobre cómo tostar el café para obtener el mejor sabor posible. Utilizábamos una variedad de técnicas y métodos, pero todos seguíamos un proceso básico que incluía cuatro pasos principales: selección de granos de café de alta calidad, tostado a la temperatura adecuada, enfriamiento rápido y molienda fina.\nEn cuanto a la selección de granos de café, era fundamental elegir solo los granos más frescos y de alta calidad. Esto se hace a través de un proceso de cuidada selección y degustación, en el que se buscan granos que tengan el sabor y aroma deseados. Una vez que se ha seleccionado el grano adecuado, se procede al tueste.\nEl tueste es el corazón del proceso de producción del café. Es en este punto donde los granos adquieren su sabor característico y donde se pueden producir grandes diferencias en el sabor final del café. Es importante tostar los granos a la temperatura adecuada y durante el tiempo justo para obtener el sabor deseado. En el Red Roaster, utilizábamos un horno de alta calidad que nos permitía controlar la temperatura y el tiempo de tueste con precisión.\n\nUna vez que los granos han sido tostados, es importante enfriarlos rápidamente para evitar que sigan cocinándose y perdiendo su sabor. En el Red Roaster, utilizábamos un enfriador de aire que nos permitía enfriar los granos de manera rapida.\n\nDespués de enfriar los granos de café, llega el momento de molerlos. La molienda es un paso crucial en el proceso de producción del café, ya que determina la calidad y el sabor final del café. Una molienda fina es ideal para extraer el máximo sabor del café, mientras que una molienda más gruesa puede resultar en un sabor más ligero y menos intenso. En el Red Roaster, utilizábamos molinos de alta calidad que nos permitían moler los granos de café con precisión y obtener una molienda uniforme.\nUna vez que los granos de café han sido tostados, enfriados y molidos, están listos para ser utilizados en una variedad de bebidas. En el Red Roaster, ofrecíamos una amplia selección de bebidas de café, desde expresos y lattes hasta cappuccinos y mocaccinos. Cada una de estas bebidas estaba hecha con granos de café tostados y molidos a mano, lo que le daba un sabor único y delicioso.\nEl tueste artesanal del café es un proceso fascinante que requiere tanto habilidad como pasión. En el Red Roaster, me sentí afortunado de poder trabajar con un equipo de tueste artesanal dedicado y apasionado, y aprender de ellos sobre este arte maravilloso. Aunque ya no trabajo allí, sigo siendo un gran apasionado del café y siempre estoy buscando maneras de mejorar mi propio proceso de tueste artesanal en casa. Si tú también eres un amante del café, te animo a que experimentes con el tueste artesanal y descubras por ti mismo las deliciosas posibilidades que ofrece.\n";
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
