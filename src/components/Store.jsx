import Card from "./Card";
import NavBar from "./NavBar";

function Store() {
  const posters = [
    {
      id: 1,
      title: "Anime Art Eyes",
      path: "src/assets/images/anime/anime_art_eyes.jpeg",
      description: "Detailed artwork featuring anime eyes.",
      price: 10,
    },
    {
      id: 2,
      title: "Chainsaw Man",
      path: "src/assets/images/anime/chainsaw_man.jpeg",
      description: "Illustration from the Chainsaw Man manga series.",
      price: 12,
    },
    {
      id: 3,
      title: "Death Note",
      path: "src/assets/images/anime/death_note.jpeg",
      description: "Artwork related to the Death Note anime series.",
      price: 8,
    },
    {
      id: 4,
      title: "Kakashi Hatake",
      path: "src/assets/images/anime/kakashi.jpeg",
      description:
        "Artwork featuring Kakashi Hatake from the Naruto anime series.",
      price: 10,
    },
    {
      id: 5,
      title: "Ken Kaneki",
      path: "src/assets/images/anime/keneki_tokyo_ghoul.jpeg",
      description:
        "Illustration of Ken Kaneki from the Tokyo Ghoul manga series.",
      price: 11,
    },
    {
      id: 6,
      title: "Monkey D. Luffy",
      path: "src/assets/images/anime/luffy_onepiece.jpeg",
      description:
        "Artwork featuring Monkey D. Luffy from the One Piece anime series.",
      price: 13,
    },
    {
      id: 7,
      title: "One Piece",
      path: "src/assets/images/anime/one_piece.jpeg",
      description: "Artwork related to the One Piece manga series.",
      price: 10,
    },
    {
      id: 8,
      title: "Pixelated Luffy",
      path: "src/assets/images/anime/pixelated_luffy.jpeg",
      description: "Pixelated artwork of Monkey D. Luffy.",
      price: 9,
    },
    {
      id: 9,
      title: "Roronoa Zoro",
      path: "src/assets/images/anime/rononoa_zoro.jpeg",
      description:
        "Artwork featuring Roronoa Zoro from the One Piece anime series.",
      price: 12,
    },
    {
      id: 10,
      title: "Satoru Gojo",
      path: "src/assets/images/anime/satoru_gojo.jpeg",
      description:
        "Illustration of Satoru Gojo from the Jujutsu Kaisen anime series.",
      price: 14,
    },
    {
      id: 11,
      title: "Tanjiro Kamado",
      path: "src/assets/images/anime/Tanjirou.jpeg",
      description:
        "Artwork featuring Tanjiro Kamado from the Demon Slayer anime series.",
      price: 11,
    },
    {
      id: 12,
      title: "Toji Fushiguro",
      path: "src/assets/images/anime/Toji _ushiguro_Jujutsu_Kaisen.jpeg",
      description:
        "Artwork featuring Toji Fushiguro from the Jujutsu Kaisen anime series.",
      price: 13,
    },
    {
      id: 13,
      title: "Uchiha Itachi",
      path: "src/assets/images/anime/Uchiha_Itachi.jpeg",
      description:
        "Artwork featuring Uchiha Itachi from the Naruto anime series.",
      price: 12,
    },
    {
      id: 14,
      title: "Vintage Anime",
      path: "src/assets/images/anime/vintage.jpeg",
      description: "Vintage-style artwork featuring anime characters.",
      price: 9,
    },
  ];
  return (
    <>
      <NavBar />
      <div className="size-full p-10">
        <h1 className="p-5 text-5xl">PICK YOUR STYLE</h1>
        <div className="m-2 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {posters.map((product) => (
            <Card
              key={product.id}
              productName={product.title}
              productDescription={product.description}
              productImage={product.path}
              productPrice={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Store;
