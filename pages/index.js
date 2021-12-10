import { NextSeo } from 'next-seo';

export default function Home() {
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

  const title = "An NFT based game | Santa Wars"
  return (
    <div className="text-center">
      <NextSeo
        title={title}
        description={title}
        openGraph={{
          url: "https://saasbase.dev/products/santawars",
          title,
          description: title,
          images: [
            {
              url: 'https://saasbase.dev/content/images/2021/07/saasbase-open-graph-1.png',
              width: 800,
              height: 600,
              alt: 'Title Image',
              type: 'image/jpeg',
            }
          ],
          site_name: 'SaaSBase',
        }}
        twitter={{
          site: '@sssaini_',
          cardType: 'summary_large_image',
        }}
      />
      <h1 className="text-5xl font-bold text-center text-gray-700">SantaWars</h1>
      <p>An NFT based game</p>

      <a href="">Tweet that started it all</a>


    </div>
  )
}