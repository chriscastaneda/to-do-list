week4-day20-html, css, javascript

Git Commands:
---------------
git init
git init .gitignore
git add .
git commit -m "First commit"
git remote add origin remote repository URL
git remote -v
git push origin master




Research
------------
-Html tsg stucture layout page 
-page tags header, content, ect..
alignment, padding, margin
sharing page space(Positioning)(2, 3, 4 colomns. 2, 3, 4 rows)

-moving content left, right, top, botton, corners
-layout content by stack. by row


How To Correctly Use Semantic HTML5 <article>, <main> and <section> Tags
https://ilikekillnerds.com/2014/07/how-to-correctly-use-semantic-html5-article-main-and-section-tags/

		<main id="wrapper" role="main">

			<section id="content">

				<article id="post-123" itemscope itemtype="http://schema.org/BlogPosting">
					<header>
						<h1 itemprop="headline">Blog Post Title</h1>
						<p><time itemprop="datePublished" datetime="2009-10-09">3 days ago</time></p>
					</header>
					<p>This is some blog post content. Within an article element.</p>

					<footer role="contentinfo"><p>Post written by Dwayne and posted in category: Potatoes.</p></footer>

					<section id="comments">

						<article itemprop="comment" itemscope itemtype="http://schema.org/UserComments">
							<p>This is my all important comment, please don't delete it.</p>

							<footer>
								<p>Posted by: George Washington</p>
								<p><time itemprop="commentTime" datetime="2009-10-10">15 minutes ago</time></p>
							</footer>
						</article>

					</section>

				</article>

			</section>

			<aside id="sidebar" role="complementary">

				

			</aside>

		</main>
	